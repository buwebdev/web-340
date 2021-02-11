/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   28 February 2019
; Description: Base server configurations for
;              a fully working Express application.
;===========================================
*/

const express = require("express");
const http = require("http");
const path = require("path");
const logger = require("morgan");
const Product = require("./product").Product;

let app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("short"));
app.set("port", process.env.PORT || 3000)

app.get("/", function(req, res) {
  res.render("index", {
    message: "home page"
  });
});

app.get("/about", function(req, res) {
  res.render("about", {
    message: "about page"
  });
});

app.get("/contact", function(req, res) {
  res.render("contact", {
    message: "contact page"
  });
});

app.get("/products", function(req, res) {

  const products = [
    new Product("1007", "Apple"),
    new Product("1008", "Orange"),
    new Product("1009", "Pear"),
    new Product("1010", "Grapes")
  ];

  console.log(products);
  
  res.render("products", {
    message: "products page",
    products: products
  });
});

http.createServer(app).listen(app.get("port"), function() {
  console.log(`Application started and listening on port ${app.get("port")}`);
});
