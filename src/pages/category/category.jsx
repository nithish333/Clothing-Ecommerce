import React from "react";
import "./category.scss";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shopData/shop.selector";
import CollectionItem from "../../components/collectionItem/collectionItem.component";

const Category = ({ collection }) => {
  console.log(collection);
  const { title, items } = collection;
  return (
    <div className="Category">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.categoryId)(state),
});
export default connect(mapStateToProps)(Category);
