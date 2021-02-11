/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   28 February 2019
; Description: Demonstrates how to programmatically set
;              Node.js status codes.
;===========================================
*/

const express = require("express");
const http = require("http");

let app = express();
app.set("port", process.env.PORT || 3000);

app.get("/not-found", function(req, res) {
  res.status(404).json({
    error: "Resource not found."
  })
});

app.get("/ok", function(req, res) {
  res.status(200).json({
    message: "Page loaded correctly."
  })
});

app.get("/not-implemented", function(req, res) {
  res.status(501).json({
    error: "Page not implemented."
  })
});

http.createServer(app).listen(app.get("port"), function() {
  console.log(`Application started and listening on port ${app.get("port")}`);
});
