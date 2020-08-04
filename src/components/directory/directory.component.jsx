import React from "react";

import "./directory.styles.scss";
import { connect } from "react-redux";
import MenuItem from "../menuItem/menuItem.component";
import { selectSections } from "../../redux/directory/directory.selector";

const Directory = ({ sections }) => {
  // const { title, imageUrl, id, size, linkUrl } = sections;
  return (
    <div className="directoryMenu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  sections: selectSections(state),
});
export default connect(mapStateToProps)(Directory);
