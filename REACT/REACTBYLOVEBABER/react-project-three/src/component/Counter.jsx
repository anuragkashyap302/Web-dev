import React, { useState } from 'react'
import'./Counter.css'
const Counter = () => {
    const [count , setCount] = useState(0);
    //phele state varible hai dusra funtion jo chnge karga state usestate hume ye provide karta hai usme tum inital state dedo and phir set karte jap
  return (
    <div className='counter-container'>
      <p id='para'>You Have Clicked {count} Times</p>
      <button id='btn' onClick={()=> { setCount(count+1)}}>Click Me</button>
      {/* yahi to hai html ke andr javascript btn me ho ek function likhe onclick jo ki inbuilt hai aur setcout call karke increment karte gaye */}
    </div>
  )
}

export default Counter
