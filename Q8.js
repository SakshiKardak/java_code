//Create a Node.js file that demonstrate create database and table in MySQL

var mysql = require('mysql'); 

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:""
});
con.connect(function(err){
    if(err){
        console.log(err);
    }
    console.log("Connection Establisdhed");
})
con.query("Create Database Student",function(err){
    if(err){
        console.log("database not created...");
    }
    console.log("database created successfully.....")
})