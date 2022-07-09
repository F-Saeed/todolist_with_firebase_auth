// React
import React from 'react';
import { createRoot } from 'react-dom/client';

// Redux
import { Provider } from 'react-redux';
import store from './app/store';

// Components
import App from './App';

// Firebase
import { AuthContextProvider } from './context/AuthContext';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthContextProvider>
  </React.StrictMode>
);
