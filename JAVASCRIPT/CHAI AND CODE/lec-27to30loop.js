// loops
 const array = [1, 2, 3 ,4 ,5];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
     
}

// nested loop 
for(let i = 1; i<=10 ; i++){
    console.log(`Outer loop Value: ${i}`);
    for(let j = 1; j<= 10 ; j++){
        console.log(i + ' * ' + j + ' = ' +i*j);
        
    }
}
// break and continue
 for (let index = 1; index < 21; index++) {
    console.log(`value i ${index}`);
    if(index == 5){
        console.log(`detetcted 5`);
        break;
        
    }
    console.log(`value of i is ${index}`);
    
  
    
 }
 for (let index = 1; index < 21; index++) {
    console.log(`value i ${index}`);
    if(index == 5){
        console.log(`detetcted 5`);
        continue;
        
    }
    console.log(`value of i is ${index}`);
    
  
    
 }

 // while do while loop
 let index = 0;
 while (index<=10) {
    console.log(`value of index is ${index}`);
    index+=2;
    
 }

  let score = 1;
 do {
    console.log(`score is ${score}`);
    score++;
    
 } while ( score<=10);

// for of loop khali kispe lagana hai wo bata do bas 
for (const nums of array) {
    console.log(nums);
    
}

const greeting = "to kaise hai app log";
for (const greet of greeting) {
    console.log(`each char is ${greet}`);
    
}

// maps

const map = new Map();
map.set('IN' , "India");
map.set('USA' , "United State of America");
map.set('Fr' , "France");

console.log(map);

for (const [key , value] of map) {
    console.log(key , ':->' , value);
    
}

const myobj = {
    'game1': 'BGMI' ,
    'game2': ' FreeFire'
}
// for (const [key , value] of myobj) {
//     console.log(key , ':->' , value); // ye error dega becuase object is not itreatable using this syntax

    
// }
// for object for in lop is used 
const myobject = {
    js:"javascript",
    cpp : "c++",
    rb :"ruby",
    swift : "swift by apple"
}

for (const key in myobject) {
    console.log(`${key} shortcut is for ${myobject[key]}`);
}

const programming = ["js" , "cpp"];
for (const key in programming) {
    console.log(programming[key]);
    console.log(key); // ye srif index hi print karga
    
}
// jo cheez ittratable nahi hai usme for in nahi lageaga

// for each loop
const coding = ["js" , "cpp" , "java" , "python" , "html"];
// ek fucntion de dedo coondition me jiska parameter arr ka item hoga
coding.forEach((item) => {
     console.log(item);
     
});

function printme(item){
    console.log(item);
    
}

coding.forEach(printme)

// foreach ke arr ka sab cheez aata hai item , index ,arr jo chahe p rint kara lo
coding.forEach((item , index , arr)=>{
    console.log(item , index, arr);
    
})

// arr ke andar object
const me = [
    {
        language : "javascript",
        filename :"js"
    },
    {
        language : "c++",
        filename :"cpp"
    },
    {
        language : "python",
        filename :"py"
    }
]

me.forEach((item)=>{
    console.log(item.language);
    console.log(item.filename);
    // uou can easily aacess the object inside array
    
    
})

// genrally for each loop do not return anyhting although it has funcitoin
const values = coding.forEach((item)=>{
    console.log(item);
    return item;
    
})
 console.log(values); // undefined kuch return hi nahi karta ahi

 const mynums = [1, 2, 3 ,4 ,5 ,6 ,7,8,9, 10];
  const newnums = mynums.filter((num)=> { 
   return  num >4 // when you put culey barces you have to return 
  })
  console.log(newnums); // flter reutn karta hai vlue so it will work


  const books  = [
     {title:'bk-1' , genre : 'fiction' , publish: 1987 , edition: 1},
     {title:'bk-2' , genre : 'history' , publish: 1989 , edition: 2},
     {title:'bk-3' , genre : 'science' , publish: 1980 , edition: 3},
     {title:'bk-4' , genre : 'biography' , publish: 1988 , edition: 4},
     {title:'bk-5' , genre : 'non-fiction' , publish: 1982 , edition: 5},
     {title:'bk-6' , genre : 'lovestory' , publish: 1984 , edition: 6},
     {title:'bk-7' , genre : 'history' , publish: 1987 , edition: 7},
     {title:'bk-8' , genre : 'novel' , publish: 1985 , edition: 8},
     {title:'bk-9' , genre : 'history' , publish: 1981 , edition: 9},

  ]

  // now we want to filter on basis on genre
 const ueserbook =   books.filter((item)=> item.genre === 'history' )
 console.log(ueserbook); // sara history wala aa jayega

 const userbook = books.filter((bk)=>{
    return bk.publish >=1985 && bk.genre === 'history';
 })
 // map 
  const adder = mynums.map((num)=> num + 10);
 // sbme 10 add ho jayega

 // chaning
  const addmul = mynums.map((num)=> num*10).map((num)=>num +1).filter((num)=> 40)
  // you can do many map in chian ones output is input for other

  //reduce
  const mytotal = mynums.reduce(function (acc , curr){
    console.log(`acc: ${acc} and currval: ${curr}`)
    // accmulaotr ko shuru me intilxie karna padta hai uske baad usme khud add hota jata hai curr val
    return acc + curr;
  } , 0)
 // const mytoal = mynums.reduce((acc , curr)=> acc+curr,0)
  console.log(mytotal);

  const shoppingcart = [
    {itemname : "js course" , price : 2999},
    {itemname : "py course" , price : 3999},
    {itemname : "cpp course" , price : 1999},
    {itemname : "dsa course" , price : 999},
    {itemname : "ml course" , price : 12999}
  ]

  const payamount = shoppingcart.reduce((acc , item)=> acc + item.price , 0)

  console.log(payamount);
  
  

 






