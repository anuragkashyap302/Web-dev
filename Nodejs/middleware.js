
// you can create middleware in seprate and export to orginal and use it

let mytoken = "12345"
let checkToken = (req , res , next)=>{
    console.log("welcome to middleware");
    if(req.query.token == "" || req.query.token == undefined){
        return res.send(
            {
                status: 0,
                msg:"token to daal le bhai phir aana"
            }
        )
    }
     if(req.query.token!= mytoken){
        return res.send({
            status: 0,
            msg: "sahi token to daal bhai"
        })
     }
    next(); // next ab aage ke kaam ko karne ka izzat deta hai
    
}

 module.exports = {checkToken}