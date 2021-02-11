/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   28 February 2019
; Description: Creates a new server and  listens
;              on port 8080.
;===========================================
*/

const express = require("express");
const http = require("http");

let app = express();
app.set("port", process.env.PORT || 3000);


app.use(function(request, response) {
  console.log("In comes a request to: " + request.url);
  response.end("Hello World");
});

http.createServer(app).listen(app.get("port"), function() {
  console.log(`Application started and listening on port ${app.get("port")}`);
});
