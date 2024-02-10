import React from 'react';
import { useState} from 'react';
import axios from 'axios';

const ProductForm = props => {
  const [product, setProduct] = useState({
    title: '',
    price: 0,
    description: ''
  });

  const changeHandler = e => {
    setProduct({...product, [e.target.name]: e.target.value});
  }

  const submitHandler = e => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/products', product)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <form className='FormStyle' onSubmit={submitHandler}>
        <label>Title: <input className='FormInput' type="text" name='title' onChange={changeHandler} /></label>
        <label>Price: <input className='FormInput' type="number" name='price' onChange={changeHandler} /></label>
        <label>Description: <input className='FormInput' type="text" name='description' onChange={changeHandler} /></label>
        <button className='FormButton'>Submit</button>
      </form>
    </div>
  );
};
export default ProductForm;