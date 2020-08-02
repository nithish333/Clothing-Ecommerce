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

export const clearItemFromCart = (item) => {
  return {
    type: CartActionType.CLEAR_ITEM_FROM_CART,
    payload: item,
  };
};

export const removeItem = (item) => {
  return {
    type: CartActionType.REMOVE_ITEMS,
    payload: item,
  };
};
