import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router } from 'react-router-dom';

import App from './app';

import './sass/main.scss'

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!);

root.render(
  <StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router>
  </StrictMode>
)
