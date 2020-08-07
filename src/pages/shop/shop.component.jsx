import React from "react";
// import SHOP_DATA from "./shop.data";
import { connect } from "react-redux";
// import PreviewCollection from "../../components/PreviewComponent/PreviewCollection";
import CollectionsOverview from "../../components/collectionsOverview/collectionsOverview";
import { Route } from "react-router-dom";
import Category from "../category/category";
// import { selectShopData } from "../../redux/shopData/shop.selector";
import {
  firestore,
  convertCollectionsToSnapshotMap,
} from "../../firebase/firebase.utils";
import { updateCollection } from "../../redux/shopData/shop.actions";

class Shop extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = convertCollectionsToSnapshotMap(snapshot);
      updateCollections(collectionMap);
    });
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shopPage">
        <h1>SHOP </h1>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:categoryId`} component={Category} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollection(collectionsMap)),
});
export default connect(null, mapDispatchToProps)(Shop);
