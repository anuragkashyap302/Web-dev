import mongoose, {Schema} from "mongoose";
import  jwt  from "jsonwebtoken";  
import bcrypt from "bcrypt" 
const userSchema = new Schema(
    {
    username: {
        type: String,
        required:true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true

    },
    email :{
       type: String,
       required: true,
       unique : true,
       lowercase:true,
       trim: true,

    },
    fullName:{
        type: String,
        required:true,
        trim: true,
        index: true
    },
    avatar:{
        type: String, // cloudrry url
        
    },
    coverImage:{
        type:String , 
    },
    wacthHistory:[
        {
            type: Schema.Types.ObjectId,
            ref:"Video"
        }
    ],
    password:{
        type: String,
        required:[true , 'Password Is Requried']

    },
    refreshToken:{
        type:String
    }
    

} , {timestamps: true}
)
 // agar save karne se kcuh karwan chate like password save aur encrypt to pre middle ware ka use kar lo
userSchema.pre("save" , async function(next) {
    // har bbarr ye middle wre nahi chala chiye jab password me me kuch ho tabi chle ye 
    if(!this.isModified("password")) return next();
   this.password = await bcrypt.hash(this.password, 10)

    next()
})
 // you cn crate your own middle ware 
 userSchema.methods.isPasswordCorrect = async function(password) {
 return  await  bcrypt.compare(password , this.password)
 }

 userSchema.methods.generateAccessToken = function(){
   return  jwt.sign(
        {
        _id: this._id,
        email: this.email,
        username:this.username,
        fullName: this.fullName
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expireIn: process.env.ACCESS_TOKEN_EXPRIY
    }
)
 }
 userSchema.methods.generateRefreshToken = function(){
    return  jwt.sign(
        {
        _id: this._id,
        email: this.email,
        username:this.username,
        fullName: this.fullName
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
  expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN
}
)
 }
export const User = mongoose.model("User", userSchema)
