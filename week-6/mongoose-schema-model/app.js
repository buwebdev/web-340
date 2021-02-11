/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   28 February 2019
; Description: Demonstrates how to create and configure
;              a Mongoose data model.
;===========================================
*/

const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const logger = require("morgan");
const Fruit = require("./models/fruit");

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
let app = express();
app.use(logger("short"));
app.set("port", process.env.PORT || 3000);

// model
let fruit = new Fruit({
  name: "Apple"
});

console.log(`Mongoose Model Name: ${fruit.name}`);

// create server
http.createServer(app).listen(app.get("port"), function() {
  console.log(`Application started and listening on port ${app.get("port")}`);
});
