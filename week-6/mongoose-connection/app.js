/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   28 February 2019
; Description: Demonstrates how to setup a MongoDB
;              connection.
;===========================================
*/

const express = require("express");
const http = require("http");
const logger = require("morgan");
const mongoose = require("mongoose");

// MongoDB Atlas connection string
const conn = "mongodb+srv://admin:admin@cluster0.lujih.mongodb.net/web330?retryWrites=true&w=majority";

mongoose.connect(conn, {
  promiseLibrary: require("bluebird"),
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
}).then(() => 
{
  console.log("Connection to MongoDB Atlas was successful!");
}).catch(err => 
{
  console.log(`MongoDB Connection Error: ${err.message}`);
});

// application
var app = express();
app.use(logger("short"));
app.set("port", process.env.PORT || 3000);

// create server
http.createServer(app).listen(app.get("port"), function() {
  console.log(`Application started and listening on port ${app.get("port")}`);
});
