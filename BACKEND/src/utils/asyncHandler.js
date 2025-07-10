const asyncHandler = (requestHandeler) => {
   return (req ,res , next) =>{
        Promise.resolve(requestHandeler(req , res , next)).catch((err) =>  next((err))
        )
    }
}


    // ek warpper type funtcin bana liye jo bahut bar use hone wala hai to usko ek bana ek ab har jagah import kar ke use ye 2nd method hai uper 1st 
export {asyncHandler}
// const asyncHandler = (fn) => async (req , res , next) => {
//     try{

//     }
//     catch(error){
//         res.status(error.codde || 500).json({
//             success: false,
//             message:error.message
//         })  
//     }
// }

