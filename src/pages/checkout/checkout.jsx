import React from "react";
import "./checkout.scss";
import { connect } from "react-redux";
import CheckoutItem from "../../components/checkoutItem/CheckoutItem";

const checkoutPage = ({ cartItems, total }) => (
  <div className="checkoutPage">
    <div className="checkoutHeader">
      <div className="headerBlocks">
        <span>Product</span>
      </div>
      <div className="headerBlocks">
        <span>Description</span>
      </div>
      <div className="headerBlocks">
        <span>Quantity</span>
      </div>
      <div className="headerBlocks">
        <span>Price</span>
      </div>
      <div className="headerBlocks">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem cartItem={cartItem} key={cartItem.id} />
    ))}
    <div className="total">
      <span>Total : ${total}</span>
    </div>
  </div>
);
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
  total: cartItems.reduce(
    (accumulator, cartItem) => accumulator + cartItem.quantity * cartItem.price,
    0
  ),
});
export default connect(mapStateToProps)(checkoutPage);
