import { useState } from 'react'
import './App.css'

function App(){
  
function handleClick(){
   alert("mar dala re ");
}
function handlemouseOver(){
  alert("para ke upper mouse leke aaye ho")
}
function handleInputChange(){
  alert("name bhar rahe ho bhar lo")
}
function handleSubmit(e) {
    e.preventDefault();
    // i am writtin my custom behour down
    alert("form submit kar du kya phir de rechek kar lo")
}
  return (

   <div>
    <button onClick={alert("mai to phele hi aa gaya")}>Click me
  {/* ye immediate invoking hai issse phele se hi alert aa jayega ui par you can resolve by using => this onclick{()=> alret("ab cllick karne  par aauga")} */}
  </button>
    <form  onSubmit={handleSubmit}>
      <input type="text" onChange={handleInputChange} />
      <button type ="submit">Sumbit</button>
    </form>
    <p onMouseOver={handlemouseOver} style={{color:"red" ,border:"2px solid black"} }>
      I am a Para</p>
    {/* jab bhi click  event hoga ye handleclick wala function app sambhal leana  */}
    <button onClick={handleClick}>
      Click Me
    </button>
   </div>
  )
}
// baki knowledge documentation padh ke karo
export default App
