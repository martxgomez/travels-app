import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router} from 'react-router-dom' // cambiad el import de BrowserRouter HashRouter para que funcionen las rutas en netlify

const root = createRoot(document.getElementById('root'));
root.render( 
  <StrictMode>
    <Router> 
      <App />
    </Router>
  </StrictMode>,
)
