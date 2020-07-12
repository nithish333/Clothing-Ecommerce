import React from "react";
import "./SignInAndSignOut.styles.scss";
import SignIn from "../../components/SignIn/SIgnIn";
import SignUp from "../../components/SignUp/SignUp";

const SignInAndSignOut = () => {
  return (
    <div className="SignInAndSignOut">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignOut;
