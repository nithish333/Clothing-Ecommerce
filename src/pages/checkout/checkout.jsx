import React from "react";
import "./checkout.scss";
import { connect } from "react-redux";
import CheckoutItem from "../../components/checkoutItem/CheckoutItem";
import {
  selectCartItemsCount,
  selectCartItems,
} from "../../redux/Cart/Cart.selector";
import StripeCheckoutButton from "../../components/StripeButton/StripeButton";
// import { clearItemFromCart } from "../../redux/Cart/Cart.action";

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
    <div className="warnText">
      <p style={{ color: "red", fontSize: "20px", textAlign: "center" }}>
        Use below sample card details : <br /> <br /> 4242 4242 4242 4242 - Exp
        : 01/20 - CVV : 123
      </p>
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  total: selectCartItemsCount(state),
});
export default connect(mapStateToProps)(checkoutPage);
