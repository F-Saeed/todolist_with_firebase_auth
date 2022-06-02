// Components
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

// Hooks
import useCollection from '../hooks/useCollection';
import { useAuthContext } from '../hooks/useAuthContext';

const Home = () => {
  const { user } = useAuthContext();

  const { documents: tasks } = useCollection('tasks', ['uid', '==', user.uid]);

  return (
    <div className='App'>
      <TaskForm />
      {tasks && <TaskList tasks={tasks} />}
    </div>
  );
};

export default Home;
