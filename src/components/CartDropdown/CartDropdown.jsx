import React from "react";
import "./CartDropdown.scss";
import CustomButton from "../CustomButton/CustomButton";
import CartItems from "../CartItems/CartItems";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/Cart/Cart.action";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  // console.log(history);
  return (
    <div className="CartDropdown">
      <div className="CartItems">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItems key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="emptymsg">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        Go to checkout
      </CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
