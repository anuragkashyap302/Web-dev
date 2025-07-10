import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import {app} from "../app.js";


const connedtDB = async () => {
  try {
   const connectInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      
    console.log(`Connected to the database: ${connectInstance.connection.name}`);
  } catch (error) {
    console.error(`Error connecting to the database: ${error.message}`);
    process.exit(1); // Exit the process with failure
  }
}
export default connedtDB;
// This code defines a function to connect to a MongoDB database using Mongoose.