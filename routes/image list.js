var express = require("express");
var app=express();
const shell = require('shelljs')
app.get("/",function(req,res,next){

//shell.exec('docker start container2');
res.send(shell.exec('docker image ls -a'));
});
module.exports=app;