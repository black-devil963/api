var express = require("express");
const http=require("http") 
var app=express();
const shell = require('shelljs');
app.get("/",function(req,res,next){
cmmd="";
console.log(req.originalUrl)
if(req.originalUrl.split('-')[1].length!=0)cmmd=req.originalUrl.split('-')[1];else {res.send("image not mentioned");return;}
if(req.originalUrl.split('-')[2].length!=0)cmmd+=":"+req.originalUrl.split('-')[2];

id=shell.exec('docker image ls -a --format "{{.ID}}\t{{.Repository}}:{{.Tag}}\n" --filter Reference='+cmmd).length;
console.log(id);
if(id==0){res.send("Invalid image:tag pair");return;}
else res.send(shell.exec('docker image ls -a --format "{{.ID}}\t{{.Repository}}:{{.Tag}}" --filter Reference='+cmmd));


});
module.exports=app;