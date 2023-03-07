var express = require("express");
const http=require("http") 
var router=express.Router();
const shell = require('shelljs');
router.get("/",function(req,res,next){
cmmd="";
console.log(req.originalUrl)
if(req.originalUrl.split('-')[1].length!=0)cmmd=req.originalUrl.split('-')[1];else {res.send("image not mentioned");return;}
if(req.originalUrl.split('-')[2].length!=0)cmmd+=":"+req.originalUrl.split('-')[2];

id=shell.exec(`docker pull ${cmmd}`);
console.log(id.length);
if(id.length==0){res.send("Invalid image:tag pair");return;}
else res.send(shell.exec('docker image ls -a --format "{{.ID}}\t{{.Repository}}:{{.Tag}}" --filter Reference='+cmmd));


});
module.exports=router;