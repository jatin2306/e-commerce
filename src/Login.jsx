import React, { useEffect, useState } from 'react';
const Login = () => {
  useEffect(() => {
    var sheet1 = document.getElementById("style1")
    sheet1.disabled = true;
    var sheet2 = document.getElementById("style2")
    sheet2.disabled = true; var sheet2 = document.getElementById("logincss")
    sheet2.disabled = false;
  }, [])
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  return (
    <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`}>
      <div className="row">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social"><i className="fa fa-facebook" aria-hidden="true"></i></a>
              <a href="#" className="social"><i className="fa fa-google" aria-hidden="true"></i></a>
              <a href="#" className="social"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
            <p id="mobile_para">To keep connected with us, please login</p>
            <button className="ghost_mobile" id="signIn_mobile" onClick={handleSignInClick}>Sign In</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social"><i className="fa fa-facebook" aria-hidden="true"></i></a>
              <a href="#" className="social"><i className="fa fa-google" aria-hidden="true"></i></a>
              <a href="#" className="social"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
            <p id="mobile_para">Don't have an account? Sign up here !!</p>
            <button className="ghost_mobile" id="signUp_mobile" onClick={handleSignUpClick}>Sign Up</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" id="signIn" onClick={handleSignInClick}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp" onClick={handleSignUpClick}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
