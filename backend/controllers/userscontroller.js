const express = require('express');
const bcrypt = require('bcrypt');
const { jwtGenerator } = require('../utils/jwtGenerator');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const pool = require("../db");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const getUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const query = `
      SELECT *
      FROM users
      WHERE user_id = $1
    `;
    
    const { rows } = await pool.query(query, [userId]);

    if (rows.length === 0) {
      return res.status(404).json('User not found');
    }

    res.json(rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const handleUpdateUser = async (req, res) => {
  try {
    const { username, email } = req.body;
    const userId = req.params.id;
    const images = req.files;

    if (!username) {
      return res.status(400).json({ error: "Username is required" });
    }

    const imageBuffers = images
      ? images.map((image) => (image ? Buffer.from(image.buffer, "base64") : null))
      : [];

    const query = `
      UPDATE users
      SET user_name = $1, user_email = $2, images = $3
      WHERE user_id = $4
      RETURNING *
    `;
    
    const updatedUser = await pool.query(query, [username, email, imageBuffers, userId]);

    res.json(updatedUser.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};



module.exports = {
  getUser,
  handleUpdateUser
};
