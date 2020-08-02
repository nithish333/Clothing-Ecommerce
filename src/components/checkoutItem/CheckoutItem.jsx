import React from "react";
import "./checkoutItem.scss";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/Cart/Cart.action";

const CheckoutItem = ({ cartItem, clearItemInCart, addItem, removeItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;

  return (
    <div className="checkoutItem">
      <div className="imageContainer">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="removeButton" onClick={() => clearItemInCart(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearItemInCart: (item) => dispatch(clearItemFromCart(item)),
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
  };
};
export default connect(null, mapDispatchToProps)(CheckoutItem);
