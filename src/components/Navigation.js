// Hooks
import useLogOut from '../hooks/useLogOut';
import { useAuthContext } from '../hooks/useAuthContext';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navigation = () => {
  const { logOut } = useLogOut();
  const { user } = useAuthContext();

  return (
    <Navbar bg='dark' variant='dark'>
      <Container style={{ maxWidth: '1000px' }}>
        <Navbar.Brand>Todo List</Navbar.Brand>
        {user && (
          <Nav>
            <Nav.Link
              onClick={logOut}
              bg='secondary'
              className='justify-content-end'
            >
              Logout
            </Nav.Link>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};

export default Navigation;
