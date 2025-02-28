import { useState } from 'react'

import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './features/counter/counterSlice';

function App() {
// phela kaam hai reduxtoolkit ka doucmentation padhna tabhi kuch samhaj aayaga 
const count = useSelector((state)=>state.counter.value);
const [amount , setAmount] = useState(0);
const dispatch = useDispatch(); // usedispatch ka use kre action ko diapch karo
function handleIncrementClick(){
  dispatch(increment()) // is dispatch me incremetn wale ko handle ker lo

}
function handleDecrementClick(){
    dispatch(decrement())
}
function handleAmountClick(){
  dispatch(incrementByAmount(amount));
}

  return (
    
      <div className='container'>
        <button onClick={handleIncrementClick} className='button1'>+</button>
        <p className='count'>Count:{count}</p>
        <button onClick={handleDecrementClick} className='button2'>-</button>
        <input className='input' type="Number"  value={amount} placeholder="Enter amount" onChange={(e)=>setAmount(e.target.value)}/>
        <button onClick={handleAmountClick} className='button3'>Inc By Amount</button>
      </div>
  )
}

export default App
