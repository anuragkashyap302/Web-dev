import React from 'react'
//import { UserContext } from '../App'
import { useContext } from 'react'
import { ThemeContext } from '../App'
const ChildC = () => {
   // const user = useContext(UserContext);
    //consume kar liye data
 const {theme, setTheme} = useContext(ThemeContext);
 function handleClick(){
  if(theme== 'Light'){
    setTheme('dark');
  }
  else{
    setTheme('Light');
  }
 }
  return (
    <div>
    <button onClick={handleClick}>Change Theme</button>
    </div>
  )
}


export default ChildC
