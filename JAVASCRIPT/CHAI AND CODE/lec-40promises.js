// kuch bada kiya tha wo ya to intial state , fulllied or rejected hi hoaga
// bas aisa hi samjh lo proimises ko

const promiseOne = new Promise(function(resolve , reject){
  // do an async task
  // //db calls , cryptography , network
  setTimeout(function(){
    console.log('Async task is complete');
    resolve(); // iska sidha connection then se hai 
    
  } , 1000)
}) // promise ya to reject or resolve ;

// ab promise ko consume karne ka bari hai ki akhir resolve hua ya reject hua
// use then keywork for resolve 
promiseOne.then(function(){
    console.log("Promise consumed");
    
})
// metod 2 youc can use dirctly wihtout any vaivle

new Promise(function(resolve , reject){
    setTimeout(function(){
      console.log('Async 2 task is complete');
      resolve(); // iska sidha connection then se hai ki jab bhi ye promise resolve ho jaye then ko bada do 
      // ab then jo kaam tum diye ho wo hoaga
      
    } , 1000)
  }).then(function(){
    console.log("Async 2 resolved");
    
  })

const promiseThree  = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username:"anurag" , email:"anu@gmail.com"})
    } , 1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = false;
        // agar error true hai to catch bala block nhi to then bala
        // agar error reslove ho gya to resolve me nahi to reject me
        if(!error){
            resolve({name:"anurag" , pass:"1234"})
        }
        else{
            reject("ERROR: ooopsss")
        }
    }, 1000)
})
// jasie reslove ke liye then hai waise hi reject ke liye catch hai
  promiseFour.then((user)=>{
    console.log(user);
    return user.name ; // khali user ka naame hi chiye to user.name but isko kisi varible me rakh ke kaam nahi kar sakte
    // for that you have to use then chainging jo ye return kar raha usko agle then me rakh lo wahi wo recive kaegaga

}).then((user)=>{
    console.log(user); // ab yaha pe anurag print hoagga yahi chaning follow karna padega
    
}).catch(function(error){
    console.log(error);
    
    // finally hume bata do kaam ho gaya kya ya jo bhi hua bata do matlab ye to chelega defalut cahe resoolve ho ya reject hao
}).finally(()=>{
    console.log("ya to kaam ho gaya hai ya to ladue lag gaye hai");
    
})

const promiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({name:"anuragkashyap" , pass:"123456"})
        }
        else{
            reject("ERROR: kuch nahi mila guru")
        }
    }, 1000)
})
// ek aur naye tarke se consume kar sakte hai promisse ko using async await se (ye kuch der wait karta hai kaam hone nahi ayya ro phir erroe deta hai)
async function consumepromisefive() {
  // ab ya to erroer aayag ya value to isko try and catch block rakha do jo print karana chalte ho
  try {
    const response =   await promiseFive
     console.log(response);
     // alg se error handle kar liye kyki async funtion then and catch finally proide nahi karta hi
  } catch (error) {
    console.log(error);
    
  }
  
}
consumepromisefive();

// pichle class me padhe the web ka data lane ke liye xmlhttprequest karna padta hai wo purana method hai 
// ab log fecth() use karte hai jisko ek url do wo tumko promise return kar dega matlab information in object(genarlly)

async function getAlluser() {
  try {
    const response = await  fetch('https://jsonplaceholder.typicode.com/users'); // thora time lagega lisiye await ka use
  const data =  await response.json() // agar object me respone nahi aaya to coonvert kar lo json me isme bhi time lagta to await laga diye yaha bhi
  console.log(data); // print kar do
  } catch (error) {
    console.log("ye kami hai:" , error);
    
  }
  
}
getAlluser()


// same chiz ko .then .catch me kar sakte ho 
// yaha try catach async await kuch nahi chiye kyki ek then ka kaam khatam hota hai tabhi dusra chlata hai
fetch('https://jsonplaceholder.typicode.com/users')
.then((respone)=>{
  return respone.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log(error);

})

// ek baat dekho sabse phle op fecth ka aaya jabki code sabse last me likha hai kyki fecth ek liye ek alg priotuy
// queeue banti hai to islko high prioty milta hai baaki function se vip line hai
// embeded systtm bals sab kam hai