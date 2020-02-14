const http = require('http');
const express = require('express');
const bodyParser = require('body-parser')
const app = express();

const errorsRoutes = require('./routes/errors')
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(errorsRoutes);

app.listen(3000);