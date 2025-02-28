const myarr = [ 0,1,2,3,4,5] ; // do not always same type of element you can keep any type 
// javascript ka array resizeble and mix datatype hota hai every arr bhi rakh sakta hai
// jab bhi copy opreation lagata hai to wo shllow copy bana ke deta hai
// shllow means same refencre point ek me change to dusre me reflect

const myheros = ["hum" , "tum"]

const arry2 = new Array(1,2 ,2 ,3 ,4);
console.log(arry2[0]);

// there are many property read documentaion

arry2.push(6);
console.log(arry2);
arry2.pop() // last value ko reamove
arry2.unshift(9); // oth index pe add hota jata hai
arry2.shift();
console.log(arry2);
console.log(arry2.includes(9)); // true
console.log(arry2.indexOf(4));

const newarr = arry2.join(); 
console.log(arry2);
console.log( typeof newarr); // string sari value string me convert ho gayi

// slice and splice

const myn1 = arry2.slice(1 ,3); // utana part le liyge 3rd ko chor kar
console.log(myn1);
const myn2 = arry2.splice(1,3);
console.log(myn2); // jitna part splice hoga wo array se nikal hi jayega
console.log(arry2); // original arary se pura splice wala part nikal jayega with last range included

const movie = ['hum', 'aapke','hai' , 'kon'];
const  heros = ['sharukh' , 'khan' , 'kajol'];
//movie.push(heros); // sara push ho jyega par wo ek element tarh treat hoga pura secod ary for first arry
console.log(movie);
//console.log(movie[4][0]); // wo pura ek hai uske andar jake print

 const allthing = movie.concat(heros); // new arry ban jayega with all elemnt
console.log(allthing);

const allthing2 = [...movie , ...heros] // spred hojega sab ke sab and ek sath print
console.log(allthing2);

const funarry = [1,2,3, [ 4, 5 ,6] , 7 , [ 6, 7, [4, 5]]]; // isko sab ko ek array me flat like same dikhane chahte ho to
const usefullarry = funarry.flat(Infinity); // depth provide karo kha tak flat karna chate ho
console.log(usefullarry);

console.log(Array.isArray("anurag")); // false
// but you can convert this into arrray
console.log(Array.from("anurag"));
console.log(Array.from({name : "anurag"})); // ye convertt nahi ho payga empty string output

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of( score1, score2 , score3));
