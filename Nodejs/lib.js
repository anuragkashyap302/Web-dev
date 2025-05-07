// exports.sum = (a, b)=>{
//     return a+b;
//  } //ye purana method hua karta tha

 // ab Es modudle support karta hai js phle common modulae karta tha
//   const sum = (a, b)=>{
//     return a+b;
//   }

// //  export{sum}
// let http = require("http")

// let server = http.createServer((request , response)=>{
//     if(request.url == "/news"){ // http://localhost:8000/news
//         // go to  news page this is own url on our  host server
//         let obj = {
//             status:1,
//             data:[{
//                 newsTitle:"aajtak",
//                 newsDes :"ws hello"
//             },
//             {
//                 newsTitle:"dhakad news",
//                 newsDes :"gnd hello"
//             }
//         ]
//         }
//         response.end(JSON.stringify(obj)); // respone ke end se ye data leke chala gaya ab ye url hit karo tumko milega
//     }
//     if(request.url == "/about"){ // http://localhost:8000/about
// // agar about hai to ye kaam kargega
//     }
//     if(request.url ==  "/course"){

//     }
//    response.end("welcome to SERVER")
// })
// server.listen("8000") // http://localhost:8000
// // ye thumara sever ban gaya ab tum isko browser pe run kar sakte hao and jo bhi response hai usko dekh sakte hao


