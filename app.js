const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./controller/errorController');
const successController = require('./controller/successController')
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contact=require('./routes/contact')

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contact)

app.use('/success',successController.success );

app.use(errorController.get404); 

app.listen(4000);

