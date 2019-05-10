import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import '@babel/polyfill';
import App from './App';
// import DefaultErrorBoundary from './DefaultErrorBoundary'

// if (process.env.NODE_ENV === 'development') {
//   const axe = require('react-axe');
//   axe(React, ReactDOM, 1000);
// }

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('app'));
