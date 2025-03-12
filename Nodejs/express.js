let express = require("express");

let app = express();

app.get("/", (req , res)=>{
    res.send({status:1 , msg:"Home Page API"})
})
app.get('/news' , (req , res)=>{
    res.send({status:1 , msg:"News API me appka sawaget hai"})
})
app.get('/product' , (req ,res)=>{
    res.send({status:"AA GYA", msg:"dekh lo yhai hai product"})
})
// nwo you can crate api using post method also its dicrtly not running on the broweres
// it is used when data is coming from fronterd and save in backend
app.post("/login" , (req ,res)=>{
    console.log(req.body);//object
    
    res.send({status:"login ho gya" ,msg:"login page me aapka swagat hai",data:req.body})
})
app.listen("8000");