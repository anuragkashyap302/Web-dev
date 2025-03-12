import { useState , useEffect} from 'react'
import './App.css'
import { ThemeProvider } from './Contexts/Theme'
import ThemeBtn from './Components/ThemeBtn';
import Card from './Components/Card';

function App() {
  const [themeMode , setThemeMode] = useState("light");
  const lightTheme = ()=>{
    setThemeMode("light");
  }
   const darkTheme = ()=>{
    setThemeMode("dark");
   }
   // actual changd in theme
   useEffect(() => {
     document.querySelector('html').classList.remove("light" , "dark")
     document.querySelector('html').classList.add(themeMode)
   
    
   }, [themeMode])
   
  return (
     // tehmeprovider jo context banye ho uske andearr sabko rap ka do jisie us componetnt ke saare valye ka acess thumarhe pass hoga
    
     <ThemeProvider value={{themeMode , lightTheme , darkTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      {/* them btn */}
                      <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {/* card */}
                       <Card/>
                    </div>
                </div>
            </div>
     </ThemeProvider>
  )
}

export default App
