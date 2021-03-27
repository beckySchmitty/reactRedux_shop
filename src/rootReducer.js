import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";
import data from "./data.json";

const DEFAULT_STATE = {
  products: data.products,
  cart: {}
};

function rootReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const cartCopy = { ...state.cartItems };
      cartCopy[action.id] = (cartCopy[action.id] || 0) + 1;
      return {
        ...state,
        cart: cartCopy
      };
    }
    case REMOVE_FROM_CART: {
      const cartCopy = { ...state.cart };
      if (!cartCopy[action.id]) return state;
      cartCopy[action.id]--;
      if (cartCopy[action.id] === 0) {
        delete cartCopy[action.id];
      }
      return {
        ...state,
        cart: cartCopy
      };
    }
    default:
      return state;
  }
}

export default rootReducer;
