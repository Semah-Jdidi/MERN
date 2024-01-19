import './App.css';
import { useState } from 'react';
import DisplayColor from './components/DisplayColor';
import ColorForm from './components/ColorForm';

function App() {
  const [boxColor, setBoxColor] = useState([]);

  const addBoxColor = (color) =>{
    setBoxColor([...boxColor, color]);
  };

  return (
    <div className="App">
      <ColorForm addBoxColor = {addBoxColor} />
      <DisplayColor boxColor = {boxColor} />
    </div>
  );
}

export default App;
