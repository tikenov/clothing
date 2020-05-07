import {
  TOOGLE_CART_HIDDEN,
  ADD_ITEM,
  REMOVE_ITEM,
  DECREASE_ITEM,
} from "./cart.types";
import { addItemToCart, decreaseItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  items: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOOGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case ADD_ITEM:
      return { ...state, items: addItemToCart(state.items, action.payload) };
    case DECREASE_ITEM:
      return {
        ...state,
        items: decreaseItemFromCart(state.items, action.payload),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default cartReducer;
