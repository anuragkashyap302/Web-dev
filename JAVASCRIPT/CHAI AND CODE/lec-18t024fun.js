// kisi kaam ko baar baar karna ho to use fuction

function saymyname(){
    console.log("A");
    console.log("N");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("G")
}
// console.log(saymyname());
// console.log(saymyname());

function addtwonum(num1 , num2){
    console.log(num1 + num2);
   // let result = num1 + num2;
  //  return result;
    // return num1 + num2; also valid
  //  console.log("anurag"); // kabhi print nahi hoga
    
}

addtwonum( 3 , 4); // 7
addtwonum( 3 , "4"); // 34
addtwonum( 3 , "a"); //3a

const result =  addtwonum( 4 ,6); // yaha 10 print hoga lekin result nahi functon ke ander bala 
console.log("Result :" , result); // undefined aayga kyki function koi value return thori na kar raha hai

function loginusermessage(username = "sam"){ // agar koi value nahi aaay to ye print ho jyga undefined ki jaagh
    if(username === undefined){
        console.log("naam to dall lo bhosike");
        return ;
        
    }
    return `${username} aao bhosriwala tum`
}
console.log(loginusermessage("hfiuouon")); // agar tum kuch nahi pass kargoe to undefidnd aayga
console.log(loginusermessage()); 

function calculatecartprice(val1, val2 ,...num1){ // ek parameter hai lekin multiple argument ke liye bhi kaam karga due to theree dot
    // val1 and val2 ko chor kar jtane parmerter aayenge wahi ... ke ander jayengae 
    return num1;
}
console.log(calculatecartprice( 200 , 400 , 500 ,2000));  // ... rest operateor kahate hai log isko

const user = {
    username : "anurag", 
    price : 199

}

function handleobj(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    // agar obj ya obj elemetn nahi haua to undefined aayga

}

handleobj(user);
// you can direct pass the object also
handleobj({
    username: "sam",
    price : 199
})

// scope of varibale

let a = 300;
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    console.log(a) ; // 10 hi print hoga
}
//console.log(a); // error
//console.log(b); // error
console.log(c);  // it will print scope ko manta hi nahi

// nested scope
   function one(){
    const username = "anurag"
    function two(){
        const website = "youtube"
        console.log(username); // ye kar sakte hai bade aadmi se chota aadmi icecream le sakta hai
        
    }
   // console.log(website); // ye to chlega hi nahi wesite to ander tha
    two()
    
   }
   one()

   // interrsting

    console.log(addone(5)); // ye chal jayega although function niche hai phier bhi
    
   function addone(num){
       return num +1;
   }
   
//console.log(addtwo(5)); // ye error dega kyki yaha hoisting ka concept atat hai

   const addtwo = function (num){
    return num +2
   }
   addtwo(5);


   const grahak = {
    username : "anurag",
    price : 999 ,
    welcomemessage: function(){
        // current varible use kar rahe na to this use kar liye nahi kargoe to erroe aayeaga
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    }

   }
   grahak.welcomemessage();
   grahak.username = "sam";
   grahak.welcomemessage(); // ab userrname me sam aayega
   console.log(this); // this current constext ki baat karta yaha usernaem sam bateya and upper wala this anuraga bataeya
   // agar yaha paer koi chagne nahi hoga to tihs empty show karega kyki uske koi current contxt hai nahi

   function chai (){
    let username  =  "anurag"
    console.log(this); // bhaut random value dega
    console.log(this.username); // yaha this kaam nahi karga undeined aa yega
   }

   chai(); 

   // ararow function
   const code = ()=>{
    let username = "anurag"
    console.log(this.username); // yaha bhi kaame nahi karega
    console.log(this); // {} ye out put aaayga
    
   }

   const joddo = (num1 , num2)=>{
     return num1 + num2
   }
   console.log(joddo(3 ,4));

   // implict return
   const jodod = (num1 , num2)=> num1 + num2  // ract me use hota hai
   console.log(jodod(3 , 4));

   // you can return object also
   const joddoe = (num1 , num2 ) =>( {username :'anurag'}); // andar wala braceted dena hi padega

   // Immediately invoked fucntion expression 
   (
    function gandu(){
        // named iife
        console.log("db connectd");
        
       }
   )(); // ye excution call hai just immmeadte kar diye kyki kabhi kabhi jaraturt pad jata hai
   // yaha semicolon lagnea mat blulna nahi to gadbad ho jjayeaga


   ( (name)=>{
     console.log("db aaya bhi");
     
   })('anuarg') // paragmeter de diya
   