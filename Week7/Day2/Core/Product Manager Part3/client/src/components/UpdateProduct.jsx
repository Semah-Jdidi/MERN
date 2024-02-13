import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const UpdateProduct = props => {
  const [product, setProduct] = useState({
    title: '',
    price: 0,
    description: ''
  })

  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err))
  }, [])

  const changeHandler = e => {
    setProduct({...product, [e.target.name]: e.target.value});
  };

  const submitHandler = e => {
    e.preventDefault();
    axios.patch(`http://localhost:8000/api/edit/${id}`, product)
      .then(res => {
        console.log(res);
        navigate('/products')
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

export default UpdateProduct;