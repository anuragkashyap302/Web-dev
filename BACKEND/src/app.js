 import express from "express";
 import cookieParser from "cookie-parser";  
 import cors from "cors";
 const app = express();

 app.use(cors({
    origin: process.env.CORS_ORIGIN ,
    credentials: true
 }))
 app.use(express.json());
 app.use(express.urlencoded({extended : true}))
 app.use(express.static("public"))

 app.use(cookieParser())
 // import all the routes
 import userRouter from './routes/user.routes.js'
 app.use("/api/v1/users" , userRouter)
 // https://localhost:8000/api/v1/users/register

 export  {app};
// This code imports the Express framework and creates an instance of an Express application, which can be used to define routes and middleware for a web server.