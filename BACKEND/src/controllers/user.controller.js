 import { asyncHandler } from "../utils/asyncHandler.js";
 import {ApiError} from "../utils/ApiError.js";
 import{User} from "../models/User.model.js";
 import {uploadOnCloudinary} from "../utils/cloudinary.js"
 import { ApiResponse } from "../utils/ApiResponse.js"; 
 import jwt from "jsonwebtoken"
import mongoose from "mongoose";
// This code imports necessary modules and functions for handling user registration in an Express application.
 const generateAccessAndRefershTokens = async(userId)=>{
   try {
      const user =  await User.findById(userId)
      const accessToken = user.generateAccessToken()
      const refreshToken = user.generateRefreshToken()

      user.refreshToken = refreshToken
     await  user.save({validateBeforeSave : false})

     return {accessToken , refreshToken}

   } catch (error) {
     throw new ApiError(500 , "Something went wrong whiel genrating refresh and acess token")
   }
 }
 const registerUser = asyncHandler(async (req , res )=>{
   const {username , email ,fullName , password} = req.body;
   // Here you would typically save the user to the database
   if([fullName , email , username , password].some(field => field?.trim() === "")) {   
     // Simulate user registration logic  
      throw new ApiError(400, "All filed is required");
   }
  const existedUser = await User.findOne({ 
     $or:[{username},{email}]
   })
    if(existedUser){
      throw new ApiError(409, "User with email or Username  already exists");
    }
     const avatarLocalPath = req.files?.avatar?.[0]?.path;
const coverImageLocalPath = req.files?.coverImage?.[0]?.path;

// Upload only if the files are provided
let avatar = null;
let coverImage = null;

if (avatarLocalPath) {
  avatar = await uploadOnCloudinary(avatarLocalPath);
}
if (coverImageLocalPath) {
  coverImage = await uploadOnCloudinary(coverImageLocalPath);
}
// If the upload fails, handle it gracefully



  const user = await User.create({
  fullName,
  avatar: avatar?.url || "",             // use empty string if avatar not uploaded
  coverImage: coverImage?.url || "",     // same here
  email,
  password,
  username: username.toLowerCase()
});

 const createdUser = await User.findById(user._id).select("-password -refreshToken");


 if(!createdUser){
   throw new ApiError(500 , "Something went wrong while resistering the user")
 }

  return res.status(201).json(
    new ApiResponse(200 , createdUser , "User Resterid succesfully")
  )
   
 })

 const loginUser = asyncHandler(async (req , res)=>{
    // data lelo body se email ya username and passwaord and cheak rester hai ya nahi hai to login kar do and cookies send kar do
    const {email , username , password} = req.body
    if(!username && !email){
      throw new ApiError(400 , "Username Or email is required for login")
    }
    // ab koi ek bhi mile to mongo se cheak kar ke login kara do
    const user = await User.findOne({
      $or:[{username} ,{email}] // or mongo ka ek opereator hai jo ki dono me koi ek mila to return kar dega
    })
    if(!user){
      throw new ApiError(404, "user does not exist");
    }

      const isPasswordValid = await user.isPasswordCorrect(password)
      if(!isPasswordValid){
      throw new ApiError(401, "Invalid User credentials");
    }
    
   const {accessToken , refreshToken} =  await  generateAccessAndRefershTokens(user._id)

   const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

   const options = {
      httpOnly: true ,
      secure: true
   }

    return res
    .status(200)
    .cookie("accesToken" , accessToken , options)
    .cookie("refreshToken" , refreshToken, options)
    .json(
      new ApiResponse(
         200 , {
          user: loggedInUser , accessToken,refreshToken 
         },
          "User LOggend IN succesFully"
        )
        )
    

 })

 const logoutUser = asyncHandler(async( req, res) =>{
    await User.findByIdAndUpdate(
      req.user._id,{
        $unset:{
          refreshToken: 1 // this remove the field from document
        }
      },
      {
        new: true
      }
     )
     const options = {
      httpOnly: true ,
      secure: true
   }
   return res
   .status(200)
   .clearCookie("accessToken", options)
   .clearCookie("refreshToken", options)
   .json(new ApiResponse(200 ,{}, "user looged out sucessfully"))
 })

 const refreshAccessToken = asyncHandler(async(req , res)=>{
   const incomingRefreshToken =  req.cookies.refreshToken || req.body.refreshToken

   if(!incomingRefreshToken){
     throw new ApiError(401 ,"unauthrized requewst")
   }
   try {
    const decodedToken =  jwt.verify(
         incomingRefreshToken,
         process.env.REFRESH_TOKEN_SECRET
      )
     const user = await   User.findById(decodedToken?._id)
     if(!user){
        throw new ApiError(401, "Invalid Refresh Token")
     }
 
     if(incomingRefreshToken !== user?.refreshToken){
        throw new ApiError(401 , " refrsh token is exipred or used")
     }
 
     const options = {
         httpOnly: true,
         secure: true
     }
    const {accessToken, newrefreshToken} =  await generateAccessAndRefershTokens(user._id)
 
     return res
     .status(200)
     .cookie("accessToken", accessToken, options)
     .cookie("refreshToken", newrefreshToken , options)
     .json(
       new ApiResponse(200 , {accessToken, refreshToken: newrefreshToken}, "Acess token Refreshed")
     )
   } catch (error) {
       throw new ApiError(401 , error?.message || "INvalid refresh Token")
    
   }

 })

 const changeCurrentPassword = asyncHandler(async(req , res)=>{
   const {oldPassword , newPassword} = req.body
   const user = await User.findById(req.user?._id)
   const isPasswordCorrect = await user.isPasswordCorrect(oldPassword)

    if(!isPasswordCorrect){
      throw new ApiError(400 , "Invalid Old pasword")
    }
      user.password = newPassword
      await user.save({validateBeforeSave: false})
       return res
       .status(200)
       .json(new ApiResponse(200, {} , "Password chagne succesfully"))
 })
  const getCurrentUser = asyncHandler(async(req , res)=>{
       return res
       .status(200)
       .json(200 , req.user , "Current User fetched Successfully")
  })

   const updateAccountDetails = asyncHandler(async(req ,res)=>{
     const {fullName  , email} = req.body
      if(!fullName || !email){
         throw new ApiError(400 , "All flieds are requried")
      }
        const user = User.findByIdAndUpdate(
           req.user?._id,
           {
              $set:{
                 fullName,
                 email:email
              }
           },
           {new : true}
        ).select("-password")
        return res
        .status(200)
        .json(new ApiResponse(200 , user , "Account details updated Suceesfully"))
   })

    // const updateUserAvatar = asyncHandler(async(req , res)=>{
    //     const avatarLocalPath = req.file?.path
    //     if(!avatarLocalPath){
    //        throw new ApiError(400 , "Avater file is Missing")
    //     }
    //     const avatar = await uploadOnCloudinary(avatarLocalPath)
    //     if(!avatar.url){
    //        throw new ApiError(400 , "ERror while uploading on avatar")
    //     }
    //     const user =   await User.findByIdAndUpdate(
    //         req.user?._id,
    //         {
    //           $set:{
    //              avatar:avatar.url
    //           }
    //         },
    //         { new : true}
    //       ).select("-password")
        //  return res
        //  .status(200)
        //  .json(
        //  new ApiResponse(200 , user , "avatar image updated sucessfully")
        
    // })
    // same isi tarah se coverfile photo bhi change kara sakte hai

    const getUserChannelPeofile = asyncHandler(async(req , res)=>{
      const {username} = req.params

      if(!username?.trim()){
         throw new ApiError(400 , "username is missing")
      }
        const channel = await User.aggregate([
           {
            $match:{
               username:username?.toLowerCase()
            }
           },
           {
             $lookup:{
                from:"Subscription",
                localField: "_id",
                foreignField:"channel",
                as:"subscribers"
             }
           },
           {
             $lookup:{
              from:"Subscription",
                localField: "_id",
                foreignField:"subscriber",
                as:"subscribedTo"

             }
           }
           ,{
             $addFields:{
              subscribersCount:{
                $size: "$subscribers"
              },
               channelsSubscribedToCount:{
                 $size:"$subscribedTo"
               },
               isSubscribed:{
                 $cond:{
                  if : {$in :[req.user?._id , "$subscribers.subscriber"]},
                  then:true,
                  else:false
                 }
               }
             }
           },
           {
            $project:{
              fullName:1,
              username:1,
              subscribersCount:1,
              channelsSubscribedToCount:1,
              isSubscribed:1,
              avatar:1,
              coverImage:1,
              email:1
            }
           }

        ])
        if(!channel?.length){
          throw new ApiError(404 , "channel does not exit")
        }
         return res
         .status(200)
         .json(
            new ApiResponse(200 , channel[0], "User channel fecthed succesfully")
         )
    })
     const getWatchHistory = asyncHandler(async(req , res)=>{
         const user = await User.aggregate([
          {
             $match:{
              _id : new mongoose.Types.ObjectId(req.user._id)
             }
          },
          {
            $lookup:{
              from: "videos",
              localField: "watchHistory",
              foreignField:"_id",
              as: "watchHistory",
              pipeline:[
                {
                  $lookup:{
                     from: "users",
                     localField: "owner",
                     foreignField :"_id",
                     as: "owner",
                     pipeline:[
                       {
                        $project:{
                          fullName: 1,
                          username:1 ,
                          avatar:1
                        }
                       }
                     ]
                  }
                },
                {
                   $addFields:{
                     owner :{
                      $first: "$owner"
                     }
                   }
                }
              ]
            }
          }
         ])

         return res
         .status(200)
         .json(
           new ApiResponse(200 , user[0].watchHistory , "watch fetched Succesflully")
         )

     })

 export {registerUser, loginUser, logoutUser, refreshAccessToken,changeCurrentPassword, getCurrentUser, updateAccountDetails, getUserChannelPeofile, getWatchHistory}