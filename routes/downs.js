const fs= require('fs')
const express = require("express");
const router=express.Router();
const shell = require('shelljs')
router.get("/",function(req,res,next){
const address = process.env.USERPROFILE + "\\Downloads\\"+req.originalUrl.split('-')[1]+".txt";
console.log(address);
fs.writeFileSync(address,JSON.stringify(JSON.parse(shell.exec('docker inspect '+req.originalUrl.split('-')[1]))));
res.send("");
});
module.exports=router;