import React from "react";

import "./directory.styles.scss";
import { connect } from "react-redux";
import MenuItem from "../menuItem/menuItem.component";

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

const mapStateToProps = ({ directory: { sections } }) => ({
  sections,
});
export default connect(mapStateToProps)(Directory);
