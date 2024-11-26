import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GarageProvider from './pages/GarageContext.jsx'

createRoot(document.getElementById('root')).render(
  <GarageProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </GarageProvider>,
)
