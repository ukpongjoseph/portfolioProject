import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer, toast } from "react-toastify";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer position='top-center' autoClose={2000} toastStyle={{backgroundColor : "rgba(211, 233, 122, 1)"}}/>
    <App />
  </StrictMode>,
)
