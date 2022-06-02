import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const TaskCard = ({ id, title, text, handleClick }) => {
  return (
    <Card id={id} className='text-center'>
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Text>{text}</Card.Text>
        <Button
          variant='danger'
          onClick={(event) =>
            handleClick(event.target.parentElement.parentElement.id)
          }
        >
          <i className='bi bi-trash-fill'></i> Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default TaskCard;
