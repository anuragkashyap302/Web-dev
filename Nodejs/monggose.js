let express = require('express');
var mongoose = require('mongoose');
const enquirymodel = require('./enquirymodel');
require('dotenv').config();


let app = express();
app.use(express.json());

app.post('/api/enquiry-insert', (req , res)=>{
    let {name , email , phone , message} = req.body;
    // console.log(name, email, phone, message);
  let enquiry = new enquirymodel({
    name:name,
    email:email,
    phone: phone,
    message:message

  });
  enquiry.save().then(()=>{
    res.send({status:1 , message:"enqiury saved suceesfully"})
    console.log("data is saved to db");

    
  }).catch((err)=>{
    res.send({status:0 , message:" error whhile enqiury saving", error:err})
    console.log(err);
    
  })
   
})

// now one more api for view teh list
app.get("/api/enquiry-list" , async (req, res)=>{
    // agar mongodb me kaam karte to isko array me convert karte find karne ke baad but here no need 
     let enqiurylist = await enquirymodel.find();
    res.status(200).json({status:1, message:"enquiry list",data:enqiurylist})
})
// output
// {
//     "status": 1,
//     "message": "enquiry list",
//     "data": [
//       {
//         "_id": "67ea40613386e4c6bf6832fc",
//         "name": "anubaby",
//         "email": "anubaby123",
//         "phone": "4934859234",
//         "message": "hi",
//         "__v": 0
//       }
//     ]
//   }


// delete thorough monggose
app.delete("/api/enquiry-delete/:id", async (req , res)=>{
    let enqiuryid = req.params.id;
    let deleteenquiry = await enquirymodel.deleteOne({_id:enqiuryid});
    res.send({status:1 , message:"enquiry deleted succesfully", id:enqiuryid, delres:deleteenquiry})
})
// update thoruogh moonginge
app.put("/api/enquiry-update/:id", async (req , res)=>{
    let enqiuryid = req.params.id;
    let {name ,email, phone, message} = req.body;
    let updateobj  ={
        name:name,
        email:email,
        phone:phone,
        message:message
    }
    let updateres = await enquirymodel.updateOne({_id:enqiuryid}, updateobj);
    res.send({status:1 , message:"update succesfully" ,updateres})
})

// connect to mongodb
mongoose.connect(process.env.dburl).then(()=>{
    console.log("connted to mongodb via moongsse");
    app.listen(process.env.port , ()=>{
        console.log("server is running on port "+ process.env.port);
        
    })
})


// mvc patern matlab jo tum sab chhez ek hi file me kar rahe wo na kareke mangae wala code ek file me 
//  view wla code ek file me and control(update , delete)wala code ek alga file lkih ke
// usko import karke use kar sakte ho in systemtic manner as like react component