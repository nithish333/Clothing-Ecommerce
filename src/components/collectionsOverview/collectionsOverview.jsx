import React from "react";
import "./collectionOverview.scss";
import { connect } from "react-redux";
import PreviewCollection from "../PreviewComponent/PreviewCollection";
// import { Route } from "react-router-dom";

const CollectionsOverview = ({ collections }) => (
  <div className="collectionsOverview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <PreviewCollection key={id} {...otherCollectionProps} />
    ))}
  </div>
);
const mapStateToProps = ({ shopData: { collections } }) => ({
  collections,
});
export default connect(mapStateToProps)(CollectionsOverview);
