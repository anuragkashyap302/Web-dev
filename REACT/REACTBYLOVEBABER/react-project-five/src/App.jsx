import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

//app component yaha parent component ban gaya and card jo hai children ban gaya
//agar hum chate hai ke child to parent data tranfer ho sab kuch parent pass de dete hai
//create state
// manage state
// change state
// sabhi child me state ko sync karwadunga yahi se jisse sabhi child ek durse ka data share kar sake
// YE CETNTER LEVEL PAR  satee CREATE KIYE HAI SAB KE SATH SAHRE KAR SAKTE HAI
const [name , setName ] = useState('');
  return (
    <div>
      {/* har chid ke pass state varible bhi hai and state fuction ka bhi acesss hai to jo chiz child me change karnge wo parnt me bhi reflect hoga 
       yani yaha ek input button liye hai card.jsx me waha jo likhne wo yaha bhi aayga kr ke dekh lo  agar sbling yani multiple card create kiye to bhi share kar sakte hai*/}
     <Card title="Card1" name ={name} setName={setName} />
     <Card  title="Card2" name ={name} setName={setName} />
     <p>I AM INSIDE PARNET COMPONENT AND VALUE OF NAME IS: {name}</p>
    </div>
  )
}

export default App
