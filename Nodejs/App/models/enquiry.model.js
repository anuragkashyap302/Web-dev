let mongoose = require('mongoose');
// mongose se db banane ke liye phle tumko schema taiyear karna hoga ki kaisa db bane wala hai
let enqiureschema = mongoose.Schema({
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
});
// now schema is ready now made one model
let enquiryModel = mongoose.model("enquiry" ,enqiureschema);
// here enquiry is collction name  s will addde by mogobd by defalt so name of cllection will enquires
module.exports = enquiryModel;