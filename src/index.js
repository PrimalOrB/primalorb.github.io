import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <App />
  </Router>,
  document.getElementById('root')
);
