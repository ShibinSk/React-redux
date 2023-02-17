import { ActionType } from "../contnts/action-type";

export const setProducts = (products) => {
  return {
    type: ActionType.SETF_PRODUCTS,
    payload: products,
  };
};

export const selectProducts = (products) => {
    return {
      type: ActionType.SELECT_PRODUCTS,
      payload: products,
    };
  };
  