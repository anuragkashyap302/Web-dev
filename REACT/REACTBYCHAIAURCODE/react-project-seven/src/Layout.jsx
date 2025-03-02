import React from 'react'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom'
// oultet ek property provide kartea hai jisekke bich me lagagoe wo chiz chage kaar sakte hao
// hmko khali home change karna hai no nav and footer

function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
