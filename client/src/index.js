import React from 'react';
import { render } from 'react-dom';
import '../node_modules/semantic-ui-css/semantic.min.css';
import './index.css';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';

render((
  <Router>
    <App />
  </Router>
  ), document.getElementById('root'));
