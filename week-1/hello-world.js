/*
============================================
; Title:  hello-world.js
; Author: Professor Krasso
; Date:   28 February 2019
; Description: Demonstrates how to create a Node.js server
;===========================================
*/

const http = require('http');

function processRequest(req, res) {
  const body = 'Hello World';

  const contentLength = body.length;

  res.writeHead(200, {
    'Content-Length': contentLength,
    'Content-Type': 'text/plain'
  });

  res.end(body);
}

const s = http.createServer(processRequest);

s.listen(3000);
