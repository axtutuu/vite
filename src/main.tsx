import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CookieView from './views/cookie'
import NFCView from './views/nfc'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="/cookie" element={<CookieView />} />
      <Route path="/nfc" element={<NFCView />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
