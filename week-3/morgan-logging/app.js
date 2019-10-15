/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   28 February 2019
; Description: Demonstrates how to configure the
;              Morgan logger
;===========================================
*/

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory
app.set("view engine", "ejs"); // Tell Express to use the EJS view engine

app.use(logger("short"));

app.get("/", function(request, response) {
  response.render("index", {
    message: "Welcome to the Morgan Logger Example!"
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080");
});
