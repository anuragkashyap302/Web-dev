import { useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
//   const [count, setCount] = useState(0);
//  // let val = 1; ye re render ho ja raha baar baar
//  let val = useRef(0); // ab val ek object ban jisiki intial val 1 jo ki current(object ka ek member hai) me stroe hai usko acess x.currnet kar sakte hai

// // 2nd work of useref matalab kisi ek elemet ka use karke dure elment ka behavior change kar sakete hai like dom manipulation
// // but imse getelmet wala lafda nahi just useref and conect th btn useing ref
//  let btnRef = useRef()
//   function handleIncrement(){
//     // ye vaulue har baar new intilize ho jeyaga becuse har baar render hoga pura page jab bhi count increase karenge val chnge hoga hi nahi apni value of persist nahi kar pa raha hai
//     // isi se bachne ke liye ham useref ka use karte hai wo value ko persist karke rakhta hai
//    // val = val +1;

//    // naya tarike valule persist karne ke liye
//    val.current = val.current +1;
//     console.log("value of val:", val.current);
//     setCount(count+1);
//   }
//   // it runs on evry render
//   useEffect(()=>{
//     // jaab jab page reder karge to ye effect chlega and bateyga rnder ke bare me
//     console.log("main ferse render hogya  hu");

//   })

//   function changeClor(){
//     // dusre butn pe click hote hi ye funtion cll and uske ref ke currnt ka stlye cahgnge
//      btnRef.current.style.backgroundColor = "red";
//   }

const [time , setTime] = useState(0);
let timeRef = useRef(null);
function startTimer(){
  timeRef.current = setInterval(()=>{
    setTime(time => time +1);
    // har baar re render hoga time inc hone ke badd to stop ke condition me haume current time chiye to usko alg se store kar lo useref me phir stop click
    // hone par disply kar dena to normal se kkam nahi che;ga

  } ,1000);
  
}
function stopTimer(){
clearInterval(timeRef.current);
timeRef.current = null;
}
function resetTimer(){
   stopTimer();
   setTime(0);
}

  return (
    // <div className='container'>
    //   {/* isi button ko ref de diye dusre btn ka jska behavior chnge karna h0 */}
    //   <button ref={btnRef} className='button' onClick={handleIncrement}>Increment</button>
    //   <br />
      
    //   <button className='button2' onClick={changeClor}>Change Color of 1st Button </button>
    //   <div className='count'>
    //     Count:{count}
    //   </div>

    // </div>
    <div className='container'>
      <h1>StopWatch: {time} Seconds</h1>
      <button className='button' onClick={startTimer}>Start</button>
      <br /> 
      <button className='button' onClick={stopTimer}>Stop</button>
      <br /> 
      <button className='button' onClick={resetTimer}>Reset</button>
      <br /> 

    </div>
  )
}

export default App
