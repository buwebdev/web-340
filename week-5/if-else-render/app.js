/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   28 February 2019
; Description: Demonstrates EJS 'if-else-render' operations.
;===========================================
*/

var express = require("express");
var http = require("http");
var path = require("path");

app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

var f = ["Apple", "Blueberry", "Orange", "Strawberry"];

app.get("/", function(request, response) {
  response.render("index", {
    fruits: f
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
