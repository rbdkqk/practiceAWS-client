import React from "react";
import "./Input.css";

const SignupInput = ({
  emailValue,
  passwordValue,
  onEmailChange,
  onPasswordChange,
}) => {
  return (
    <div className="input">
      <div>
        <label> Email </label>
        <input value={emailValue} onChange={onEmailChange} />
      </div>
      <div>
        <label> password </label>
        <input
          value={passwordValue}
          onChange={onPasswordChange}
          type="password"
        />
      </div>
    </div>
  );
};

export default SignupInput;
