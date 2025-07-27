import React from 'react';
import Index from './pages/Index';
import Builder from './pages/Builder'; // ✅ make sure you have this!
import './index.css'// ✅ import your global styles

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/builder" element={<Builder />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
