import React from "react";
import "./collectionOverview.scss";
import { connect } from "react-redux";
import PreviewCollection from "../PreviewComponent/PreviewCollection";
import { selectCollectionForPreview } from "../../redux/shopData/shop.selector";
// import { Route } from "react-router-dom";

const CollectionsOverview = ({ collections }) => {
  // console.log(collections);
  return (
    <div className="collectionsOverview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};
const mapStateToProps = (state) => ({
  collections: selectCollectionForPreview(state),
});
export default connect(mapStateToProps)(CollectionsOverview);
