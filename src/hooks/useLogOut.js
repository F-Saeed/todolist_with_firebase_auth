// React Router
import { useNavigate } from 'react-router-dom';

// Hooks
import { useAuthContext } from './useAuthContext';

// Firebase
import { auth } from '../firebase/config';
import { signOut } from 'firebase/auth';

const useLogOut = () => {
  const { dispatch } = useAuthContext();

  const navigate = useNavigate();

  const logOut = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: 'LOGOUT' });
        navigate('/login');
      })
      .catch((error) => console.log(error.message));
  };

  return { logOut };
};

export default useLogOut;
