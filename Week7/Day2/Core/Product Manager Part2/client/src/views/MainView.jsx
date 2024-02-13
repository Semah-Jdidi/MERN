import React, {useState} from 'react'
import DisplayProducts from '../components/DisplayProducts'
import ProductForm from '../components/ProductForm'

const MainView = () => {
  const [allProducts, setAllProducts] = useState([]);

  return (
    <div>
        <ProductForm allProducts={allProducts} setAllProducts={setAllProducts} />
        <DisplayProducts allProducts={allProducts} setAllProducts={setAllProducts}/>
    </div>
  )
}

export default MainView