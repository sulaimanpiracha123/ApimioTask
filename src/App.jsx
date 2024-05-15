import { useEffect, useState } from 'react';
import AddTask from './pages/AddTask'
import TaskList from './pages/TaskList';
import { errorToast } from './helper/Toaster';

function App() {
  const [data, setData] = useState([]);
  // Fetch tasks from local storage on component mount
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('ToDoApp'));
    if (savedData) {
      setData(savedData)
    }
  }, [])
  // Save tasks to local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem('ToDoApp', JSON.stringify(data))
  }, [data])
  const addTask = (description) => {
    const newData = {
      id: Date.now(),
      description: description,
      completed: false,
    };
    setData([...data, newData]);
  };

  const deleteTask = (id) => {
    setData(data.filter(data => data.id !== id));
    errorToast("Task Deleted!")
  };

  const toggleCompletion = (id) => {
    setData(data.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  const editTask = (id, newDescription) => {
    setData(data.map(task => {
      if (task.id === id) {
        return { ...task, description: newDescription };
      }
      return task;
    }));
  };
  return (
    <div className='bg-light vh-100'>
      <h4 className='text-center mt-4'>TASK APP</h4>
        <AddTask onAddTask={addTask} />
        <TaskList
          tasks={data}
          onDeleteTask={deleteTask}
          onToggleCompletion={toggleCompletion}
          onEditTask={editTask}

        />
    </div>

  )
}

export default App
