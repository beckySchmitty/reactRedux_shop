import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartHelpers from "./CartHelpers";

function Cart() {
  const {cart, products} = useSelector(state => state);


  const renderTable = () => {
    const itemRows = Object.keys(cart).map(id => (
      <tr key={id}>
        <td>
          <Link to={`/products/${id}`}>{products[id].name}</Link>
        </td>
        <td>${products[id].price}</td>
        <td>{cart[id]}</td>
        <td>
          <CartHelpers id={id} />
        </td>
      </tr>
    ));

    return (
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Item Price</th>
            <th>Item Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{itemRows}</tbody>
      </table>
    );
  };

  return cart.length === 0 ? (
    <h2>No items in cart yet!</h2>
  ) : (
    <div>
      {renderTable()}
      <p>
        Total: $
      </p>
    </div>
  );
}

export default Cart;
