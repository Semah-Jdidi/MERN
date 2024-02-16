import './App.css';
import DisplayAuthors from './components/DisplayAuthors';
import AuthorForm from './components/AuthorForm';
import UpdateAuthor from './components/UpdateAuthor';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Favorite Auhtors</h1>
      <Routes>
        <Route path='/authors' element={<DisplayAuthors />} />
        <Route path='/authors/new' element={<AuthorForm/>} />
        <Route path='/authors/:id/edit' element={<UpdateAuthor />} />
      </Routes>
    </div>
  );
}

export default App;
