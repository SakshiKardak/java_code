
// Require the HTTP module
var http = require('http');

// Require the custom module
var getCurrentDateTime = require('./slip15');

// Create a server that responds with today's date and time
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Current Date and Time: ' + getCurrentDateTime());
}).listen(3000);
console.log("Server is running on port 3000....")


