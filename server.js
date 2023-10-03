/*
COMP229 Assignment 1 - server.js
Sultan Sadaqat (301161755)
Prof. Deepti Sharma
October 2nd, 2023 
*/

var express = require('express'); 
var indexRouter = require("./app/routes/index.server.routes.js");
var app = express(); 

app.set("views", "./app/views");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./public"));
app.use(express.static("./node_modules"));
app.use('/', indexRouter);
 
app.listen(3000); 
console.log("Server running at http://localhost:3000/"); 

module.exports = app; 

