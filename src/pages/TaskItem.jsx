import React, { useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { successToast } from '../helper/Toaster';

const TaskItem = ({ task, onDelete, onToggleCompletion, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const styles = { textDecorationLine: task.completed ? "line-through" : "none" };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(editedDescription);
    successToast("Task Edit SuccessFully!")
    setIsEditing(false);
  };
  return (
    <div className='d-flex justify-content-around'>
      <ListGroup as="ol" >
        <ListGroup.Item as="li">
          {isEditing ? (
            <input
              type="text"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              onBlur={handleSave}
              autoFocus
            />
          ) : (
            <>
              <span style={styles} onClick={onToggleCompletion}>
                {task.description}
              </span>
              
              <Button variant='outline-primary' onClick={handleEdit} size="sm">Edit</Button>
              <Button variant="outline-danger" onClick={onDelete} size="sm">Delete</Button>{' '}

            </>
          )}
        </ListGroup.Item>
      </ListGroup>


    </div>
  )
}

export default TaskItem