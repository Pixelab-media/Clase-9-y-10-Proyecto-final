import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'

import { BrowserRouter } from 'react-router-dom'
import DogProvider from './context/DogContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DogProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </DogProvider>
  </React.StrictMode>,
)
