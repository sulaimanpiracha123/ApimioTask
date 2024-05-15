import React from 'react'
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDeleteTask, onToggleCompletion, onEditTask }) => {
  return (
    <div>
   {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={() => onDeleteTask(task.id)}
          onToggleCompletion={() => onToggleCompletion(task.id)}
          onEdit={(newDescription) => onEditTask(task.id, newDescription)}
        />
      ))}
    </div>
 
  

  )
}

export default TaskList