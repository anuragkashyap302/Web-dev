import React from 'react'

const Navigation = () => {
  return (
    <nav className='container'>
        <div className='logo'>
            <img src="vite.svg" alt="logo" />
        </div>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navigation
