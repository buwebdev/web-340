/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   28 February 2019
; Description: Demonstrates CRUD operations in a
;              Node.js API.
;===========================================
*/

const express = require("express");
const http = require("http");

let app = express();
app.set("port", process.env.PORT || 3000);

app.get("/", function(req, res) {
  res.send("API invoked as an HTTP GET request.");
});

app.put("/", function(req, res) {
  res.send("API invoked as an HTTP PUT request.");
});

app.post("/", function(req, res) {
  res.send("API invoked as an HTTP POST request");
});

app.delete("/", function(req, res) {
  res.send("API invoked as an HTTP DELETE request");
});

http.createServer(app).listen(app.get("port"), function() {
  console.log(`Application started and listening on port ${app.get("port")}`);
});
