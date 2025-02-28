import { useState } from 'react';
import './App.css'
import Button from './components/Button'
import Card from './components/Card'

function App() {
  const [count , setCount] = useState(0);
  function handleClick() {
    setCount(count+1);
  }

  return (
    
      <div>
        <Button handleClick = {handleClick} text="click me">
          <h1>{count}</h1>
        </Button>
      {/* <Card name = "anurag kashyap">
        is card ke andar me jitne bhi element hai sab iske children hai
      <h1>Best WEB DEV LEARNER</h1>
      <p>Trying to be consitent in this</p>
      <p>Will complete the course soon</p>

      </Card >
   extra card bhi chelga uske ander is tarah se bhi chidren send kar sakte ho
      <Card children = "main ek children hu"></Card> */}
        
      </div>
  )
}

export default App
