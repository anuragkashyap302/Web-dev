import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// create root pura ka pura ek dom create kar ke deta hai tumko
// ye reconcilliation algo pe kaam karta hai matlab phle dom ko chaged dom se compaere karo jo jo change hua hai srif usko change kar do

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
