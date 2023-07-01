const express = require('express');
const pool = require('../db');
const multer = require("multer");
const jwt = require("jsonwebtoken");
const storage = multer.memoryStorage();
require("dotenv").config();
const upload = multer({ storage: storage });

const addcoach = (req, res) => {
  upload.array("images", 3)(req, res, (err) => {
    if (err) {
      return res.status(400).send(err.message);
    }

    const files = req.files;
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
   
    let userId;

    if (token) {
        const decodedToken = jwt.verify(token, process.env.jwtSecret);
      userId = decodedToken.user_id;
 
    }

    const { firstname, lastname, email, details } = req.body;

    if (!files || files.length === 0) {
      return res.status(400).send("No images provided");
    }

    const imageDatas = files.map((file) => file.buffer);

    // Insert data into the database
    const query =
      "INSERT INTO coach (first_name, last_name, email, details, images, coach_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;";
    const values = [
      firstname,
      lastname,
      email,
      details,
      imageDatas,
      userId,
    ];

    pool
      .query(query, values)
      .then((result) => {
        const insertedproduct = result.rows[0];
        console.log("Data sent");
        res.send(insertedproduct); // Send the inserted product data to the client
      })
      .catch((error) => {
        console.error("Error inserting data:", error);
        res.status(500).send("Error inserting data");
      });
  });
};

const getcoach = (req, res) => {
  const query = 'SELECT * FROM coach;';

  pool.query(query)
    .then((result) => {
      const products = result.rows.map((product) => {
        const base64ImageDatas = product.images.map((imageData) =>
          Buffer.from(imageData).toString('base64')
        );
        return { ...product, images: base64ImageDatas };
      });
      res.json(products);
    })
    .catch((error) => {
      console.error('Error retrieving data:', error);
      const errorMessage = 'Error retrieving data';
      res.status(500).json({ error: errorMessage });
    });
};

module.exports = {
  addcoach,
  getcoach
};
