import { useState } from 'react'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    // ab khali ke jagah usercontxt ke andar me return kar comppnent
    <UserContextProvider>
     <h1>Contest API</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
