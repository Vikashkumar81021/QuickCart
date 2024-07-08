import React from "react";
import "./CSS/loginSignup.css"
const LoginSignup = () => {
  return (
    <div className="LoginSignup">
      <div className="loginSignup-container">
        <h1>Sign Up</h1>
        <div className="loginSignup-fields">
          <input type="text" placeholder="Enter Your Name" />
          <input type="Email" placeholder="Enter Your Email" />
          <input type="password" placeholder="Enter Your Password" />
        </div>
        <button>Continue</button>
        <p className="loginSignup-login">
          Already have an accout ? <span>Login Here</span>
        </p>
        <div className="loginSignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continue ,i agree to the terms of privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
