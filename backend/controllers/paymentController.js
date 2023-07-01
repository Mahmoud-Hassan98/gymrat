const express = require('express');
const pool = require('../db');
const jwt = require("jsonwebtoken");
require("dotenv").config();

const postPayment = (req, res) => {
  const { userId, cartItemIds, totalPrice } = req.body;

  // Insert into the payment table
  const paymentQuery = `
    INSERT INTO payment (user_id, payment_cost)
    VALUES ($1, $2)
    RETURNING payment_id
  `;

  pool.query(paymentQuery, [userId, totalPrice])
    .then((paymentResult) => {
      const paymentId = paymentResult.rows[0].payment_id;

      // Insert into the payment_product table for each cart item
      const paymentProductValues = cartItemIds.map((itemId) => `(${paymentId}, ${itemId})`).join(',');

      const paymentProductQuery = `
        INSERT INTO payment_product (payment_id, product_id)
        VALUES ${paymentProductValues}
      `;

      pool.query(paymentProductQuery)
        .then(() => {
          res.status(200).json({ success: true, message: 'Payment successfully stored' });
        })
        .catch((error) => {
          console.error('Error inserting into payment_product:', error);
          res.status(500).json({ success: false, message: 'An error occurred while storing the payment' });
        });
    })
    .catch((error) => {
      console.error('Error inserting into payment:', error);
      res.status(500).json({ success: false, message: 'An error occurred while storing the payment' });
    });
};


const Paymentcoach = (req, res) => {
    const { userId, coachid, totalPrice } = req.body;
  
    // Insert into the payment table
    const paymentQuery = `
      INSERT INTO payment (user_id, coach_id, payment_cost)
      VALUES ($1, $2, $3)
      RETURNING payment_id
    `;
  
    pool.query(paymentQuery, [userId, coachid, totalPrice])
      .then((paymentResult) => {
        const paymentId = paymentResult.rows[0].payment_id;
  
        res.status(200).json({ success: true, message: 'Payment successfully stored' });
      })
      .catch((error) => {
        console.error('Error inserting into payment:', error);
        res.status(500).json({ success: false, message: 'An error occurred while storing the payment' });
      });
  };

const getPayment = (req, res) => {  
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
  
    let userId;
  
    if (token) {
      const decodedToken = jwt.verify(token, process.env.jwtSecret);
      userId = decodedToken.user_id;
      
      // Fetch payment details with product information using a join query
      const query = `
        SELECT p.payment_id, p.payment_cost, p.payment_date, u.user_name, pr.name, pr.price , pr.id , pr.product_type
        FROM payment p
        JOIN users u ON p.user_id = u.user_id
        JOIN payment_product pp ON p.payment_id = pp.payment_id
        JOIN product pr ON pp.product_id = pr.id
        WHERE p.user_id = $1
      `;
  
      pool.query(query, [userId])
        .then((result) => {
          const payments = result.rows;
          res.status(200).json({ success: true, payments });
        })
        .catch((error) => {
          console.error('Error fetching payment details:', error);
          res.status(500).json({ success: false, message: 'An error occurred while fetching payment details' });
        });
    } else {
      res.status(401).json({ success: false, message: 'Unauthorized' });
    }
  };

const GetSubscriptionStatus = (req, res) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  let userId;

  if (token) {
    try {
      const decodedToken = jwt.verify(token, process.env.jwtSecret);
      userId = decodedToken.user_id;

      // Query the database to check if the user is subscribed to any coach
      const subscriptionQuery = `
        SELECT EXISTS (
          SELECT 1
          FROM payment_product pp
          INNER JOIN payment p ON pp.payment_id = p.payment_id
          WHERE p.user_id = $1 AND p.coach_id IS NOT NULL
        )
      `;

      pool.query(subscriptionQuery, [userId])
        .then((result) => {
          const isSubscribed = result.rows[0].exists;
          if (isSubscribed) {
            res.status(200).json({ success: true, isSubscribed });
          } else {
            res.status(500).json({ success: false, message: 'User is not subscribed to any coach' });
          }
        })
        .catch((error) => {
          console.error('Error retrieving subscription status:', error);
          res.status(500).json({ success: false, message: 'An error occurred while retrieving subscription status' });
        });
    } catch (error) {
      console.error('Error decoding token:', error);
      res.status(400).json({ success: false, message: 'Invalid token' });
    }
  } else {
    res.status(401).json({ success: false, message: 'Authentication token is missing' });
  }
};

const getCoachForUser = (req, res) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
  
    let userId;
  
    if (token) {
      try {
        const decodedToken = jwt.verify(token, process.env.jwtSecret);
        userId = decodedToken.user_id;
  console.log(userId );
        const query = `
          SELECT coach.id, coach.first_name, coach.last_name, coach.email, coach.details, coach.images
          FROM coach
          INNER JOIN payment ON coach.id = payment.coach_id
          WHERE payment.user_id = $1
        `;
  
        pool.query(query, [userId])
          .then((result) => {
            const coaches = result.rows.map((coach) => {
              const base64ImageDatas = coach.images.map((imageData) =>
                Buffer.from(imageData).toString('base64')
              );
              return { ...coach, images: base64ImageDatas };
            });
            res.json(coaches);
          })
          .catch((error) => {
            console.error('Error retrieving coach data:', error);
            const errorMessage = 'Error retrieving coach data';
            res.status(500).json({ error: errorMessage });
          });
      } catch (error) {
        console.error('Error decoding token:', error);
        res.status(401).json({ error: 'Invalid token' });
      }
    } else {
      res.status(401).json({ error: 'Authentication required' });
    }
  };
  



  module.exports = {
    postPayment,
    getPayment,
    GetSubscriptionStatus,
    Paymentcoach,
    getCoachForUser
  };