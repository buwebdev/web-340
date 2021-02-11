/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   28 February 2019
; Description: Creates a new server and configures
;              the express routes
;===========================================
*/

// require statements
const http = require("http");
const path = require("path");
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

let app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);

let entries = [];
app.locals.entries = entries;

app.use(logger("dev"));

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res) {
  res.render("index");
});

app.get("/new-entry", function(req, res) {
  res.render("new-entry");
});

app.post("/new-entry", function(req, res) {
  if (!req.body.title || !req.body.body) {
    res.status(400).send("Entries must have a title and body.");
    return;
  }
  entries.push({
    title: req.body.title,
    content: req.body.body,
    published: new Date()
  });

  res.redirect("/");
});

app.use(function(req, res) {
  res.status(404).render("404");
});

http.createServer(app).listen(app.get("port"), function() {
  console.log(`Guestbook app started on port ${app.get("port")}`);
});
