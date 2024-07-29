const express=require('express');
const app=express();
const port=3500;
app.use(express.json());
app.post('/user',(req,res)=>{
    res.send(`Hello,${req.body.name}`);
})
app.listen(port,()=>{
    console.log('server running at 3000:Suchitra');
})
//Handling post request
//>node EJS08-HTTpPost.js