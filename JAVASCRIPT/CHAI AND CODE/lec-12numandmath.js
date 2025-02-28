const score = 358.343535;
console.log(score)
const balance = new Number(200);
console.log(balance);

console.log( balance.toString().length);
console.log( balance.toFixed(2)); // 200.00 will output
console.log( score.toPrecision(3)); // wahi tak simit 358
console.log( score.toPrecision(5)); // op - 358.34

const number = 1000000
console.log( number.toLocaleString()); // , laga hua aayga in us standard
console.log( number.toLocaleString('en-IN')); // ab indian me

/*********** Math  */

console.log(Math); // ye ek object ki trah hi js me ek library hai joki baurt sare property rakthe hai
console.log(Math.abs(-4)); // baut sare property hai
console.log(Math.round(4.6));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.3));

console.log(Math.random());
console.log((Math.random()*10) +1);
console.log(Math.floor((Math.random()*10) +1)); // if you want in interger 

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min +1))+ min);
// always 10 and20 ke beech me value aayga
 

let mydate = new Date();
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate); // object

let mycreadtedDate = new Date(2025 , 0 , 20); // month 0 se start hote hai sab kuch de skate time day etc
console.log(mycreadtedDate.toDateString());
let myotherDate = new Date("2025-01-25");

let myTimeStamp = Date.now(); // quiz or poll like application me kaam ayega
console.log(myTimeStamp);
console.log(mycreadtedDate.getTime()); // this isa lso valid
console.log(Math.floor(Date.now()/1000)); // milisec to sec

// you can get specific date day time also
let newdate = new Date();
console.log(newdate);
console.log(newdate.getMonth()+1); // becuase month start from 0
console.log(newdate.getDay());
console.log(newdate.getHours()); //etc

// tum apne tarah se customize bhi kar sakete h0 kaise print karna hai

newdate.toLocaleString('default', {
    weekday : "long", //kya kya tumko kaise chiye eveything you can mention
    timeZone: 'indian'
})













