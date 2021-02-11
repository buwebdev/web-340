/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   28 February 2019
; Description: Demonstrates how to return JSON from
;              a Node.js server.
;===========================================
*/

const express = require("express");
const http = require("http");

let app = express();
app.set("port", process.env.PORT || 3000);

app.get("/customer/:id", function(req, res) {
  var id = parseInt(req.params.id, 10);

  res.json({
    firstName: "Leo",
    lastName: "Tolstoy",
    employeeId: id
  });
});

http.createServer(app).listen(app.get("port"), function() {
  console.log(`Application started and listening on port ${app.get("port")}`);
});
