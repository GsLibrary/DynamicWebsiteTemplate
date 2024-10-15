/* NPMs */
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const requestIP = require('request-ip');
const session = require('express-session');
const https = require('https');
const fs = require('fs');
const moment = require('moment-timezone');
const randomstring = require("randomstring");
const fetch = require('node-fetch');
const { createCanvas } = require('canvas');

dotenv = require('dotenv').config()

/* Other Variables */
let timezone = process.env.TIMEZONE || "America/Chicago";
let rawCurrentDateTime = new Date();
let currentDateTime = moment(rawCurrentDateTime).tz(timezone).format('MMMM Do YYYY, h:mm:ss a');
const port = process.env.PORT || 3000;

/* Paths */
app.use(express.static(path.join(__dirname, 'public')));

/* Set */
// Set the view engine to ejs
app.set('view engine', 'ejs');
// Define the folder where the ejs files will be stored
app.set('views', path.join(__dirname, '/views'));

/* Use */
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret: process.env.SECRET_SESSION,
  resave: false,
  saveUninitialized: true
}));

/* Get */
// Redirects Users From "/" to "/home"
app.get('/', function(req, res) {
    res.redirect("/home");
});

app.get('/home', function(req, res){
    res.render('home');
});

app.get('*', function(req, res) {
    res.redirect("/home");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });