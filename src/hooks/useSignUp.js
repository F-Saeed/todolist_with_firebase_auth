// React
import { useState } from 'react';

// Hooks
import { useAuthContext } from './useAuthContext';

// React Router
import { useHistory } from 'react-router-dom';

// Firebase
import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const useSignUp = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const history = useHistory();

  const signUp = (email, password) => {
    setError(null);
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        dispatch({ type: 'LOGIN', payload: response.user });
        history.push('/');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return { error, signUp };
};

export default useSignUp;
