import CartActionType from "./CartActionTypes";

const INITIAL_STATE = {
  hidden: true,
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionType.TOGGLE_CART_COMPONENT:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default CartReducer;
