// Components
import TaskCard from './TaskCard';

// Firebase
import { db } from '../firebase/config';
import { doc, deleteDoc } from 'firebase/firestore';

// Bootstrap
import Container from 'react-bootstrap/Container';

const handleClick = async (id) => {
  await deleteDoc(doc(db, 'tasks', id));
};

const TaskList = ({ tasks }) => {
  return (
    <Container className='d-grid gap-4' style={{ maxWidth: '600px' }}>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          title={task.title}
          text={task.text}
          handleClick={handleClick}
        />
      ))}
    </Container>
  );
};

export default TaskList;
