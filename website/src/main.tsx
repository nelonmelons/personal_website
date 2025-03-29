import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import { StockML } from './projects/StockML'
import { Lockin } from './projects/Lockin'
import { Cognspective } from './projects/Cognspective'
import { MemoryMake } from './projects/MemoryMake'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects/stockml" element={<StockML />} />
        <Route path="/projects/lockin" element={<Lockin />} />
        <Route path="/projects/cognspective" element={<Cognspective />} />
        <Route path="/projects/memorymake" element={<MemoryMake />} />
      </Routes>
    </Router>
  </React.StrictMode>,
) 