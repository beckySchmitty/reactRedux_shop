import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import CartHelpers from "./CartHelpers";


const ProductList = () => {
    const products = useSelector(state => state.products);

    const productCards = Object.keys(products).map(id => (
        <div className="col-md-3 mb-3" key={id}>
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">
                <Link to={`/products/${id}`}>{products[id].name}</Link>
              </h2>
              <CartHelpers id={id} />
            </div>
          </div>
        </div>
      ));
      return (
        <div>
          <h4>Look at all of our beautiful products!</h4>
          <div className="row">{productCards}</div>
        </div>
      );
}

export default ProductList;