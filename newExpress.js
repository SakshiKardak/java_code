var express = require('express');
var app = express();

app.get('/id:',function(req,res){
    res.send('Welcome in express')
})

app.listen(3000);