import React, { useReducer } from "react";
import { products } from "./data";

const Context = React.createContext();

const initialState = {
  products: products,
  cart: []
};

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADD_ITEM":
      const cartItemIndex = state.cart.findIndex(cartItem => cartItem.id === payload.id);
      const existInCart = cartItemIndex !== -1;

      if (!existInCart) {
        const newCart = state.cart.concat({ ...payload, qty: 1 });
        return { ...state, cart: newCart };
      } else {
        // check quanity
        if (state.cart[cartItemIndex].qty < 10) {
          const newState = { ...state };
          newState.cart[cartItemIndex].qty += 1;
          return newState;
        } else {
          return state;
        }
      }
    case "SET_QTY":
      const newState = { ...state };
      const index = state.cart.findIndex(cartItem => cartItem.id === payload.productId);
      newState.cart[index].qty = payload.value;
      return newState;
    case "DELETE_ITEM":
      const newCart = state.cart.filter(cartItem => cartItem.id !== payload.productId);
      return { ...state, cart: newCart };
    default:
      return state;
  }
}

export function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { ...state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Context;
