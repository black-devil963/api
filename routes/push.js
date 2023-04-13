var express = require("express");
const http=require("http") 
var router=express.Router();
const shell = require('shelljs');
router.get("/",function(req,res,next){

cmmd1="";
cmmd2="";
if(req.originalUrl.split('-')[1].length!=0){
    t=shell.exec('docker container ls -a -q --filter name='+req.originalUrl.split('-')[1])
    console.log(t);
    if(t.length==0){res.send("container doesn't exists");return;}
    else cmmd1="docker commit "+req.originalUrl.split('-')[1];
}
if(req.originalUrl.split('-')[2].length!=0)cmmd2=" "+req.originalUrl.split('-')[2];else {res.send("image not mentioned");return;}
if(req.originalUrl.split('-')[3].length!=0)cmmd2+=":"+req.originalUrl.split('-')[3];else cmmd+=":latest";
//id=shell.exec(`docker container create ${cmmd}`);
id=shell.exec(cmmd1+cmmd2);
if(id.length==0){res.send("Invalid image:tag pair");return;}
else {
    id=shell.exec("docker push "+cmmd2);
    if(id.length==0){res.send("image publishing failed");return;}
    res.send(cmmd2+" created");
}


});
module.exports=router;