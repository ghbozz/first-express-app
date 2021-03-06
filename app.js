const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const errorsRoutes = require('./routes/errors');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);
app.use(errorsRoutes);

app.listen(3000);
