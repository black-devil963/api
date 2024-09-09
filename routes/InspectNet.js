var express = require("express");
var app=express();
const shell = require('shelljs')
app.get("/",function(req,res,next){
    //res.send(shell.exec('docker inspect '+req.originalUrl.split('-')[1]));
    
    const array=shell.exec('docker inspect '+req.originalUrl.split('-')[1]+' --format="{{range .Containers}}{{.Name}}#$#{{.IPv4Address}}#$#{{.MacAddress}},{{end}}"').split(',');
    var result=[]
    for (var i = 0; i<array.length-1; i++)
        {
            
            result.push(array[i]+"#$#"+shell.exec('docker inspect --format="{{.Config.ExposedPorts}}" '+array[i].split('#$#')[0]));
        }
    res.send(result);
});
module.exports=app;
