// components
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

// React Router
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Hooks
import { useAuthContext } from './hooks/useAuthContext';
import { Redirect } from 'react-router-dom';

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className='App'>
      {authIsReady && (
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route exact path='/'>
              {user ? <Home /> : <Redirect to='/login' />}
            </Route>
            <Route path='/signup'>
              {!user ? <Signup /> : <Redirect to='/' />}
            </Route>
            <Route path='/login'>
              {!user ? <Login /> : <Redirect to='/' />}
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
