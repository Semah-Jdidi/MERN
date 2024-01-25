import React, { useState } from 'react'
import Display from './Display';

export const TodoForm = (props) => {
  const {createList} = props;
  const [task, setTask] = useState("");

  const createTask = e =>{
    e.preventDefault();
    createList({name:task, checked: false});
    setTask("");
  };

  return (
    <div className='Container'>
      <form className='TodoForm' onSubmit={createTask}>
        <input className='TodoInput' type="text" value={task} onChange={(e) => {setTask(e.target.value)}}/>
        <button className='TodoButton' type='submit'>Add</button>
      </form>
    </div>
  )
}

export default TodoForm;