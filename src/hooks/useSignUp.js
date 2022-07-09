// React
import { useState } from 'react';

// Hooks
import { useAuthContext } from './useAuthContext';

// React Router
import { useNavigate } from 'react-router-dom';

// Firebase
import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const useSignUp = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const navigate = useNavigate();

  const signUp = (email, password) => {
    setError(null);
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        dispatch({ type: 'LOGIN', payload: response.user });
        navigate('/');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return { error, signUp };
};

export default useSignUp;
