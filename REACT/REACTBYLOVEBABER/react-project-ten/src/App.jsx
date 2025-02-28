import { useState } from 'react'

import './App.css'


  import{ createBrowserRouter,NavLink,RouterProvider} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Student from './components/Student';
import Courses from './components/Courses';
import Mocktest from './components/Mocktest';
import Reports from './components/Reports';
import NotFound from './components/NotFound';
  const router = createBrowserRouter(
    // is router ke ander array of all route jo bhi app create karna chah rahe ho
    [
          {path:"/", // jha jane chate hai waha ka path dedo
            element: // us element ko bhi add kar diye hai
            <div>
              <Home/>
              <Navbar/>
            </div>
        

          },

          {
            path:"/about",
            element:
            <div>
              <About/>
              <Navbar/>
            </div>
          },

           {
             path:"/dashboard" ,
             element:
             <div>
              <Dashboard/>
              <Navbar/>
            </div> ,
            //dashboard ke ander multiple route ho sakete hai waha usko nested routing ke dwara phaucha jaa sakta hai
            children:[
              //multiple children that'y we create aary ab in sab ko route karna hai to browser me dashboard/ respctive child search karo
              // you can create navlink for these child also
              {
                path:'courses',
                element:<Courses/>
              },

              {
                path:'mock-test',
                element:<Mocktest/>
              },

              {
               path:'reports',
                element:<Reports/>
              }
            ]
           },
           {
            // koi naya route aa gaya in sab se alag 
            path:"/student/:id",
            element:
             <div>
              <Student/>
              <Navbar/>
            </div>
           },
           //ek default path bana do agar kuch macth nahi hua route to erroer 404 not found 
           {
               path:'*',
               element:<NotFound/>
           }
    ]
  );
function App() {
  

  return (
    <div>
      {/* jo bhi route tumne create kiye hai wo provider ko batna bhi padega thabi wo application ko batayga ki bhai ye sabhi router hai chala deana  */}
     <RouterProvider router={router} />
     {/* ab jaise hi tum browerser pe jake / hit kargoe home page /about hit kargoe aboutpage aa jyega 
       but hame bar bar browser pe thori jana hai to button crate karo nav bar banke*/}
      
    </div>
  )
}

export default App
