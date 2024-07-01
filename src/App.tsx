import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import About from './pages/About';
import Test from './pages/Test';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/Test" element={<Test />} />
    </Routes>
  </BrowserRouter>
);
export default App;
