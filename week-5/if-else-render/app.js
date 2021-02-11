/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   28 February 2019
; Description: Demonstrates EJS 'if-else-render' operations.
;===========================================
*/

const express = require("express");
const http = require("http");
const path = require("path");

let app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);

const fruits = ["Apple", "Blueberry", "Orange", "Strawberry"];

app.get("/", function(req, res) {
  response.render("index", {
    fruits: fruits
  });
});

http.createServer(app).listen(app.get("port"), function() {
  console.log(`Application started and listening on port ${app.get("port")}`);
});
