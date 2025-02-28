// let obj = {
//     name : "anurag",
//     // agar obj element me space hai to ""ke andar band karna padega
//     // "full name": "anurag kashap"
//     age: 25, 
//     weight: 59,
//     height: "6ft 1in",
//     // function bhi create kar sakte hai object ke andar
//     greet: function(){
//         console.log("to kasie hai aplog");
//     }



// };
// console.log(obj)
// obj.greet();

// console.log(typeof(obj))

// // let obj2 = obj;
// this is swallow copy of obj only obj2 variable is crated and it refer to obj 
//nwe obj is not created

// creation ofa arr

// let arr = [1,2,3,4,5];

// //you can use array constructer also
// // aray ke andar tum diffrent type of data bhi rakh sakter ho javascript bolte baby


// let brr = new Array('anurag',1,true);
// console.log(arr);
// console.log(brr);
// console.log(typeof(arr));

// // aceess
// console.log(brr[2]);

// many bulit in function are there go throgh it

// for(let key in obj) {
//     console.log(key, " ", obj[key]);
// }

// console.log(obj)
// obj.greet();

// console.log(typeof(obj))

// // let obj2 = obj;

// //creation of arrays 
// let arr = [1,2,3,4,5];
// //array constructor 
// let brr = new Array('love',100,true);
// brr.push('Babbar');
// brr.pop();

// brr.shift();
// brr.unshift('Love Babbar');
// brr.push(20);
// brr.push(40);


// brr.push(70);

// // console.log(brr.slice(2,4) );

// brr.splice(1,0,'kunal');

// console.log(brr);

// // console.log(brr);

// // console.log(typeof(brr));


// let arr = [10,20,30,11,21,44,51];

// let evenArray = arr.filter((number) => {
//     return number%2 === 0;
//     // if(number%2 === 0) {
//     //     return true;
//     // }
//     // else {
//     //     return false;
//     // }
// });


// console.log(evenArray)

// arr.map((number,index) => {
//     console.log(number);
//     console.log(index);
// })

// let ansArray  = arr.map((number) => {
//     return number*number;
// })

// console.log(ansArray)



// let arr = [1,2,'love','kunal', null];

// let ans = arr.filter((value) => {
//     if(typeof(value) == 'number') {
//         return true;
//     }
//     else {
//         return false;
//     }
// });

// console.log(ans);



// let arr = [10,20,30,40];

// let ans  = arr.reduce((acc,curr)=> {
//     return acc + curr;
// }, 0);

// console.log(ans);

// let arr = [9,1,7,4,2,8];
// arr.sort();
// //HW: how to do sort in descending order ?

// console.log(arr);

// console.log(arr.indexOf(9));


// let arr = [10,20,30];

// let length = arr.length;
// console.log("length: " , length);
// //tradiotional loop

// for(let index = 0; index < length; index++) {
//     console.log(arr[index]);
// }

// arr.forEach((value, index) => {
//     console.log("Number: ", value, " Index: ", index);
// })

// let arr = [10,20,30,40];

// for(let value of arr) {
//     console.log(value);
// }

// let fullName = "babbar";

// for(let val of fullName) {
//     console.log(val);
// }

let arr = [10,20,30,40,50];

let getSum = (arr) => {
    let sum = 0;
    arr.forEach((value) => {
        sum = sum + value;
    })
    return sum;
}

let totalSum = getSum(arr);
console.log(totalSum);

