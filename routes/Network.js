var express = require("express");
var router=express.Router();
const shell = require('shelljs')
router.get("/",function(req,res,next){
    res.send(shell.exec('docker network ls --format "{{.Name}}"').split('\n'));
});
module.exports=router;