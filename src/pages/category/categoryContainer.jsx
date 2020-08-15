import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { selectIsCollectionLoaded } from "../../redux/shopData/shop.selector";
import withSpinner from "../../components/withSpinner/withSpinner";
import Category from "../category/category";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoaded(state),
});

const CategoryContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(Category);

export default CategoryContainer;
