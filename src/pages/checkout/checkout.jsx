import React from "react";
import "./checkout.scss";
import { connect } from "react-redux";
import CheckoutItem from "../../components/checkoutItem/CheckoutItem";
import {
  selectCartItemsCount,
  selectCartItems,
} from "../../redux/Cart/Cart.selector";
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
  </div>
);
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  total: selectCartItemsCount(state),
});
export default connect(mapStateToProps)(checkoutPage);
