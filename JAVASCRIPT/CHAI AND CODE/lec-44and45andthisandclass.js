function setusername(username){
    this.username = username;
    console.log("called");
    
}
//agar fun inside fun call hai to inside funtion ka this gobal ko current context manenae lageta hai
// islilye createuser ka this bhi send karna padgega 

function createuser(username , email, password){
    // setuser ko call kartee hue createuser ka this bhi bhej diye ki tum apne this me set mat karro 
    // mere this me karo and alga se call method hoat hai iske liye
    setusername.call(this, username);
    this.email = email;
    this.password = password;
}

const anurag = new createuser("anurag" , "anu@123" ,"0987");
console.log(anurag);


// you can make calss in js directly
// calss is blueprint of object so you make class add funtion and proterty create object of that clsss like cpp

// calsess
class user{
    constructor(username , email , passward){
        this.username = username;
        this.email = email;
        this.passward = passward;
    }
    encryptpassward(){
        return `${this.passward}09987`
    }

    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}
// new object createinon
const muso = new user ("muso" , "muso@23" , "8t5u34");
console.log(muso);
console.log(muso.encryptpassward());
console.log(muso.changeusername());

// another  method you alresy know using funtion

function User(username , email , passward){
       this.username = username;
        this.email = email;
        this.passward = passward;
}
// adding extaa functiontaly
User.prototype.encryptpassward = function(){
    return `${this.passward}09987` 
}
// saem kaam
const lund = new user ("lund" , "lund@23" , "8t5u34");

console.log(lund);
console.log(lund.encryptpassward());

// inheritandce 

class Useer{
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`username is ${this.username}`);
        
    }
}

class teacher extends Useer {
    constructor(username  ,email ,  passward) {
        // class ka fyada yaha tumko extra call marne ki jarut nahi and this bhejne ki bhi nahi
        // jut send usrname inside super all thig done
        super(username)
        this.email = email;
        this.passward = passward;
        
    }
    addcourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const  newuser =  new teacher("candy" , "candy@123" , "1223");
console.log(newuser);
newuser.addcourse();
console.log(newuser instanceof teacher); // ture inbuit js funtion

// static property of javascipt 
class upbhokhta{
    constructor (username){
        this.username = username;
    }

    andaraaiye(){
        console.log(`appaka swagat hai${this.username}`);
        
    }
    // static us metod  ya paropery ko acess hone se rok deta hai child ko bhi acess nahi karne deta hai
   static createId(){
        return `123`
    }
}

const nitesh = new upbhokhta("nithesh");
console.log(nitesh.createId); //error de dega ye chiz 
nitesh.andaraaiye() // ye tum kar sakte ho acess 










