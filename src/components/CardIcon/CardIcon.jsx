import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./CardIcon.scss";
import { connect } from "react-redux";
import toggleCartHidden from "../../redux/Cart/Cart.action";

const CardIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cartIcon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shoppingIcon" />
      <span className="itemCount">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(null, mapDispatchToProps)(CardIcon);
