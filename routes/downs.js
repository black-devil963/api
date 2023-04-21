const fs= require('fs')
const express = require("express");
const shell = require('shelljs')
const app=express();
app.get("/",function(req,res,next){
const address = process.env.USERPROFILE + "\\Downloads\\"+req.originalUrl.split('-')[1]+".txt";
console.log(address);
fs.writeFileSync(address,JSON.stringify(JSON.parse(shell.exec('docker inspect '+req.originalUrl.split('-')[1]))));
res.send("");
});
module.exports=app;