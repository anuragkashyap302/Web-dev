import { v2  as cloudinary} from "cloudinary";    
import { response } from "express";
import fs, { rmSync } from "fs"

cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFliePath) =>{
    try {
        if(!localFliePath) return null;
        // if file is thier uploead thiat
      const response = await  cloudinary.uploader.upload(localFliePath , {
            resource_type: "auto"
        })
        // flie has been uploaded sucesssfully
        console.log("flies is uploeaded on coliednray", response.url);
        return response
        
    } catch (error) {
         fs.unlinkSync(localFliePath) // remove the locally saved temoporay file as the operation got failed
         return null;
    }
}
 export {uploadOnCloudinary}
