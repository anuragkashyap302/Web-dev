import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* app ko ek providerr ke ander warp kar diya hai kycki  hum chate hai ke store ka sara component app ke dwara bhi acess ho yani app ke sarre compennt ke dwara accescble ho  */}
    <Provider store = {store}>
    <App />
    </Provider>
  </StrictMode>,
)
