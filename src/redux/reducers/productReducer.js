import { ActionType } from "../contnts/action-type";

const initialState = {
  products: [
    {
      id: 1,
      title: "shbi",
      category: "tshrt",
    },
  ],
};

export const productsReducer= (state=initialState, { type, paylad }) => {
  switch (type) {
    case ActionType.SET_PRODUCTS:
      return state;

    default:
      return state;
  }
};
