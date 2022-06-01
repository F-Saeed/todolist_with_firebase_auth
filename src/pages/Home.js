import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import useCollection from '../hooks/useCollection';

const Home = () => {
  const { documents: tasks } = useCollection('tasks');

  return (
    <div className='App'>
      {tasks && <TaskList tasks={tasks} />}
      <TaskForm />
    </div>
  );
};

export default Home;
