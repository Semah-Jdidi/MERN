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

  return (
    <div className="ProductList">
      <div className="ProductListContainer">
        <h2>All Products : </h2>
        {
          allProducts.map((product, i) => (
            <h3 key={i}><Link to={`/products/${product._id}`}>{product.title}</Link></h3>
          ))
        }
      </div>
    </div>
  );
};
export default DisplayProducts;