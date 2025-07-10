// node js hume ek error class provide karta hai for sowing diffrent type of error yu can use that class and objest of that calss
// or you can extndd that class to yuor custom error what you want show extend the property ot that class
class ApiError extends Error{
    constructor(
        statusCode, 
        message = "Something went Wrong",
        errors = [],
        stack  = ""

    ){
        super(message)
        this.statusCode =statusCode
        this.data = null;
        this.message = message
        this.success = false;
        this.errors = errors

        if(stack){
            this.stack = stack
        }
        else{
            Error.captureStackTrace(this , this.constructor)
        }
    }
}
 export {ApiError}