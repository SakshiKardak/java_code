// <!-- <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <script>
//         var x = "hello world!"
//         document.write(x)
//         var y = x.toUpperCase()
//         document.write(y)
//     </script>
// </body>
// </html> -->
//Create a Node.js file that will convert the output "Hello World!" into upper-case letters.
var http=require('http');
var uc = require('upper-case');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    res.write(uc.upperCase("Hello World!"));
    res.end();
}).listen(8080);
//hello