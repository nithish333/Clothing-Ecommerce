import React from "react";
import "./CartDropdown.scss";
import CustomButton from "../CustomButton/CustomButton";
import CartItems from "../CartItems/CartItems";
import { connect } from "react-redux";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="CartDropdown">
      <div className="CartItems">
        {cartItems.map((cartItem) => (
          <CartItems key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>Go to checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});
export default connect(mapStateToProps)(CartDropdown);
