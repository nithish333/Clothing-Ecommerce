import React from "react";

import "./collectionItem.styles.scss";
import CustomButton from "../CustomButton/CustomButton";

const collectionItem = ({ name, price, imageUrl, id }) => {
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
      <CustomButton inverted>Add to cart</CustomButton>
    </div>
  );
};

export default collectionItem;
