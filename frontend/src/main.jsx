import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App'
import Cmd from './cmd'
import { TorBrowser } from './torBrowser'
import './index.css'
import { Page } from './page'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
   <React.StrictMode>
   <Router>
     <Routes>
       {/* Ruta principal */}
       <Route path="/" element={<TorBrowser />} />
      <Route path="/services/page" element={<Page />} />{" "}
       <Route path="/services/page/app" element={<App />} /> {/* Ruta para TorBrowser */}
       {/* Ruta para el componente Cmd */}
       <Route path="/cmd" element={<Cmd />} />
     </Routes>
   </Router>
 </React.StrictMode>,
)