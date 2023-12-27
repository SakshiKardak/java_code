// Import the built-in 'http' module
const http = require('http');

// Define the hostname and port for the server
// const hostname = '127.0.0.1';
// const port = 3000;

// Create a server using the http module
const server = http.createServer((req, res) => {
  // Set the response header with a status code of 200 (OK) and content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response "Hello, this is a simple web server!"
  res.end('Hello, this is a simple web server!\n');
}).listen(3000);

// Start the server, listening on the specified hostname and port
// server.listen(port => {
//   console.log(`Server running at http://:${port}/`);
// });
