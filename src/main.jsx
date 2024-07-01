import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CharactersProvider } from './context/charactersContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CharactersProvider>
      <App />
    </CharactersProvider>
  </BrowserRouter>
)
