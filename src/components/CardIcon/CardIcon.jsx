import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./CardIcon.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/Cart/Cart.action";
import { selectCartItemsCount } from "../../redux/Cart/Cart.selector";

const CardIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cartIcon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shoppingIcon" />
      <span className="itemCount">{itemCount}</span>
    </div>
  );
};

const mapStateTOProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(mapStateTOProps, mapDispatchToProps)(CardIcon);
