import React from "react";
import "./CartItems.scss";

const CartItems = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cartItem">
    <img src={imageUrl} alt="item" />
    <div className="itemDetails">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} X {price}
      </span>
    </div>
  </div>
);

export default CartItems;
