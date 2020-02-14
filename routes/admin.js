const express = require('express');
const router = express.Router();

router.get('/products/new', (req, res, next) => {
    res.send('<h1>Create a new user</h1><form action="/products" method="POST"><input type="text" name="name"/><button type="submit">Create!</button></form')
});

router.post('/products', (req, res, next) => {
    res.redirect('/')
})

module.exports = router;