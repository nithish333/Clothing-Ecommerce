import React from "react";
import "./checkoutItem.scss";

const CheckoutItem = ({ cartItem: { name, price, imageUrl, quantity } }) => (
  <div className="checkoutItem">
    <div className="imageContainer">
      <img alt="item" src={imageUrl} />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <div className="removeButton">&#10005;</div>
  </div>
);
export default CheckoutItem;
