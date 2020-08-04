import React from "react";
import "./category.scss";
import { connect } from "react-redux";
import COLLECTION_ID_MAP from "../shop/shop.util";

const Category = ({ match, collection }) => {
  console.log(collection.match.params.collectionId);
  return (
    <div className="Category">
      <h2>Category Page</h2>
    </div>
  );
};
const mapStateToProps = (state) => ({
  collection: state.shopData.collections.find(
    (collection) => collection.id === COLLECTION_ID_MAP.id
  ),
});
export default connect(mapStateToProps)(Category);
