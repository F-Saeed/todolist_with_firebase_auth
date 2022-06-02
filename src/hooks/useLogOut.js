// React Router
import { useHistory } from 'react-router-dom';

// Hooks
import { useAuthContext } from './useAuthContext';

// Firebase
import { auth } from '../firebase/config';
import { signOut } from 'firebase/auth';

const useLogOut = () => {
  const { dispatch } = useAuthContext();

  const history = useHistory();

  const logOut = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: 'LOGOUT' });
        history.push('/login');
      })
      .catch((error) => console.log(error.message));
  };

  return { logOut };
};

export default useLogOut;
