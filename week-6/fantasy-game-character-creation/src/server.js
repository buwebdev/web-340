const http = require('http');
const url = require('url');

// TODO: Implement your server here

const server = http.createServer((req, res) => {
  // TODO: Implement your routes here
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

module.exports = server;