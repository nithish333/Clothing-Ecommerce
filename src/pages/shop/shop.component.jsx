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
import withSpinner from "../../components/withSpinner/withSpinner";

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CategoryPageWithSpinner = withSpinner(Category);

class Shop extends React.Component {
  state = {
    loading: true,
  };
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = convertCollectionsToSnapshotMap(snapshot);
      updateCollections(collectionMap);
      this.setState({
        loading: false,
      });
    });
  }
  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shopPage">
        <h1>SHOP </h1>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:categoryId`}
          render={(props) => (
            <CategoryPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollection(collectionsMap)),
});
export default connect(null, mapDispatchToProps)(Shop);
