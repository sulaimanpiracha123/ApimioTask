import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { successToast } from '../helper/Toaster';

const AddTask = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState('');
  const addTask = () => {
    if (inputValue.trim() !== '') {
      onAddTask(inputValue.trim());
      setInputValue('');
      successToast("Congrats Task Added!")

    }
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value)

  }
  return (
    <div className='p-5 mt-5'>
      <InputGroup className=" mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Add Task
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={handleInputChange}
          value={inputValue}
        />
      </InputGroup>
      {/* <Button text="Add Task" onClick={AddTask} type='submit'/> */}
      <Button className='margin-left-5' variant="success" onClick={addTask}>AddTask</Button>{' '}
    </div>
  )
}

export default AddTask