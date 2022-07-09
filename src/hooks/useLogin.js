// React
import { useState } from 'react';

// Hooks
import { useAuthContext } from './useAuthContext';

// React Router
import { useNavigate } from 'react-router-dom';

// Firebase
import { auth } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';

const useLogin = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const navigate = useNavigate();

  const login = (email, password) => {
    setError(null);
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        dispatch({ type: 'LOGIN', payload: response.user });
        navigate('/');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return { error, login };
};

export default useLogin;
