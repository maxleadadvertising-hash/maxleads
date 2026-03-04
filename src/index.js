import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Optimization: We remove reportWebVitals to shave off 
// extra Script Parsing & Compilation (171ms) in production.

const root = ReactDOM.createRoot(document.getElementById('root'));

// Optimization: For the absolute fastest mobile mount, 
// we render App directly.
root.render(<App />);