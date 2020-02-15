const path = require('path');
const express = require('express');
const router = express.Router();

const adminData = require('./admin');

router.get('/', (req, res, next) => {
  console.log(adminData.products);
  res.sendFile(path.join(__dirname, '..', 'views', 'products', 'index.html'));
});

module.exports = router;
