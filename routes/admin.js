const path = require('path');
const express = require('express');
const router = express.Router();

const products = [];

// NEW PRODUCT FORM
router.get('/products/new', (req, res, next) => {
  res.sendFile(
    path.join(__dirname, '..', 'views', 'admin', 'products', 'new.html')
  );
});

// CREATE PRODUCT
router.post('/products', (req, res, next) => {
  products.push(req.body);
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
