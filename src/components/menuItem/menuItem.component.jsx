import React from "react";

import "./menuItem.styles.scss";

const MenuItem = (props) => {
  const style = {
    backgroundImage: `url(${props.image})`,
  };
  return (
    <div className={` ${props.size} menuItem`}>
      <div style={style} className="bgImage" />
      <div className="content">
        <h1 className="title">{props.title.toUpperCase()}</h1>
        <p className="subtitle">SHOP NOW</p>
      </div>
    </div>
  );
};

export default MenuItem;
