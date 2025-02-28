import { useState } from 'react'

import './App.css'
import { useEffect } from 'react'
import LoggerComponent from './compenents/LoggerComponent'
import TimerComponent from './compenents/TimerComponent'
import DataFetcher from './compenents/DataFetcher'
import ResizeComponent from './compenents/ResizeComponent'
import MultiEffectComponent from './compenents/MultiEffectComponent'



function App() {
//   const [count , setCount] = useState(0);
//   const [total , setTotal] = useState(1);
// //  useeffectsnippet ka use karke tum useeffect ka snippet la sakte ho
// // first -> side-effect ka manin function hai jisme mention hoga ke side effect ke roop me hmlog kya karna chahte hai
// // second->clean-up-function (jis cheezo se app bachna chahte hai ya kisi chhez ko clean karna cahhte hai)
// // third-> comma separated dep list(mention that enitties jis pe app side effect laga rahe hai e.g count , coloar cahange)

// //we have many variation to apply useffect

// // variation 1
// //runs on everry render
// useEffect(()=>{
//   alert("i will run on every render")
// })
//  {/* jitna bar button click karnge  ui utna bar render hoga to sideeffct jo set kiya wo utna hi baar dikhega just render hone se phele for varitation one */}

// //vaiation 2
// // runs on only first render
// useEffect(() => {
//   alert("i will run on only 1st render")
// }, [])
// // sirf ek on first time when you are on ui

// // variation 3
// // jab jab jo state pe sideeffect lagaye hai usko change karnge to ye chlega
// useEffect(() => {
//   alert("i will run every time when count is updated")
// }, [count])
// // count ko inc jitne baar karoge ye alret aayega even first time bhi kyki hum 0 set kar rahe hai

// //varition 4
// // multiple dependenies on state mtalavb kisi do ya jayada cheez pe side effect add kar diye
// useEffect(() => {
  
// alert("i will run every time when count/toatal is updated")
  
// }, [count , total])
// // coutn , total koi ek ya dono click hone par ye dffect chlega


// //varitation 5
// // is barr and cleanup function
// useEffect(() => {
//   alert("count is uptadted")

//   return () =>{
//     // har baar jab count pe click karte hai to purana wala count hat jata to cleaup wala alert aa jayega 
//    alert("count is unmountedd from UI")
//   }
// }, [count])

// function handleClick(){
//   setCount(count +1);
 
// }
// function handleClickTotal(){
//   setTotal(total +1);
// }

  return (
   <div>
    
   {/* <button onClick={handleClick}>Update Count</button>
  
   <br />
  count:{count};

   <br />
   <button onClick={handleClickTotal}>Update Total</button>
   <br />
  toatal is:{total}; */}
  <LoggerComponent/>
  <TimerComponent/>
 <DataFetcher/>
 <ResizeComponent/>
<MultiEffectComponent/>
  
   </div>
    
  )
}

export default App
