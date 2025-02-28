//promises
let firstPromise = new Promise((resolve, reject)=>{
   console.log("anuraag");
   // ye sychornus code hai to isme promise ka koi use nahi hai

   // ab asyshorus code ke liye tum rsolve ya rejcet bhej sakte ho user ko
   setTimeout(function saymyname(){
  console.log("my name is anurag");
   } , 1000);
   resolve(1000);
   //apka code resolve hogya 
   reject(new Error("internal server error"));
   //reject kar diye error deke 

   //ashyrus code ko 10 sec wait karna padega excute hone ke liye but 
   //hum promeise ke dwarea user ko ek proxy dete hai ki appaka code resolve ya reject ho gayra hai

});

let promise1 = new Promise((resolve,reject)=>{
    let sucess = true;
    if(sucess){
        resolve("promise fulfillesd");
    }
    else{
        reject("promise rejecterd");
    }
});

// promise ke badd bhi then and catch ka use kar sakter hai
promise1.then((message)=>{
    console.log("then ka message is" + message);
    // message me promise ke badd jo hua  wo aayega yani promise fullifilled
}).catch((error)=>{
    console.log("error" + error);
    // jo bhi error or reject promise me mila wo yaha aayega and print hoga
});

//you can use multiple then and catch ek chain ki tarha work kargea

promise1.then((message)=>{
    console.log("fist msg" + message);
    return 10;
}).then((message)=>{
    // is bale then me upper wale then ka message redcibe hooga jo bhi wo return karega chaining
    console.log("second message"+ message);
    return 20;
}).then((message)=>{
    // is bale then me upper wale then ka message redcibe hooga jo bhi wo return karega chaining
    console.log("third message"+ message);
    return 30;
}).catch((error)=>{
    console.error(error);
}).finally((message)=>{
    console.log("main finally hu hardam chaluga");
})

//agar multiple ek sathe handale karna chahte ho to promise all ka usse kar sakte ho

let promiseA = new Promise((resolve, reject)=>{
    setTimeout(resolve,1000 , "First");
})
let promiseB = new Promise((resolve, reject)=>{
    setTimeout(resolve,1000 , "second");
})
let promiseC = new Promise((resolve, reject)=>{
    setTimeout(resolve,1000 , "third");
    //setTimeout(reject,1000 , "third");
})

Promise.all([promiseA,promiseB,promiseC])
.then((values)=>{
    console.log(values);
    //agar saare resolve to promiseaall resolve ek fail toh promiseall fail
})
.catch((error)=>{
    console.error("error"+ error);
})