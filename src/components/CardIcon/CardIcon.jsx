import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./CardIcon.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/Cart/Cart.action";

const CardIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cartIcon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shoppingIcon" />
      <span className="itemCount">{itemCount}</span>
    </div>
  );
};

const mapStateTOProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce(
    (accumulator, cartItem) => accumulator + cartItem.quantity,
    0
  ),
});
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(mapStateTOProps, mapDispatchToProps)(CardIcon);
