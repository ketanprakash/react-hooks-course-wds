import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootContainer = document.getElementById('root');
const root = ReactDOM.createRoot(rootContainer);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);