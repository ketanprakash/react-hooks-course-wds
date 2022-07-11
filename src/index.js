import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserProvider from './contexts/user/userProvider';

const rootContainer = document.getElementById('root');
const root = ReactDOM.createRoot(rootContainer);

root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);