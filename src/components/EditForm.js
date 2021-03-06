// React
import { useRef, useState } from 'react';

// Firebase
import { db } from '../firebase/config';
import { doc, updateDoc } from 'firebase/firestore';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const EditForm = ({ id }) => {
  const [show, setShow] = useState(false);

  const titleRef = useRef();
  const textRef = useRef();

  const handleShow = () => setShow(true);

  const handleClose = () => {
    setShow(false);
    titleRef.current.value = null;
    textRef.current.value = null;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const updatedFields = {
      title: titleRef.current.value,
      text: textRef.current.value,
    };

    setShow(false);

    await updateDoc(doc(db, 'tasks', id), updatedFields).then(() => {
      titleRef.current.value = null;
      textRef.current.value = null;
    });
  };

  return (
    <>
      <Button
        className='shadow-none'
        type='button'
        variant='secondary'
        onClick={handleShow}
      >
        Edit
      </Button>
      <Container className='text-center' style={{ maxWidth: '1000px' }}>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Edit Task Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form id='task-form' onSubmit={handleSubmit}>
              <Form.Group className='mb-3'>
                <Form.Label>Task Title</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter task title'
                  ref={titleRef}
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Task Details</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter task details'
                  ref={textRef}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className='shadow-none'
              form='task-form'
              type='submit'
              variant='secondary'
            >
              Add
            </Button>
            <Button
              className='shadow-none'
              variant='outline-secondary'
              onClick={handleClose}
            >
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

export default EditForm;
