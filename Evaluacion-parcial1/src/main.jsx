
import './index.css'
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Seccion1 from './pages/seccion1';
import Seccion2 from './pages/seccion2';
import Seccion3 from './pages/seccion3';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/seccion1" element={<Seccion1 />} />
        <Route path="/seccion2" element={<Seccion2 />} />
        <Route path="/seccion3" element={<Seccion3 />} />
      </Routes>
    </Router>
  </StrictMode>,
);