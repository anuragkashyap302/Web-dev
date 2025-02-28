// control flow
let condition = 1;
if(condition){
    // agar condtion true hai to hi yaha aaoge basead on comparision
}

if(2 != 3){
    console.log("andar aa gaya bhi condition is true");
    
}

const score = 200;
if(score> 100){
    const power = "fly"
    console.log(`user power:${power}`);
    
}
//console.log(`user Power: ${power}`); // power is not defind error aayega 

// shorthand notation 
// if ka scope same line me hota hai agar curley braces nahi do to bhi

// nesting
 const balance = 1000;
 if( balance < 500){
    console.log("less than 500");
    
 } else if( balance <700){
    console.log("less than 700");
 } else if( balance <900){
    console.log("less than 700");
 }else {
    console.log("less than 1100"); 
 }

 const userloggedin = true;
 const debitcard = true;
 if (userloggedin && debitcard) {
    console.log("allow user to shopping");
      
 }

 // swicth case 
 const month = 3;
// agar break nahi lagelenge to jaha shi case mila uske badd ka sara code chal jata hai except defalut case
 switch (month) {
    case 1:
        console.log("januray");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;
 
    default:
        console.log("defualt case");
        break;
 }

 const useremail = "anu@.comail"
 if(useremail){ // bina comparisin ke hi maan liya gaya hai true value
    console.log("got user email");
    
 } else{
    console.log("dont hace user email");
    
 }

 // falsey  vlaue = > 0 , - 0 , bigint 0n , undefinded , null , nan
 // accept flaesy all are thurty = > " 0" , "false"  , " " string ke andar hai to thrutuey

 const emptyobj = {}
 if(Object.keys(emptyobj).length === 0){
    console.log("Object is empty"); // if conditin chal jayega yaha
    
 }
 //false == 0; // true
// false = '' // true
 // NUllish coalescing operetor (??): null undefinded
 let val1;
// val1 = 5 ?? 10; // o/p 5
// val1 = null ?? 10; //op ->10 program ko bachata hai agar null aayga to optinal value de detaa ahi
val1 = undefined ?? 15; //15 
val1 = null ?? 10 ?? 20; // 10 print ho jayega jo phele mila null ke badd

 console.log(val1);

 // terinialy operatir
 // conditon ? true : false
 const ice = 100;
 ice>= 80? console.log("more than 80"): console.log("less tah 80");
 
 
 