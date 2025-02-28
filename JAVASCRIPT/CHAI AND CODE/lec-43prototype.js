function multipleby5(num){
    return num*5;
}

multipleby5.power = 2; // function ek object tarh ki tarrh hai javacript me that wahy we are able to do it
console.log(multipleby5(5));
console.log(multipleby5.power); // without error it will print 2 beacuee here function act like a object
console.log(multipleby5.prototype); // will give empty braces 

function createuser(username , score){
   this. username = username
   this.score = score
}

// fucntion me agar kuch apna functiontly dalna chate ho bhar se then use prototype

createuser.prototype.increment =  function(){
    this.score++ // jsine bhi call kiya uska score badha do this means current context 
    // ab jo user call kargea uska score badhega kyki this usi current user ke context ko dikhata hai
}

createuser.prototype.printme = function(){
    console.log(`score is ${this.score}`);// jisne blulya uska score print
    
}

const anurag = new createuser("anu" , 453); // new nahi daloge to naya objcet banega hi nahi naye inctances nahi aaayagne
const muso =  new createuser("muso" , 445)

anurag.increment();
anurag.printme();

/* a new keyword initieate the creation of new javascipt ovject
a newly created objext gets linked to the prottype of the consttructor fucntion

the cosnturctionr fucntion is called with the specidied arguments and this is bound to the newly created object
if no explict retteuen value is specified form the cosntructer js aasumes this , the newly created object , to be the inteted return value

finally we got a new object
 
 */

let heropower = {
    thor:"hammer" ,
    spiderman:"sling",

    getpower:function(){
   console.log(`power is ${this.power}`);
   
    }
}

// object sabse top prototype waha jake ek fucntion inject kar diye 
Object.prototype.anurag = function(){
    console.log(`anurag is presnet in all object`);
    
}
heropower.anurag(); // kiye object me inject liken jab us function ko heropowrr me khojonge to mil jayega
// kyiki javascript haar nahi manta hai pura uper ke hiragechy tak cheak karta hai 
// anurgag herpower me hai kya nhi to heropower ke upper hirecrkay me check kar hai kya like taht

// agar herpwoer ko koi property di hai to wo srif usi ko milaga sabhi ko nahi milaga down to up nahi hota hai
heropower.prototype.heyanurag = function(){
    console.log("anurag say hello");
    
}

const teacher = {
    makevideo:true
}
const teachingsupport = {
    isavl :false
}

const tasupport = {
    makeass :"js ass",
    fulltime: true ,
    // inheretace same like oops ab teachingsuuport ka sara proty isko bhi milga
    __proto__:teachingsupport // teaching support ka sara property brrow
}

teachingsupport.__proto__ = teacher; // bahar bhi define kar sakte ho now thecihigsupport acess to protperty of teacher

// moderrn syntax
// sidha object me prototype set kisko kiska property chieye srif wo dedo
Object.setPrototypeOf(teachingsupport ,teacher)

// ab hum sare string ke andarr ek aisa property inject kar jo true length dega without space ke
// to sidha string me prototye add kar do truelength ka ab jo usko call karega usee pura true length milahga
// ye pure string samhaj pe lagu ho gya
let anotherusername = "anurag    ";

String.prototype.truelength = function(){
    console.log(`${this}`); // yaha this jo bhi name aaayega usko referkarga
    console.log(`true length is:${this.trim().length}`);
    
    
}
anotherusername.truelength();

"tumko bhi true length milega kyki ye pure string samj pe valid hai".truelength();




