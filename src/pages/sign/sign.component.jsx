import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up";
import "./sign.styles.scss";

function Sign(props) {
  return (
    <div className="sign-up-in">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default Sign;
