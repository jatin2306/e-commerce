import React, { useState } from 'react'
// import './Login.scss'
const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };
  return (
    <>
      <div className="form_wrapper">
        <div className="form_container">
          <div className="title_container">
            <h2>Responsive Login Form</h2>
          </div>
          <div className="row clearfix">
            <div className="col_half">
              <div className="social_btn fb">
                <a href="#">
                  <span>
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </span>
                  Sign in with Facebook
                </a>
              </div>
              <div className="social_btn tw">
                <a href="#">
                  <span>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </span>
                  Sign in with Twitter
                </a>
              </div>
              <div className="social_btn gplus">
                <a href="#">
                  <span>
                    <i className="fa fa-google-plus" aria-hidden="true"></i>
                  </span>
                  Sign in with Google+
                </a>
              </div>
              <div className="row clearfix create_account">
                <div>
                  <a href="#">Create an Account</a>
                </div>
              </div>
            </div>
            <div className="col_half last">
              <form>
                <div className="input_field">
                  <span>
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </span>
                  <input type="email" name="email" placeholder="Email" required />
                </div>
                <div className="input_field">
                  <span>
                    <i className="fa fa-lock" aria-hidden="true"></i>
                  </span>
                  <input type="password" name="phone" placeholder="Password" required />
                </div>
                <input className="button" type="submit" value="Sign in" />
                <div className="row clearfix bottom_row">
                  <div className="col_half remember_me">
                    <input name="" type="checkbox" value="" />
                    Remember me
                  </div>
                  <div className="col_half forgot_pw">
                    <a href="#">Forgot Password?</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <p className="credit">
          Developed by
          <a href="http://www.designtheway.com/responsive-login-form/" target="_blank">Design the way</a>
        </p>
      </div>

    </>
  );
};

export default Login;