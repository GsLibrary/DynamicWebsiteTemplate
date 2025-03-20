/* Module Imports */
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const fetch = require('node-fetch');
const fs = require('fs');
const https = require('https');
const ini = require('ini');
const moment = require('moment-timezone');
const njs = require('newfiesjs');
const path = require('path');
const randomstring = require("randomstring");
const rateLimit = require('express-rate-limit');
const requestIP = require('request-ip');
const session = require('express-session');
const { createCanvas } = require('canvas');
const dotenv = require('dotenv').config();

/* Possible Additions; Not Added Yet */
// const cors = require('cors');
// const morgan = require('morgan');
// const compression = require('compression');

const app = express();


/* Variables */
let timezone = process.env.TIMEZONE || "America/Chicago";
let rawCurrentDateTime = new Date();
let currentDateTime = moment(rawCurrentDateTime).tz(timezone).format('MMMM Do YYYY, h:mm:ss a');
const port = process.env.PORT || 3000;
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per window
    message: 'Too many requests, please try again later.',
});

/* Set */
// Set the view engine to ejs
app.set('view engine', 'ejs');

// Define the folder where the ejs files will be stored
app.set('views', path.join(__dirname, '/views'));

/* Use */
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
app.use(cookieParser());
app.use(limiter);
app.use(requestIP.mw());
app.use(session({
  secret: process.env.SECRET_SESSION,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

// Logs Requests By IP and Where - Im probably removing this, i just was curious about the middleware
app.use((req, res, next) => {
    const clientIp = req.clientIp;
    njs.njsLog(`Incoming request from IP: ${clientIp} - ${req.method} ${req.url}`);
    next();
});

/* Get */
app.get('/', function(req, res) {
    res.redirect("/home");
});

app.get('/home', function(req, res){
    res.render('home');
});

app.get('*', function(req, res) {
    res.redirect("/home");
});

/* Listen */
app.listen(port, () => {
    njs.njsLog(`Server is running on port ${port}`);
});