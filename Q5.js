//to sppend the contents of a file into another
var fs = require('fs');

function ReadAppend(file,appendFile) {
fs.readFile(appendFile,function (err,data) {
 if(err) throw err;
console.log('File was read');

 fs.appendFile(file,data,function (err) {
if(err) throw err;
 console.log("The Data appended to file");


 });
 });

}
ReadAppend('file1.txt','file2.txt');