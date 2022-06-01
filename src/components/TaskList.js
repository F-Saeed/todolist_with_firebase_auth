const taskList = ({ tasks }) => {
  const handleClick = async (id) => {
    console.log(id);
  };

  return (
    <div className='task-list'>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} onClick={() => handleClick(task.id)}>
            {task.title}
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default taskList;
