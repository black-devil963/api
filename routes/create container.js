var express = require("express");
const http=require("http") 
var router=express.Router();
const shell = require('shelljs');
router.get("/",function(req,res,next){

cmmd="";
if(req.originalUrl.split('-')[1].length!=0){
    t=shell.exec('docker container ls -a -q --filter name='+req.originalUrl.split('-')[1])
    console.log(t);
    if(t.length!=0){res.send("Name exists with a container");return;}
    else cmmd="--name "+req.originalUrl.split('-')[1];
}
if(req.originalUrl.split('-')[2].length!=0)cmmd+=" "+req.originalUrl.split('-')[2];else {res.send("image not mentioned");return;}
if(req.originalUrl.split('-')[3].length!=0)cmmd+=":"+req.originalUrl.split('-')[3];else cmmd+=":latest";
//id=shell.exec(`docker container create ${cmmd}`);
id=shell.exec(`docker container create -it ${cmmd}`);

console.log(id.length);
if(id.length==0){res.send("Invalid image:tag pair");return;}
else res.send(shell.exec('docker container ls -a --format "{{.ID}}\t{{.Names}}" --filter ID='+id));


});
module.exports=router;