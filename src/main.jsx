import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  //Check for potential problems in app
  <StrictMode>  
    <App />     
    {/* //Main content of our application from App.jsx */}
  </StrictMode>,
)
