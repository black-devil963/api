var express = require("express");
var app=express();
const shell = require('shelljs')
app.get("/",function(req,res,next){

//shell.exec('docker start container2');
res.send(shell.exec('docker container ls -a ')  )
// res.send(shell.exec('docker container ls -a --format "<tr><td>{{.ID}}</td><td>{{.Names}}</td><td>{{.Image}}</td><td>{{.Command}}</td><td>{{.CreatedAt}}</td><td>{{.Status}}</td><td>{{.Ports}}</td></tr>#@$@#'));
});
module.exports=app;