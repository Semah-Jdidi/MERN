import './App.css';
import TodoForm from './components/TodoForm';
import Display from './components/Display';
import { useState } from 'react';

function App() {
  const [list, setList] = useState([]);

  const createList = newTask => {
    setList([...list, newTask]);
  }

  const handleChecked = index => {
    const tasks = [...list];
    tasks[index].checked = !tasks[index].checked;
    setList(tasks);
  }

  const handleDelete = taskDelete =>{
    const tasks = list.filter((task) => task !== taskDelete);
    setList(tasks);
  }

  return (
    <div>
      <TodoForm createList = {createList} />
      <Display list = {list} handleChecked = {handleChecked} handleDelete = {handleDelete} />
    </div>
  );
}

export default App;
