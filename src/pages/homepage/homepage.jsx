import React from "react";

// import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";
import HomepageContainer from "../homepage/homePageStyled";

const Homepage = (props) => {
  return (
    <HomepageContainer>
      <Directory />
    </HomepageContainer>
  );
};

export default Homepage;
