import { useMemo, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [input , setInput] = useState(0);
  // we are studing usememo hook which is use to help in meomrization of privious task when we need same thing in futre it wil provide so we did not reclautte these thing
  // like recusion
   function expensiveTask(num){
    // ye function slow kar dega ui ko kyki har re render pe call hoga and 1 corere baar chlega lopp 
    // jabki loop ka to koi kam hi nahi hai isliye we use memohook ki jo chez phle se hai usko wo return kar dega reender me jayga hi nahi
    console.log("Inside Expensive Task")
    for(let i= 0 ; i<=100000000; i++){}
          return num*2;
   }
  //let doubleValue = expensiveTask(input);
// use memo ka use kar rahe is chhez se bachne ke liye

let doubleValue = useMemo(()=> expensiveTask(input), [input]);
// aab jo input ek tum dale uska ans store kar lega and jab dubara wahi input daloge dubara function chalne ki need nahi hai  
// but for only last input ye baat dhayn me rahe


  return (
    <div>
      <button onClick={()=> setCount(count+1)}>Increment</button>
   
    <div className='count'>
      Count:{count}
      </div>
      <div>
        <input type="number"  placeholder='enter the number' value={input}
         onChange={(e)=>setInput(e.target.value)}/>
      </div>
      <div className='count'>
      Double:{doubleValue}
      </div>

    </div>
  )
}

export default App
