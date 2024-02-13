import './App.css';
import MainView from './views/MainView';
import ProductDetail from './components/ProductDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UpdateProduct from './components/UpdateProduct';

function App() {

  return (
    <div className="App">
      <h1>Product Manager</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/products' element={<MainView />} />
          <Route path='/products/:id' element={<ProductDetail />} />
          <Route path='/edit/:id' element={<UpdateProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
