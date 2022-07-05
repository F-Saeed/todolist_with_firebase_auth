// Components
import EditForm from './EditForm';

// Firebase
import { db } from '../firebase/config';
import { doc, updateDoc } from 'firebase/firestore';

// Bootstrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import ToggleButton from 'react-bootstrap/ToggleButton';

const TaskCard = ({ id, title, text, status, handleDelete }) => {
  const changeStatus = async () => {
    await updateDoc(doc(db, 'tasks', id), { status: !status });
  };

  return (
    <Card id={id} className='text-center'>
      <Card.Header>
        <h3 className='text-success mb-2'>{title}</h3>
        <ToggleButton
          className='shadow-none mb-1'
          id='toggle-check'
          type='checkbox'
          variant={status ? 'success' : 'outline-success'}
          checked={status}
          value='1'
          onClick={changeStatus}
          style={{ width: '130px' }}
        >
          {status ? (
            <i className='bi bi-check-circle-fill '></i>
          ) : (
            <i className='bi bi-x-circle'></i>
          )}{' '}
          {status ? 'Complete' : 'Incomplete'}
        </ToggleButton>
      </Card.Header>

      <Card.Body>
        <Card.Text>{text}</Card.Text>
        <Stack gap={2} className='col-md-5 mx-auto'>
          <EditForm id={id} />
          <Button
            className='shadow-none'
            variant='outline-danger'
            onClick={(event) =>
              handleDelete(
                event.target.parentElement.parentElement.parentElement.id
              )
            }
          >
            <i className='bi bi-trash-fill'></i> Delete
          </Button>
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default TaskCard;
