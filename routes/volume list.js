var express = require("express");
var router=express.Router();
const shell = require('shelljs')
router.get("/",function(req,res,next){

//shell.exec('docker start container2');
res.send(shell.exec('docker volume ls'));//-a not valid
});
module.exports=router;