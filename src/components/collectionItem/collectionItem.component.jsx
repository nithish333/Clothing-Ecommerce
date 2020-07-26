import React from "react";
import { connect } from "react-redux";
import "./collectionItem.styles.scss";
import { addItem } from "../../redux/Cart/Cart.action";
import CustomButton from "../CustomButton/CustomButton";

const collectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  const style = {
    backgroundImage: `url(${imageUrl})`,
  };
  return (
    <div className="collectionItem">
      <div className="image" style={style} />
      <div className="collectionFooter">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(collectionItem);
