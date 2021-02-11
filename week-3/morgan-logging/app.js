/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   28 February 2019
; Description: Demonstrates how to configure the
;              Morgan logger
;===========================================
*/

const express = require("express");
const http = require("http");
const path = require("path");
const logger = require("morgan");

let app = express();

app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory
app.set("view engine", "ejs"); // Tell Express to use the EJS view engine

app.use(logger("short"));
app.set("port", process.env.PORT || 3000);

app.get("/", function(request, response) {
  response.render("index", {
    message: "Welcome to the Morgan Logger Example!"
  });
});

http.createServer(app).listen(app.get("port"), function() {
  console.log(`Application started and listening on port ${app.get("port")}`);
});
