import { useState } from 'react'
import './App.css'
import LogoutBtn from './components/LogoutBtn'
import LoginBtn from './components/LoginBtn'

function App() {
    const [isLoggedIn , setLoggedIn] = useState(true);
    //conditional rendring means kon sa component kab dikhna hai uske liye 4 tarike hai if-esle , ternary, logical ,aur early exit eg dekh le niche
  if(!isLoggedIn){
    // agar login nahi hai to login ka btn dikho bahi
    return(
      <LoginBtn/>
    )
  }


    return (
      <div>
        <h1>Welcome to react world</h1>
        <div>
          {/* agar isloggedin hai to logout ka button dikha do */}
          {isLoggedIn && <LogoutBtn/>}
        </div>
      </div>
    )

    return (
      <div>
        {isLoggedIn ? <LogoutBtn/> : <LoginBtn/>}
      </div>
    )

    if(isLoggedIn){
      return (
        <LogoutBtn/>
      )
    }
    else{
      return(
        <LoginBtn/>
      )
    }
}

export default App
