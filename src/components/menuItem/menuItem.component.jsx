import React from "react";
import { withRouter } from "react-router-dom";
import "./menuItem.styles.scss";

const MenuItem = (props) => {
  const style = {
    backgroundImage: `url(${props.image})`,
  };
  console.log(props);

  return (
    <div
      className={` ${props.size} menuItem`}
      onClick={() => props.history.push(`${props.match.url}${props.linkUrl}`)}
    >
      <div style={style} className="bgImage" />
      <div className="content">
        <h1 className="title">{props.title.toUpperCase()}</h1>
        <p className="subtitle">SHOP NOW</p>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
