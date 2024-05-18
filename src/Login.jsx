import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { supabase } from './supabaseClient';
import { ToastContainer, toast } from 'react-toastify';
const Login = () => {
  useEffect(() => {
    var sheet1 = document.getElementById("style1")
    sheet1.disabled = true;
    var sheet2 = document.getElementById("style2")
    sheet2.disabled = true; var sheet2 = document.getElementById("logincss")
    sheet2.disabled = false;
  }, [])
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [signUpData, setSignUpData] = useState([]);
  const LoginValidation = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required")
  });

  const handleSubmit = (values, { resetForm }) => {
    if (values) {
      setSignUpData(values)
    }
    PostSignUpData();
    resetForm();
  };
  const PostSignUpData = async () => {
    try {
      const { error } = await supabase
        .from("SignUp")
        .insert({
          name: signUpData?.name,
          email: signUpData?.email,
          password: signUpData.password
        })
        .single();
      if (error) {
      }
      else {
        toast.success("meesage chla gya")
      }
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <>
      <ToastContainer />
      <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`}>
        <div className="row">
          <div className="form-container sign-up-container">
            <Formik
              initialValues={{
                name: "",
                email: "",
                password: ""
              }}
              validationSchema={LoginValidation}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form action="post">
                  <h1>Create Account</h1>
                  <div className="social-container">
                    <a href="#" className="social"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                    <a href="#" className="social"><i className="fa fa-google" aria-hidden="true"></i></a>
                    <a href="#" className="social"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                  </div>
                  <span>or use your email for registration</span>
                  <Field name="name" type="text" placeholder="Name" className={` ${errors.name && touched.name ? "is-invalid" : ""
                    }`} />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="error-message"
                  />
                  <Field name="email" type="email" placeholder="Email" className={` ${errors.email && touched.email ? "is-invalid" : ""
                    }`} />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error-message"
                  />
                  <Field name="password" type="password" placeholder="Password" className={` ${errors.password && touched.password ? "is-invalid" : ""
                    }`} />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error-message"
                  />
                  <button>Sign Up</button>
                  <p id="mobile_para">To keep connected with us, please login</p>
                  <button className="ghost_mobile" id="signIn_mobile" type="su=">Sign In</button>
                </Form>
              )}
            </Formik>
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
              <button className="ghost_mobile" id="signUp_mobile" onClick={() => (setIsRightPanelActive(true))}>Sign Up</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <button className="ghost" id="signIn" onClick={() => (setIsRightPanelActive(false))}>Sign In</button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button className="ghost" id="signUp" onClick={() => (setIsRightPanelActive(true))}>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Login;
