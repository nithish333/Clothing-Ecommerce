import React from "react";
// import SHOP_DATA from "./shop.data";
import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
// import PreviewCollection from "../../components/PreviewComponent/PreviewCollection";
import CollectionsOverviewContainer from "../../components/collectionsOverview/collectionOverviewContainer";
import { Route } from "react-router-dom";
// import { selectShopData } from "../../redux/shopData/shop.selector";
// import {
//   firestore,
//   convertCollectionsToSnapshotMap,
// } from "../../firebase/firebase.utils";
import { fetchCollectionsStartAsync } from "../../redux/shopData/shop.actions";
// import { selectIsCollectionLoaded } from "../../redux/shopData/shop.selector";
// import withSpinner from "../../components/withSpinner/withSpinner";
import CategoryContainer from "../category/categoryContainer";

// const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
// const CategoryPageWithSpinner = withSpinner(Category);

class Shop extends React.Component {
  state = {
    loading: true,
  };
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
    // const { updateCollections } = this.props;
    // const collectionRef = firestore.collection("collections");
    // // fetch(
    // //   "https://firestore.googleapis.com/v1/projects/crown-db-93ab5/databases/(default)/documents/collections"
    // // )
    // //   .then((response) => response.json())
    // //   .then((collections) => console.log(collections));
    // collectionRef.get().then((snapshot) => {
    //   const collectionMap = convertCollectionsToSnapshotMap(snapshot);
    //   updateCollections(collectionMap);
    //   this.setState({
    //     loading: false,
    //   });
    // });
  }
  render() {
    const { match } = this.props;

    return (
      <div className="shopPage">
        <h1>SHOP </h1>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
          //? Without the container higher order component
          // render={(props) => (
          //   <CollectionsOverviewWithSpinner
          //     isLoading={!isCollectionLoaded}
          //     {...props}
          //   />
          // )}
        />
        <Route
          path={`${match.path}/:categoryId`}
          component={CategoryContainer}
          // render={(props) => (
          //   <CategoryPageWithSpinner
          //     isLoading={!isCollectionLoaded}
          //     {...props}
          //   />
          // )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});
export default connect(null, mapDispatchToProps)(Shop);
