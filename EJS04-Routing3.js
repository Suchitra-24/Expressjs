var myexpress = require("express");
var app = myexpress();
var port = 8000;
app.get("/",(req,res)=>{
    res.send("Hello World from ExpressJS:suchitra")
});
app.get("/home",(req,res)=>{
    res.send("Display from home Page: suchitra")
});
app.listen(port,()=>{
    console.log("Running on port 8000")
});