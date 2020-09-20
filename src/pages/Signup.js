import React, { Component } from "react";
import { connect } from "react-redux";
import * as SignupActions from "../modules/signup";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";
import SignupInput from "../components/SignupInput";

class Signup extends Component {
  state = {
    emailValue: "",
    passwordValue: "",
  };

  handleEmailChange = (e) => {
    this.setState({
      emailValue: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    this.setState({
      passwordValue: e.target.value,
    });
  };

  handleSignup = () => {
    const { emailValue, passwordValue } = this.state;

    const { SignupActions } = this.props;

    SignupActions.signup({ email: emailValue, password: passwordValue }).then(
      () => {
        console.log("lksgklhglhgli");
        localStorage.setItem("isSignup", true);
      }
    );
  };

  render() {
    const { emailValue, passwordValue } = this.state;
    // const { isSignup } = this.props;
    const { handleEmailChange, handlePasswordChange, handleSignup } = this;

    return (
      <div>
        <SignupInput
          emailValue={emailValue}
          passwordValue={passwordValue}
          onEmailChange={handleEmailChange}
          onPasswordChange={handlePasswordChange}
        />

        <button onClick={handleSignup}>Signup</button>
      </div>
    );
  }
}
// export default Signup;
export default connect(
  (state) => ({
    isSignup: state.signup.isSignup,
  }),
  (dispatch) => ({
    SignupActions: bindActionCreators(SignupActions, dispatch),
  })
)(Signup);
