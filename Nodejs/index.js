let express = require("express");
let mongoose = require("mongoose");
const enqiuryRouter = require("./App/routes/web/enquiryRouters");
require("dotenv").config();
let app = express();
app.use(express.json()); // ye tumko body se data lene ke liye chahiye hota hai
// ab bada project to tumko mvc pattern pe kaam karnga padaga so alag alag folder for every thing
// model view controller 
// model - db se related
// view - jo bhi tumko browser pe dikhana hai
// controller - jo bhi tumko request milta hai usko process karne wala
// middleware - jo bhi tumko request milta hai usko process karne wala

 // routes ko bulla
 app.use('/api/website/enquiry', enqiuryRouter); // ye tumhara enquiry router hai jo tumne banaya hai
 // http://localhost:3000/api/website/enquiry/insert ye tumhara url hai jo tumne banaya hai router ke andar

// connet to mongoDB
mongoose.connect(process.env.DBURL).then(()=>{
    console.log("DB connected successfully");
    app.listen(process.env.PORT || 3000, ()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    })
}).catch((err)=>{
    console.log("DB connection failed", err);
})


