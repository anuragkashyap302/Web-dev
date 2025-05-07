let express = require("express");
require("dotenv").config();
const { checkToken } = require("./middleware");

let app = express();
app.use(express.json()); // ye likeha jarauri hai ki hmara app express ke json ko istemall karega
// env file me varible banake yaha se acess kar sakte hia
console.log(process.env.mytoken);
console.log(process.env.mypass);

// middle ware in express 
//  let mytoken = "12345"
//  let mypass = "0987"
// let checkToken = (req , res , next)=>{
//     console.log("welcome to middleware");
//     if(req.query.token == "" || req.query.token == undefined){
//         return res.send(
//             {
//                 status: 0,
//                 msg:"token to daal le bhai phir aana"
//             }
//         )
//     }
//      if(req.query.token!= mytoken){
//         return res.send({
//             status: 0,
//             msg: "sahi token to daal bhai"
//         })
//      }
//     next(); // next ab aage ke kaam ko karne ka izzat deta hai
    
// }

// you can set multiple middlewaare for multiple authenticion below its for password ek middlewre verify hone ke badd wo dusre middleware ke pass bhej dega
app.use((req , res, next)=>{
    if(req.query.pass == "" || req.query.pass == undefined){
        return res.send(
            {
                status: 0,
                msg:"pass to daal le bhai phir aana"
            }
        )
    }
     if(req.query.pass!= mypass){
        return res.send({
            status: 0,
            msg: "sahi pass to daal bhai"
        })
     }
    next(); // next ab aage ke kaam ko karne ka izzat deta hai
})
app.use(checkToken) // app me aage jane se phlee ye middleware chektoken cheak hoga
app.get("/", (req , res)=>{
    res.send({status:1 , msg:"Home Page API"})
})

// news wale api me agar middleware dena hai to usko beeech me dedo 
app.get('/news',checkToken , (req , res)=>{
    res.send({status:1 , msg:"News API me appka sawaget hai"})
})
// tum kisi chez ka direct api bhi news ke andar section ke liye bhi bna sakte hao user direct wahi pacuch jaye agar search kare to
app.get("/news/:id", (req , res)=>{
    let currid = req.params.id
    res.send("news ke andar ke chhez ko direct dekhao"+ currid)
}) // called dynamic param
app.get('/product' , (req ,res)=>{
    res.send({status:"AA GYA", msg:"dekh lo yhai hai product"})
})
// nwo you can crate api using post method also its dicrtly not running on the broweres
// it is used when data is coming from fronterd and save in backend
app.post("/login" , (req ,res)=>{
    console.log(req.body);//object
    
    res.send({status:"login ho gya" ,msg:"login page me aapka swagat hai",data:req.body})
    // ek to uper wale tarkie se respone bhej sakte hao fronted me ek aur tarkia hia
    res.status(200).json({
        status:1,
        msg:"aayie"
    })
})

app.listen("8000");

