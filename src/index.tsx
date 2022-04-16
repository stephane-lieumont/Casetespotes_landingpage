import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import Footer from './layout/Footer';
import Header from './layout/Header';

import Homepage from './pages/Homepage';
import About from './pages/About';

import './sass/main.scss'

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!);

root.render(
  <Router basename={process.env.PUBLIC_URL}>
    <Header/>
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} ></Route> 
        <Route path="/a-propos" element={<About />} ></Route> 
      </Routes>
    </main>
    <Footer/>
  </Router>
)