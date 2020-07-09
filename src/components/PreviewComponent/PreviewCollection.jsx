import React from "react";
import CollectionItem from "../collectionItem/collectionItem.component";
import "./PreviewCollection.scss";

const PreviewCollection = ({ title, items }) => {
  return (
    <div className="collectionPreview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...itemProps }) => {
            return <CollectionItem key={id} {...itemProps} />;
          })}
      </div>
    </div>
  );
};

export default PreviewCollection;
