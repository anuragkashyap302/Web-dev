import { useState } from 'react'
import './App.css'
import { createContext } from 'react'
import ChildA from './components/ChildA';
 //step1-create context
// const UserContext = createContext();
 //step :warp all the child inside a provide which we want to make consumer or send data yaha agar child A ko warp karnge
 // to automatic sb warp ho jayega kuki herichey me hai sab to yaha koi bhi consumer ban sakta hai kbhi bji
 
 //step 3: pass value
 //step 4:  consumer ke andar jake consume kar lo

 const ThemeContext = createContext();
function App() {
  // const [user , setUser] = useState({name:"anurag"})

  //new thing theme chhanging create karte hai
  const [theme ,setTheme] = useState('Light');
  
  return (
  
   <ThemeContext.Provider value={{theme,setTheme}}>
    <div id ='container' style={{backgroundColor: theme==='Light'? "beige":"blue"}}>
    <ChildA/>
    </div>
   
   </ThemeContext.Provider>
  //  <>
  //  <UserContext.Provider value={user}>
  //  <ChildA/>
  //  </UserContext.Provider>
   
  //  </>
     
  )
}
// you use mutiple provider and multple componetbt in one context provider

export default App
//export  {UserContext}
export {ThemeContext}