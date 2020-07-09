import React from "react";
import SHOP_DATA from "./shop.data";
import PreviewCollection from "../../components/PreviewComponent/PreviewCollection";
class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shopPage">
        <h1>SHOP </h1>
        {collections.map(({ id, ...otherCollectionProps }) => {
          return <PreviewCollection key={id} {...otherCollectionProps} />;
        })}
      </div>
    );
  }
}

export default Shop;
