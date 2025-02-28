// object oriented javascript 
const user ={
    name: "anurag" ,
    login: 8,
    signed: true,

    getuserdetail :function(){
    console.log("got user details from database");
  //  console.log(`Uesrname: ${name}`); // ye error dega kyki isko pata naahi kon sa name print karna hai
    // that eahy using this keyword for current context
    console.log(`Uesrname: ${this.name}`);
    console.log(this); // ye pura object hi de dega matalb pura current context
    
    
    
    
    }
}
console.log(user.name);
console.log(user.getuserdetail);
console.log(this); // empty kyki golbaal me koi currnet context hai hi nahi

// constructer funtion
function users(name , logincount , status){
    // this pachen hogi ki kon kisa vaible hai alredy oops me padh cheke ho
    this.name = name;
    this.logincount = logincount;
    this.status = status;
    return this;
}
//const userone = users("hitesh", 12 , true);
//const usertwo = users("anrag", 13 , false);
//console.log(userone);

//YAHA PE USEER TWO USERONE KE VALUE KO OVERWRITE KAR JAYEAG AND USERTWO KA DETAILS PRINT HOAGA
// KYKI NEEW KEYWORD KA USE KIYE NAHI TO NAYA INTACE BANA BNAHI THIS CURRENT INSTACE KO HI BHEJ DIYA

//slon
const userone = new users("hitesh", 12 , true);
const usertwo = new users("anrag", 13 , false);
console.log(userone);
console.log(usertwo); // ab dono print hoga sahi se
// new keyword naya intaces deta hai har ko

function Person(name, age) {
    this.name = name;
    this.age = age;
    
    this.greet = function() {
      console.log(`Hello, I'm ${this.name}`);
    };
  }
  
  const person1 = new Person("Alice", 30);
  const person2 = new Person("Bob", 35);
  
  person1.greet(); // Output: Hello, I'm Alice
  
