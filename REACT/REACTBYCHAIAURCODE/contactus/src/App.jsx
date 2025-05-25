import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/Navigation'
import ContactHeader from './components/ContactHeader'
import ContactForm from './components/ContactForm'

function App() {
  

  return (
    <>
      <Navigation />
      <ContactHeader />
      <ContactForm />
    </>
  )
}

export default App
