/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   28 February 2019
; Description: Demonstrates how to return non-html content.
;===========================================
*/

var express = require("express");
var http = require("http");
var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", function(request, response) {
  response.type("text");
  response.render("index", {
    message: "Text based message"
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
