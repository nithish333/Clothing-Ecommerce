import CartActionType from "./CartActionTypes";

export const toggleCartHidden = () => ({
  type: CartActionType.TOGGLE_CART_COMPONENT,
});

export const addItem = (item) => {
  return {
    type: CartActionType.ADD_ITEM,
    payload: item,
  };
};
