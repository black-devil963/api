var express = require("express");
const http=require("http") 
var app=express();
const shell = require('shelljs');
app.post("/",function(req,res,next){
cmmd="";
console.log(req.body);
if(req.body.name.length!=0){
    t=shell.exec('docker container ls -a -q --filter name='+req.body.name)
    console.log(t);
    if(t.length!=0){res.send("Name exists with a container");return;}
    else cmmd="--name "+req.body.name;
}
if(req.body.image.length!=0)cmmd+=" "+req.body.image;else {res.send("image not mentioned");return;}
if(req.body.tag.length!=0)cmmd+=":"+req.body.tag;else cmmd+=":latest";
//id=shell.exec(`docker container create ${cmmd}`);
id=shell.exec(`docker container create -it ${cmmd}`);
console.log(id.length);
if(id.length==0){res.send("Invalid image:tag pair");return;}
else res.send(shell.exec('docker container ls -a --format "{{.ID}}\t{{.Names}}" --filter ID='+id));
});
module.exports=app;