const path = require('path');
const express = require('express');
const router = express.Router();

// NEW PRODUCT FORM
router.get('/products/new', (req, res, next) => {
  res.sendFile(
    path.join(__dirname, '..', 'views', 'admin', 'products', 'new.html')
  );
});

// CREATE PRODUCT
router.post('/products', (req, res, next) => {
  res.redirect('/');
});

module.exports = router;
