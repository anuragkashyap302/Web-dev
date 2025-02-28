// link ho chuka hai ab jo yaha karoge html me change hoga

//code 1

const t1 = performance.now(); // ye function code running ka time deta hai
for(let i = 1 ; i<=100; i++){
   let para =  document.createElement('p');
   para.textContent = "this is para"+ i;
   document.body.appendChild(para);

}

const t2 = performance.now(); 
// total time taken by my code is t2 -t1
console.log("time taken" + t2-t1);

// code 2

const t3 = performance.now();
let mydiv = document.createElement('div');
for(let i = 1 ; i<=100; i++){
   let para =  document.createElement('p');
   para.textContent = "this is para"+ i;
    mydiv.appendChild(para);

}
document.body.appendChild(mydiv);

const t4 = performance.now();
console.log("time taken" + t4-t3); 

//code 2 ko run hone me kam time lagega kyki ye 1 reflow and repaint lerahha hai but code1 100 reflow and rpaint le raha hai

//best code
let fragment = document.createDocumentFragment();
for(let i = 1 ; i<=100; i++){
   let para =  document.createElement('p');
   para.textContent = "this is para"+ i;
   // no reflow and repaint for this line
    fragment.appendChild(para);

}

document.body.appendChild(fragment);
//only one reflow and one repaint for this code
