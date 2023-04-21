var express = require("express");
var app=express();
const shell = require('shelljs')
app.get("/",function(req,res,next){

//shell.exec('docker start container2');
t=shell.exec('docker -v');
    if(t.length!=0)res.send(t);
    else {shell.exec("choco install /y docker-cli");
    t=shell.exec('docker -v');}
});
module.exports=app;