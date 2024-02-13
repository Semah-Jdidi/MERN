import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DisplayProducts = props => {
  const {allProducts, setAllProducts} = props;

  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
      .then(res => {
        console.log(res);
        setAllProducts(res.data);
      })
      .catch(err => console.log(err));
    }, []);

  const productDelete = (productId) => {
    axios.delete(`http://localhost:8000/api/delete/${productId}`)
      .then(res => {
        setAllProducts(allProducts.filter(product => product._id != productId));
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="ProductList">
      <div className="ProductListContainer">
        <h2>All Products : </h2>
        {
          allProducts.map((product, i) => (
            <div key={i} className="ProductName">
              <h3><Link to={`/products/${product._id}`}>{product.title}</Link></h3>
              <div>
                <Link className="EditButton" to={`/edit/${product._id}`}>Edit</Link>
                <a onClick={e => {productDelete(product._id)}} className="DeleteButton">Delete</a>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};
export default DisplayProducts;