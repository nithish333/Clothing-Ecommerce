import React from "react";
// import SHOP_DATA from "./shop.data";
import { connect } from "react-redux";
// import PreviewCollection from "../../components/PreviewComponent/PreviewCollection";
import CollectionsOverview from "../../components/collectionsOverview/collectionsOverview";
import { Route } from "react-router-dom";
import Category from "../category/category";
import { selectShopData } from "../../redux/shopData/shop.selector";

const Shop = ({ match }) => {
  console.log(match);
  return (
    <div className="shopPage">
      <h1>SHOP </h1>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:categoryId`} component={Category} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  collections: selectShopData(state),
});
export default connect(mapStateToProps)(Shop);
