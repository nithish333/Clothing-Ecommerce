import React from "react";

import "./collectionItem.styles.scss";

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
    </div>
  );
};

export default collectionItem;
