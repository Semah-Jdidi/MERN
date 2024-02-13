import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

const ProductDetail = props => {
  const [product, setProduct] = useState({});
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}`)
      .then(res => {console.log(res.data);setProduct(res.data)})
      .catch(err => console.log(err))
  },[])

  const productDelete = () => {
    axios.delete(`http://localhost:8000/api/delete/${id}`)
      .then(res => {
        console.log(res.data);
        navigate('/products');
      })
      .catch(err => console.log(err))
  }


  return (
    <div>
      <h3>{product.title}</h3>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <Link className="EditButton" to={`/edit/${product._id}`}>Edit</Link>
      <a onClick={productDelete} className="DeleteButton">Delete</a>
    </div>
  )
}

export default ProductDetail