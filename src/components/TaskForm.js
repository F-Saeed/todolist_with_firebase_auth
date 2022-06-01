import { useState } from 'react';

export default function TaskForm() {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(newTask);

    setNewTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Add a new task title:</span>
        <input
          required
          type='text'
          onChange={(event) => setNewTask(event.target.value)}
          value={newTask}
        />
      </label>
      <button>Add</button>
    </form>
  );
}
