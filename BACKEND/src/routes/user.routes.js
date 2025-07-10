import { Router } from "express";
import { changeCurrentPassword, getCurrentUser, getUserChannelPeofile, getWatchHistory, loginUser, logoutUser, refreshAccessToken, registerUser, updateAccountDetails } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";  
import { verifyJWT } from "../middlewares/auth.middleware.js"; 
const userRouter = Router();
userRouter.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
        
    ]),
    registerUser)

    userRouter.route("/login").post(loginUser)
    userRouter.route("/logout").post(verifyJWT , logoutUser)
    userRouter.route("/refresh-token").post(refreshAccessToken)

    userRouter.route("/change-password").post(verifyJWT , changeCurrentPassword)
    userRouter.route("/current-user").get(verifyJWT , getCurrentUser)
    userRouter.route("/upadate-account").patch(verifyJWT , updateAccountDetails)
    // you can add chage avataer rounte also
    userRouter.route("/c/:username").get(verifyJWT , getUserChannelPeofile)
    userRouter.route("/history").get(verifyJWT , getWatchHistory)
export default userRouter