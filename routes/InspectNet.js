var express = require("express");
var router=express.Router();
const shell = require('shelljs')
router.get("/",function(req,res,next){
    
    res.send(shell.exec('docker inspect '+req.originalUrl.split('-')[1]));
});
module.exports=router;