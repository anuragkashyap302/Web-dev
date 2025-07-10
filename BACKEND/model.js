// hum diffrent type models banate hai monngese ka use kar ke ki hume kis sturturcr me data chahiye
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username:{ type: String, 
    required: true ,// ye required hai ki nahi
    // agar required hai to uski value deni padegi
    unique:ture // agar koi cheez unique ho to 
    },
     password:{ type: String,
     required: [true , 'Password is required'] // ye bhi required hai hum aise bhi kar skte hai
    },
    email:{ type: String,
     required: true 
    },
  phone:{ type: String, 
    required: true 
},
  address:{ type: String, 
    required: true
 },
  age: { type: Number, required: true }
});
// mongoose.model ke parameter me do chiz(kon , kya) and usko export kar do
 export const User = mongoose.model('User', userSchema);
// hum aur bhi bahut sare model bna sakte hai 


