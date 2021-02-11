/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   28 February 2019
; Description: Demonstrates the Pug view engine.
;===========================================
*/

const express = require("express");
const http = require("http");
const pug = require("pug");
const path = require("path");

let app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");
app.set("port", process.env.PORT || 3000);

app.get("/", function(req, res) {
  res.render("index", {
    message: "Welcome to my Pug based homepage!"
  });
});

http.createServer(app).listen(app.get("port"), function() {
  console.log(`Application started and listening on port ${app.get("port")}`);
});
