import React from 'react';
import { useState} from 'react';
import axios from 'axios';

const ProductForm = props => {
  const [product, setProduct] = useState({
    title: '',
    price: 0,
    description: ''
  });

  const {allProducts, setAllProducts} = props;

  const changeHandler = e => {
    setProduct({...product, [e.target.name]: e.target.value});
  };

  const submitHandler = e => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/products', product)
      .then(res => {
        console.log(res);
        setAllProducts([...allProducts, res.data]);
        setProduct({
          title: '',
          price: 0,
          description: ''
        });
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <form className='FormStyle' onSubmit={submitHandler}>
        <label>Title: <input className='FormInput' type="text" name='title' value={product.title} onChange={changeHandler} /></label>
        <label>Price: <input className='FormInput' type="number" name='price' value={product.price} onChange={changeHandler} /></label>
        <label>Description: <input className='FormInput' type="text" name='description' value={product.description} onChange={changeHandler} /></label>
        <button className='FormButton'>Submit</button>
      </form>
    </div>
  );
};
export default ProductForm;