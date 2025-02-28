import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {ChaiApp} from './chai'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* hum single element hi return kar sakete hai thet whay ek khaile elemetn lelo fragment boltae hai log usko and usko return kar do saab kuch uske andar bhar ke  kuch rule hai wo padh lo component 
    jo bhi banoge uska naming capital word se shuru */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ChaiApp> chai wala element waha se import hoke yaha pahcuch gaya</ChaiApp>
    </>
  )
}

export default App
