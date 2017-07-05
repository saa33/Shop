import { ADD_TO_CART } from '../actions/index.js'

const itemInCart = (itemId, cart) => (
  cart.reduce( (last, current) => (
    last || current.id === itemId
  ), false)
);

export const cartApp = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (!itemInCart(action.id, state.cart_items)) {
        alert("Add " + String(action.id));
      }
      else {
        alert("Can't add " + String(action.id))
      }
      return Object.assign( {}, state, {
        cart_items : [
          ...state.cart_items,
          ...state.items.filter((item) => (
            item.id === action.id &&
            !itemInCart(action.id, state.cart_items)
          ))
        ]
      });
    default:
      return state;
  }
}