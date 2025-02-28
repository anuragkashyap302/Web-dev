import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {ChaiMain} from './chai.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ChaiMain>do baar render kar diye ek barr main me ek barr app me</ChaiMain>
  </StrictMode>,
)
