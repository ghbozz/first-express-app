const path = require('path');
const express = require('express');
const router = express.Router();

const products = [];

// NEW PRODUCT FORM
router.get('/products/new', (req, res, next) => {
  res.render('admin/products/new');
});

// CREATE PRODUCT
router.post('/products', (req, res, next) => {
  products.push({ name: req.body.name, createdAt: new Date() });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
