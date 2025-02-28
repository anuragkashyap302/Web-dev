console.log("anurag kashyap");
const accountId = 144544
let accountemail = "anurag@google.com"
var accountpassword = "12345"
accountcity = "patna"
let accountstate; // undefinded ho jayga
// varr ko uses nahi karna hai
//accountId = 2 // not allowed you cannot change const varible
accountemail = "anu.k23@google.com"
accountpassword = "54321"
accountcity = "hydrabaad"
// ye sabhi cahgnge ho jayegae infact last bala bhi jo ki  without var and let ke hai

// sabko ek sath print karne ke liye table ka use kar sakte ho
console.table([accountId ,accountemail ,accountpassword , accountcity])


// there are severral datatype in js but you can simply use let for thing name , age , bool
// datatype => stirng , number , bigint , boolean , object , null , undiefind , symbol
// you can the type using 
console.log(typeof anydatatypeyouwant);
// null will give object datatype outpit


//conversion and opreation
let score = 33
let score1 = "33ab"
console.log( typeof score); // number will output
console.log( typeof score1); // string datatype wil output

// agar tum double quote ke badd bbhi output number me chaete ho 
 let valueinnum = Number(score1);
 console.log( typeof valueinnum);
 console.log( valueinnum); // ye output NaN dega beause score1 is not a number it is forecefully done by Number
 // "33"=> will convert to 33 by this method but "33abc"do not

 // otherr conversinon
 let isloggedIn = 1
 let booleanisloggedIn = Boolean(isloggedIn);
 console.log(booleanisloggedIn);
 // ye convert ho jega true me
 let islg = "anurag"
 let booleanislogged = Boolean(islg);
 // ye bhi turre me convert ho juaaga but agar empty string raha to false ho jayga

 let somenum = 33;
 let stingnun = String(somenum);
 // it will convert to sting datatype

 //   ************ OPREATION*********//
  //learn basics op /,*,=,+,- etc
  console.log(2*3)// mul
  console.log(2**3)// work as powwer ans =8 
  console.log("1" + 2); //op 12
  console.log(1 + "2"); //op 12
  console.log("1" + 2 +2); //op 122
  console.log(1 + 2 + "2"); // op 32 betichod hai ye
 
// same datatype me conversion already you know diffent karne ki jarrut nahi jut for fun you can do it
console.log("2">1 ); // op->true;
console.log("02">1); // op->true;

console.log(null == 0); // flse
console.log(null > 0 ); // falese
console.log( null>=0); // true yaha null ko 0 me convert kar diya gaya javascript ne

console.log(undefined == 0); // flse
console.log(undefined > 0 ); // falese
console.log( undefined>=0); // false

// strict check value wiht datatype
console.log("2" === 2); // false 


// primitive datatype  call by value means call by vlaue
 // 7=> String , Number , Boolean , null , undefinde , symbol , BigInt

 // Reference Datatype (Non primitive) array , Objects , functions
  const id = Symbol('123')
  const anotherid = Symbol('123');
  console.log(id === anotherid); // false aayga beecause symbol is use for unqiueness 

  const heros = ["pawan singh" , "khesari lal" , "niruha"];
   let myObj = {
    Name: "anurag",
    age : "22"
   }
   
const mufunction = function(){
    console.log("anugar kumar");
}

console.log(typeof heros );
console.log(typeof mufunction );
console.log(typeof myObj );
console.log(typeof Symbol );

// Stack(for primitive datatype) , heap(for Non-primitive) two types of meomry

let Name = "anuarg";
let anohthername = Name; // ek copy mil gaye name ki not original name
anohthername = "kashap";
// name me change nahi hoga only in anotehername me

// but in non primitve datatype refence milta hai one me change to durse me bhi reflect hoga
let Userone = {
    bank: "statebank",
    accno: "123334"
}
let Usertwo = Userone; // refnce mil gaya
 Usertwo.bank = "boi"; // it will reflect in one also
 console.log(Userone.bank);
 console.log(Usertwo.bank);
 // both will show boi
 
 
 




