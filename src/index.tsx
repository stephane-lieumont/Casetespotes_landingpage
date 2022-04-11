import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import Footer from './Layout/Footer';
import Header from './Layout/Header';

import HomePage from './pages/HomePage';

import './sass/main.scss'

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!);

root.render(
  <Router basename={process.env.PUBLIC_URL}>
    <Header/>
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} ></Route> 
      </Routes>
    </main>
    <Footer/>
  </Router>
)