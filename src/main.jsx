import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // Listado de componentes
  <React.StrictMode>
    {/* Componente principal */}
    <App />
  </React.StrictMode>,
)
