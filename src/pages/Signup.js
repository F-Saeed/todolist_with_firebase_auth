// React
import { useRef } from 'react';

// Hooks
import useSignUp from '../hooks/useSignUp';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Signup() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const { error, signUp } = useSignUp();

  const handleSubmit = (event) => {
    event.preventDefault();
    signUp(emailRef.current.value, passwordRef.current.value);
  };

  return (
    <Container
      className='d-flex flex-column align-items-center justify-content-center'
      style={{ minWidth: '100vw', minHeight: '70vh' }}
    >
      <h2 className='mb-5'>Sign Up</h2>

      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' ref={emailRef} />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            ref={passwordRef}
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
      {error && <p className='text-danger'>{error}</p>}
    </Container>
  );
}
