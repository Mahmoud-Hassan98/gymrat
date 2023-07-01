const express = require('express');
const pool = require('../db');

const getProducts = (req, res) => {
  const query = 'SELECT * FROM product;';

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
  getProducts
};
