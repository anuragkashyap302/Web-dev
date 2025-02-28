import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 //let counter = 0; ye kaam nahi karega
let [counter , setCounter] =  useState(15);
// ab usestate ye kaam ko dekhaga ki agaer counter naam ka varible pure page me kahi hai to sab ko update kar do
 const addvalue = ()=>{
  // counter= counter+1; // aise update nahi hoga counter
   console.log("clicked" , counter); // aise kargoe to counter ka value badhega jarue liken ui pe nahibadgega
   // kyki ui me kuch chage karna ho reaact se ijjazt leni padigi aise nahi hoaga 
   // react dega tumko hook bahut sare jisse tum sab kuch kar sakte ho
   setCounter(counter +1);
   
 }
 const subvalue = ()=>{
  // counter= counter+1; // aise update nahi hoga counter
   console.log("clicked" , counter); // aise kargoe to counter ka value badhega jarue liken ui pe nahibadgega
   // kyki ui me kuch chage karna ho reaact se ijjazt leni padigi aise nahi hoaga 
   // react dega tumko hook bahut sare jisse tum sab kuch kar sakte ho
   setCounter(counter -1);
   
 }
  return (
    <>
      <h1>TO KAISE HAI APP LOG</h1>
      <h2>COUNTER VALUE : {counter}</h2>
      <button onClick={addvalue}>COUNTER++</button>
      <button onClick={subvalue}>COUNTER--</button>
      <h3>COUNTER VALUE ALSO CHANGED HERE:{counter} </h3>
      
    </>
  )
}

export default App
