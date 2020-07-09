import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import ShopPage from "../src/pages/shop/shop.component";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Homepage} />
        {/* <Route path="/hats" component={Hatspage} /> */}
        <Route path="/shop" component={ShopPage} />
      </div>
    );
  }
}
export default App;
