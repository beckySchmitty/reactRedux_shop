import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import CartHelpers from "./CartHelpers"


const Product = () => {

    const { id } = useParams();
    const { name, price, description, image_url } = useSelector(state => ({
      ...state.products[id]
    }));

    return (
        <div>
          <img
            src={image_url}
            alt={name}
          />
          <div className="card-body">
            <div>
              <h5>{name}</h5>
              <p>${price}</p>
            </div>
            <p>{description}</p>
            <CartHelpers id={id} />
            <Link to="/" className="btn btn-block btn-link">
              Go back
            </Link>          
        </div>
        </div>
    )
}

export default Product;