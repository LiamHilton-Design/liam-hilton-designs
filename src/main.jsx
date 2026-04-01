import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/variables.css' // ← must be here
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
