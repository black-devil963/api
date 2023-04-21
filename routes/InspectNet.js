var express = require("express");
var app=express();
const shell = require('shelljs')
app.get("/",function(req,res,next){
    res.send(shell.exec('docker inspect '+req.originalUrl.split('-')[1]));
});
module.exports=app;