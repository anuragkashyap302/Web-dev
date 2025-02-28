
const mysym = Symbol("key1");

// object literals
const jsuser = { 
    name: "anurag",
    "full name": "anurag kashyap", // is type se declare karne par tum . se accses nahi kar paoge
    age : 19 ,
    [mysym]: "mykey11", // isko symbol ki tarah use kaena hai to squre bractect lago nahi to string ki traah treat hoga
    location : "bhagalpur",
    email : "anura@gaimil.com" ,
    islogged : false ,
    lastlogindays : ["monday" , "satrueday"]
}
 console.log(jsuser.email);
 console.log(jsuser["email"]); // dursa tarika
 console.log(jsuser["full name"]); // isko . nahi kar sakte hai
 console.log(jsuser[mysym]);

 jsuser.age = 23; // change ho gya vlaue
 // if want to freeze
 //Object.freeze(jsuser); // ab kuch change nahi kar sakte hai
 jsuser.age = 90;
 console.log(jsuser);

 // if want to anything in object including function you can add simply like variible
  jsuser.greeting = function(){
    console.log("to kaise hai aaplog");
  }
  jsuser.greeting2 = function(){
    console.log(`hello , ${this["full name"]}`);
  }
  console.log(jsuser.greeting);// aise print karego to [Function (anonymous)] op aayega
  console.log(jsuser.greeting());
  console.log(jsuser.greeting2());

  // you can give object inside object
  const user = {
    email : "some!@gmail.com",
    fullname :{
        username:{
          firstname : "anuraag",
          lastname : "kashyap"
        }
    }
  }
  console.log(user.fullname.username.firstname); //nesting
  // agar full name exist nahi hai to to protection bhi de sajte optionaal chaning
  console.log(user.fullname?.username.firstname);

  const ob1 = {1: "a " , 2: "b"};
  const ob2 = {3: "a " , 4: "b"};
 // const ob3 = { ob1 ,ob2}; // concate to hoga lekin ek me nahi alg alg brakect me
  //console.log(ob3);
 const  ob3 = Object.assign({} ,ob1 , ob2) // phele wale empty me {} sab kuch jaa raha hai agar wo nahi doge to jo phele hoga usi sab chlag jayega
  console.log(ob3);

  // one more method
  const ob4 = {...ob1 , ...ob2};
  console.log(ob4);

  // array ke andera multiple object you can acess
   
  const regularuser = [
    {
        emailid : "dfj;ljg;ls",
        nameofuser: "fkhjsfosjo"
    },
    {
        emailid : "dfj;ljg;ls",
        nameofuser: "fkhjsfosjo"
    }, 
    {
        emailid : "dfj;ljg;ls",
        nameofuser: "fkhjsfosjo"
    }
  ]
  console.log(regularuser[0].emailid);

  console.log(Object.keys(jsuser)); // sab kuch dedo arary ke rup me
  console.log(Object.values(jsuser));
  console.log(Object.entries(jsuser));
 

  // destructing of object
  const course = {
    coursename : "js in hindi",
    price : "100",
    coursestudent : "anurag kashyap"
  }

  const {coursestudent : student} = course; // desturcture kar diye name aage ab wahi naam likhenge jab bhi jarurat ho

  console.log(coursestudent);
  console.log(student);

  //API- apna kaam dusre ke upper dalna matlab kuch dedo wo information lageya json ke format me  like inside brakett 
//   {
//     "name" : "anurag",
//     "course" : "js in hingi", 


//   }
  
// kaafi barr aray ke type me bhi aata hai uske andar baut object to upper to padh chekeu ho kaise inforomation niklana hai usse
[
    {},
    {},
    {}
]



  




  
  
  
  

  

  

