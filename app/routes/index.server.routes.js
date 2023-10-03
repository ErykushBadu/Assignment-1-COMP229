/*
COMP229 Assignment 1 - index.server.routes.js
Sultan Sadaqat (301161755)
Prof. Deepti Sharma
October 2nd, 2023 
*/

var express = require('express');
var router = express.Router();

//Home Page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

//About Me Page
router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { title: 'About Me' });
});

//Projects Page
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

//Services Page
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

//Contact Page
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;