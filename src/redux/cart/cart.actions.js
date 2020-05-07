import {
  TOOGLE_CART_HIDDEN,
  ADD_ITEM,
  REMOVE_ITEM,
  DECREASE_ITEM,
} from "./cart.types";

export const toggleCartHidden = () => ({
  type: TOOGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  payload: item,
});

export const decreaseItem = (item) => ({
  type: DECREASE_ITEM,
  payload: item,
});
