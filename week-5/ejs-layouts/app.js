/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   28 February 2019
; Description: Demonstrates EJS layouts.
;===========================================
*/

const express = require("express");
const http = require("http");
const path = require("path");
const logger = require("morgan");

let app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));
app.set("port", process.env.PORT || 3000);

app.get("/", function(req, res) {
  res.render("index", {
    title: "Home page"
  });
});

http.createServer(app).listen(app.get("port"), function() {
  console.log(`Application started and listening on port ${app.get("port")}`);
});
