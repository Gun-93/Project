import { StrictMode } from 'react'
import { BrowserRouter,createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
