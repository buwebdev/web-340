/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   28 February 2019
; Description: Demonstrates advanced routing
;===========================================
*/

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/:productId", function(request, response) {
  var productId = parseInt(request.params.productId, 10);

  response.render("index", {
    productId: productId
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080");
});
