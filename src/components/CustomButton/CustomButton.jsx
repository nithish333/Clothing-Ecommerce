import React from "react";
import "./CustomButton.styles.scss";
import { CustomButtonContainer } from "./CustomButtonStyled";

const CustomButton = (props) => {
  return (
    <CustomButtonContainer {...props}>{props.children}</CustomButtonContainer>
  );
};

export default CustomButton;
