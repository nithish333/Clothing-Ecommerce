import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import ShopPage from "../src/pages/shop/shop.component";
import Header from "./components/Header/headerComponent";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          {/* <Route path="/hats" component={Hatspage} /> */}
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}
export default App;
