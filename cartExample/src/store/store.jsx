import { createStore } from 'redux';

// Initial state
const initialState = {
  cart: [],
};

// Reducer function
function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
}

// Create store
const store = createStore(cartReducer);

export default store;
