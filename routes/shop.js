const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'products', 'index.html'))
});

module.exports = router;