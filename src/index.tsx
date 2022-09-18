import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './app'
import DemoBanner from './components/DemoBanner'
import './sass/main.scss'

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!);

root.render(
  <Router basename={process.env.PUBLIC_URL}>
    <DemoBanner />
    <App />
  </Router>
)
