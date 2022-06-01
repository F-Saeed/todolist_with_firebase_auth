import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navigation = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container style={{ maxWidth: '1000px' }}>
        <Navbar.Brand>Todo List</Navbar.Brand>
        <Nav>
          <Nav.Link bg='secondary' className='justify-content-end'>
            Logout
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
