// React
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from './App';

// Firebase
import { AuthContextProvider } from './context/AuthContext';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
