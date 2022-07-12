// Components
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

// Hooks
import useCollection from '../hooks/useCollection';
import { useAuthContext } from '../hooks/useAuthContext';
import { CirclesWithBar } from 'react-loader-spinner';

const Home = () => {
  const { user } = useAuthContext();

  const { documents: tasks } = useCollection('tasks', ['uid', '==', user.uid]);

  return (
    <div className='App'>
      <TaskForm />
      {tasks ? (
        <TaskList tasks={tasks} />
      ) : (
        <div
          style={{ display: 'grid', placeItems: 'center', minHeight: '50vh' }}
        >
          <CirclesWithBar
            height='80'
            width='80'
            color='#0d6efd'
            ariaLabel='loading'
          />
        </div>
      )}
    </div>
  );
};

export default Home;
