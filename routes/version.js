var express = require("express");
var router=express.Router();
const shell = require('shelljs')
router.get("/",function(req,res,next){

//shell.exec('docker start container2');
t=shell.exec('docker -v');
    if(t.length!=0)res.send(t);
    else {shell.exec("choco install /y docker-cli");
    t=shell.exec('docker -v');}
});
module.exports=router;