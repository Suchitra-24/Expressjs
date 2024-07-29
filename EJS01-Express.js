var express=require("express");
var app=express();
var port=8000;
app.get("/",(req,res)=>{//'/' root
    res.send("Hello world from ExpressJS")
});
app.listen(port,()=>{
    console.log("Running on port 8000")
});