import './App.css';
import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import React from 'react';

function App() {

  const UserPath = props => {
    const {path, text, background} = useParams()

    return (
      <div>
        {
          isNaN(path)? 
            <h1 style={ text? {color: text, backgroundColor: background} : null}>The Word is : {path}</h1>
          : 
            <h1 style={ text? {color: text, backgroundColor: background} : null}>The Number is : {path}</h1>
        }
      </div>
    )
  }

  const Home = props => {
  
    return (
      <h1>Welcome</h1>
    )
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/:path" element={<UserPath />} />
          <Route path="/:path/:text/:background" element={<UserPath />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
