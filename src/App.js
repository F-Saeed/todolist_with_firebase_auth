// components
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

// React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Hooks
import { useAuthContext } from './hooks/useAuthContext';
import { Navigate } from 'react-router-dom';

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className='App'>
      {authIsReady && (
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route
              exact
              path='/'
              element={user ? <Home /> : <Navigate to='/login' />}
            />
            <Route
              path='/signup'
              element={!user ? <Signup /> : <Navigate to='/' />}
            />
            <Route
              path='/login'
              element={!user ? <Login /> : <Navigate to='/' />}
            />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
