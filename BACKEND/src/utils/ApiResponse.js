// ek apna resopnse bana liye ki user ko aisa hi response denge ye apna custonm calss hai 

class ApiResponse{
    constructor(statusCode , data , message = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}
export {ApiResponse}