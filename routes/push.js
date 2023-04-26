var express = require("express");
const http=require("http") 
var app=express();
const shell = require('shelljs');
app.post("/",function(req,res,next){

cmmd1="";
cmmd2="";
if(req.body.name.length!=0){
    t=shell.exec('docker container ls -a -q --filter name='+req.body.name)
    console.log(t);
    if(t.length==0){res.send("container doesn't exists");return;}
    else cmmd1="docker commit "+req.body.name;
}

if(req.body.image.length!=0)cmmd2=" "+req.body.image;else {res.send("invalid post name");return;}
if(req.body.tag.length!=0)cmmd2+=":"+req.body.tag;else cmmd2+=":latest";

//shell.exec(`docker login -u "nikhil854" -p "Nikhil@1pu" docker.io`)
id=shell.exec(cmmd1+cmmd2);
if(id.length==0){res.send("Invalid image:tag pair");return;}
else {
    id=shell.exec("docker push"+cmmd2);
    if(id.length==0){res.send("image publishing failed");return;}
    res.send(cmmd2+" created");
}


});
module.exports=app;