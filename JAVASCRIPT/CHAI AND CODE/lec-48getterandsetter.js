class User{
    constructor(email , password){
        this.email = email;
        this.password = password;
    }

    get password(){
       // return this.password.toUpperCase() ye error dega
       return this._passward.toUpperCase();
    }
    set password(value){
        // this.password = value // ye error dega kyki consturer and setter ek vaible ko set kar rahe hai to confucsion
        // so for easly we use diffrent varible name
        this._passward = value;
     }
}

const anurag = new User("anuraga" , "abc");
console.log(anurag.password);

// old fashion me getter setter function ke through use hota tha

function oldmethod(email , password){
        this._email = email;
     this._password = password;
     Object.defineProperty(this , 'email' ,{
        get:function(){
            return this._email.toUpperCase();
        },
        set:function(value){
            this._email = value
        }
     })
     Object.defineProperty(this , 'password' ,{
        get:function(){
            return this._password.toUpperCase()
        },
        set:function(value){
            this._password = value
        }
     })
    
   
}

const muso = new oldmethod("muso" , 5344);
console.log(muso.email);

// one more method is there by direct only using object not consturcteor
const rare = {
     _email:"naursjg",
     _password:"abc",
     get email(){
        return this._email.toUpperCase()
     },
     set email(value){
    this._email = value;
     }
}

const chand = Object.create(rare);
console.log(chand.email); // yaha _email likne ki jarurat hai nahi wo khud samjh leaga

// javascrit me private ki jagah # use kar ko property ke aage wo private ho gaya

