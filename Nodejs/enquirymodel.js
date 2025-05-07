
let mongoose = require('mongoose');
// mongose se db banane ke liye phle tumko schema taiyear karna hoga ki kaisa db bane wala hai
let userenqiureschema = mongoose.Schema({
    name:{
       type :String,
       required:true
    },
    email:{
        type :String,
       required:true,
       unique:true,
    },
    phone:{
        type :String,
       required:true

    },
    message:{
        type :String,
        required:true
    },
})

// now schema is ready now made one model 
let enquirymodel = mongoose.model("enquiry" ,userenqiureschema);
 // here enquiry is collction name  s will addde by mogobd by defalt so name of cllection will enquires
module.exports = enquirymodel;

// agar same email se dalogo to ereor
// {
//     "status": 0,
//     "message": " error whhile enqiury saving",
//     "error": {
//       "errorLabelSet": {},
//       "errorResponse": {
//         "index": 0,
//         "code": 11000,
//         "errmsg": "E11000 duplicate key error collection: userenquiry.enquiries index: email_1 dup key: { email: \"anubaby123\" }",
//         "keyPattern": {
//           "email": 1
//         },
//         "keyValue": {
//           "email": "anubaby123"
//         }
//       },
//       "index": 0,
//       "code": 11000,
//       "keyPattern": {
//         "email": 1
//       },
//       "keyValue": {
//         "email": "anubaby123"
//       }
//     }
//   }
