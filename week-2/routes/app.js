/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   28 February 2019
; Description: Demonstrates Express route behaviors
;===========================================
*/

const express = require("express");
const http = require("http");

let app = express();
app.set("port", process.env.PORT || 3000);

app.get("/", function(request, response) {
  response.end("Welcome to the homepage!");
});

app.get("/about", function(request, response) {
  response.end("Welcome to the about page!");
});

app.get("/contact", function(request, response) {
  response.end("Welcome to the contact page!");
});

app.use(function(request, response) {
  response.statusCode = 404;
  response.end("404!");
});

http.createServer(app).listen(app.get("port"), function() {
  console.log(`Application started and listening on port ${app.get("port")}`);
});
