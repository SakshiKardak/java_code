// var http = require('http')
// var uc = require('upper-case')
// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-type':'text/html'})
//     res.write(uc.upperCase("hello world!"))
//     res.end();
// }).listen(8088);

// var fs = require('fs');

// function ReadAppend(file, appendFile){
//     fs.readFile(file, function (err, data){
//         if(err) throw err;
//         console.log("The file was read...!");
    
//     fs.appendFile(file, data, function(err){
//         if(err) throw err;
//         console.log("The data was appended...!");

//     });
//     });

// }
// ReadAppend('file2.txt','file1.txt');


var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(fucntion (req, res) {
    var q = url.parse(req.url, true);
    var filename = "file1.txt" + q.pathname;
    fs.readFile(filename, function(err, data) {
        if(err) {
            res.writeHead(404,{'Content-Type': 'text/html'});
            res.write("404 Not Found");
        }
        res.writeHead(404,{'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(3030);