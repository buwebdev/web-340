/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   28 February 2019
; Description: Demonstrates how to configure an application for
;              CSRF protection
;===========================================
*/

// require statements
const express = require("express");
const http = require("http");
const path = require("path");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const csrf = require("csurf");

// setup csrf protection
const csrfProtection = csrf({ cookie: true });

// initialize the express application
let app = express();

// use statements
app.use(logger("short"));
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cookieParser());
app.use(csrfProtection);
app.use(function(req, res, next) {
  const token = req.csrfToken();
  res.cookie("XSRF-TOKEN", token);
  res.locals.csrfToken = token;
  next();
});

// set statements
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);

// routing
app.get("/", function(req, res) {
  res.render("index", {
    message: "New Fruit Entry Page"
  });
});

app.post("/process", function(req, res) {
  console.log(req.body.txtName);
  res.redirect("/");
});

// create and start the Node server
http.createServer(app).listen(app.get("port"), function() {
  console.log(`Application started and listening on port ${app.get("port")}`);
});
