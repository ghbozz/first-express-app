const path = require('path');
const express = require('express');
const router = express.Router();

const adminData = require('./admin');

router.get('/', (req, res, next) => {
  res.render('products/index', { products: adminData.products });
});

module.exports = router;
