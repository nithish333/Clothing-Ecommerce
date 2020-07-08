import React from "react";

import "./homepage.styles.scss";

const Homepage = (props) => {
  return (
    <div className="Homepage">
      <div className="directoryMenu">
        <div className="menuItem">
          <div className="content">
            <h1 className="title">HATS</h1>
            <p className="subtitle">SHOP NOW</p>
          </div>
        </div>
        <div className="menuItem">
          <div className="content">
            <h1 className="title">JACKETS</h1>
            <p className="subtitle">SHOP NOW</p>
          </div>
        </div>
        <div className="menuItem">
          <div className="content">
            <h1 className="title">SNEAKERS</h1>
            <p className="subtitle">SHOP NOW</p>
          </div>
        </div>
        <div className="menuItem">
          <div className="content">
            <h1 className="title">WOMEN</h1>
            <p className="subtitle">SHOP NOW</p>
          </div>
        </div>
        <div className="menuItem">
          <div className="content">
            <h1 className="title">MEN</h1>
            <p className="subtitle">SHOP NOW</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
