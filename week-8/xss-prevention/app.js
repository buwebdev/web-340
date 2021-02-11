/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   28 February 2019
; Description: Demonstrates how to configure an application for
;              XSS threats.
;===========================================
*/

// require statements
const express = require("express");
const http = require("http");
const logger = require("morgan");
const helmet = require("helmet");
const path = require("path");

// initialize express
let app = express();

// use statements
app.use(logger("short"));
app.use(helmet.xssFilter());

// set statements
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);

// http calls
app.get("/", function(req, res) {
  res.render("index", {
    message: "XSS Prevention Example"
  });
});

// create/start Node server
http.createServer(app).listen(app.get("port"), function() {
  console.log(`Application started and listening on port ${app.get("port")}`);
});
