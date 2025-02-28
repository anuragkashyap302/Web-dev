import React from 'react'
import Home from './Home'
import About from './About'
import Dashboard from './Dashboard'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    //hame all link per jaane ka nav bar careate karna hai tolist se kake waha ka path daal do
    <div>
      <ul>
        <li className='li1'>
            {/* homepaage laod kar dena agar ispe hit hua to lkin yaha anchor tag ka use nahi kar sakete kuki jis anchor tag pe 
            click kargoe usse pura page realod ho jayeaga wo nahi chiye  link tag ya navlink tag ka use
             but navlink use karne ka fydya ye hai usme easy hoti hojati usi andar thori bout jasie home page cllick karne wo color change jab tak hum home page me rahe
              tab tak*/}

              {/* isActive naam ka boolean flag in buit hota hai jispe click hoga uska iaactive true hoga to tum usko style kar sakte hao */}
            <NavLink to='/' className={({isActive})=> isActive?"active-link":""}>
            Home
            </NavLink>
        </li>
        <li className='li2'>
            <NavLink to='/about' className={({isActive})=> isActive?"active-link":""}>About</NavLink>
        </li>
        <li className='li3'>
            <NavLink to='/dashboard' className={({isActive})=> isActive?"active-link":""}>DashBoard</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
