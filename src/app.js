const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myconnection = require('express-myconnection');


const app = express();

//importing routes
const serviceRoutes = require('./routes/service.js');

// Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(morgan('dev'));
app.use(myconnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'CRUD_ECF'
},'single'));
app.use(express.urlencoded({extended: false}));


// Routes
app.use('/', serviceRoutes);

// Static files
app.use(express.static(path.join(__dirname,'public')));

// Starting the server
app.listen(app.set('port'), () => {
    console.log('Server on port 3000');
});