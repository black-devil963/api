var express = require("express");
var app=express();
const shell = require('shelljs')
app.get("/",function(req,res,next){
    res.send(shell.exec('docker network ls --format "{{.Name}}"').split('\n'));
});
module.exports=app;