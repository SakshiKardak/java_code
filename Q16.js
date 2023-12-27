//Q16-JS
  //write node is script to interact with the filesystem, and serve a web page from a file  -->

var http = require('http'); 
var url = require('url'); 
var fs = require('fs'); 
http.createServer(function (req, res) {     
var pathname = url.parse(req.url, true).pathname;     
console.log("Request for file received.");    
 fs.readFile("index.html", function (err, data) {        
 if (err) {            
 console.log(err);           
  res.writeHead(404, { 'content-type': 'text/html' }); 
    
res.end('<html><body><h1>404 Not found</h1></body></html>');  
        }         
else {            
 res.writeHead(200, { 'content-type': 'text/html' });             
 res.write(data); 
 res.end(); 
        } 
    }); 
 
}).listen(8080);
 console.log('server is running on port 8080'); 

 
