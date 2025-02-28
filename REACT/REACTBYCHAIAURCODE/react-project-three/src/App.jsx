import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'


function App() {
  let myobj = {
    username : "anu@0987",
    age:21
  }
  return (
    <>
    <h1 className="text-3xl font-bold text-red-200 bg-green-400 p-4 rounded-xl">
        TO KAISE HAI APP LOG
      </h1>
   
{/* ab baaar baar ek hi card ko bane se accha hai ek card componnet bna lo aur fucntion ke tarah usme argument pass karke
jo chiz change karna hai url ,nme , para khali wahi change kar do  card componet ko import kar lo src file se  and yaha call kar lo*/}
 <Card  someobj = {myobj}> 
  {/* ye chiz props me recive hoag you can send object ,anything you want */}
  {/* ho gya kam ab jitna card chiye lete jo ab kuch change karna chate ho to card me pass karke jaha card component hai waha recive kar lo usko blolta hai props*/}
 </Card>
      <Card someobj={{ username: "user123", age: 25 }} />
      <Card someobj={{ username: "guestUser", age: 30 }} />
      <Card /> {/* This will use default values */}
    </>
    
  );
}

export default App;

