// require("dotenv").config({path: "./env"});
import dotenv from "dotenv";
import connedtDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({ path: "./.env" });
connedtDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
})
.catch((error) =>{
  console.log("Error connecting to the database:", error.message);
  
})
// This code imports Mongoose and a constant for the database name, then calls a function to connect to the database.





// import express from "express";
// const app = express();
// (async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on('error', (error) => {
//             console.log(`Error occurred: ${error.message}`);
//             throw error;
//         });
            
//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         });
        
//     } catch (error) {
//        console.log(`Error connecting to the database: ${error.message}`);
//        throw error;
        
//     }

// })();
// This code connects to a MongoDB database using Mongoose and starts an Express server.