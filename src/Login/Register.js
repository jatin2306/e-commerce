import React from 'react'

const Register = () => {
  return (
    <>
    <div
      id="login_pupop"
      className="hero_canvas lazyloaded lazyloading act_opened"
      style={{
        boxSizing: "border-box",
        WebkitTapHighlightColor: "transparent",
        position: "fixed",
        backgroundColor: "rgb(255, 255, 255)",
        display: "block",
        inset: "50% 0px auto",
        margin: "0px auto",
        borderRadius: "10px",
        padding: "30px 40px 40px",
        transition: "all 0.3s linear 0s",
        right: "0px",
        bottom: "auto",
        top: "50%",
        width: "500px",
        minHeight: "500px",
        transform: "translateY(-50%)",
        opacity: 1,
        pointerEvents: "auto",
        zIndex: 99999,
      }}
    >
      <i
        className="close_popup_ajax icon-x"
        style={{
          boxSizing: "border-box",
          WebkitTapHighlightColor: "transparent",
          fontVariant: "normal",
          fontStyle: "normal",
          fontWeight: 400,
          textTransform: "none",
          lineHeight: 1,
          WebkitFontSmoothing: "antialiased",
          flex: "0 0 auto",
          transition: "all 0.3s linear 0s",
          width: "auto",
          maxWidth: "100%",
          fontSize: "20px",
          cursor: "pointer",
          position: "absolute",
          color: "#777777",
          top: "20px",
          right: "20px",
          zIndex: 9,
          fontFamily: "icon-dukamarket",
        }}
      />
      <div
        className="mini_cart_header flex al_center"
        style={{
          boxSizing: "border-box",
          WebkitTapHighlightColor: "transparent",
          display: "flex",
          padding: "0px",
          borderBottom: "none",
          alignItems: "center",
          marginBottom: "30px",
          position: "relative",
        }}
      >
        <h3
          className="tabtitle title"
          style={{
            boxSizing: "border-box",
            WebkitTapHighlightColor: "transparent",
            color: "#222222",
            fontFamily: "Rubik, sans-serif",
            margin: "0px",
            borderBottom: "2px solid rgb(235, 235, 235)",
            lineHeight: "50px",
            textAlign: "center",
            textTransform: "uppercase",
            width: "50%",
            cursor: "pointer",
            fontWeight: 700,
            fontSize: "16px",
          }}
        >
          Login
        </h3>
        <h3
          className="tabtitle title active"
          style={{
            boxSizing: "border-box",
            WebkitTapHighlightColor: "transparent",
            fontFamily: "Rubik, sans-serif",
            margin: "0px",
            borderBottom: "2px solid rgb(235, 235, 235)",
            lineHeight: "50px",
            textAlign: "center",
            textTransform: "uppercase",
            width: "50%",
            cursor: "pointer",
            fontWeight: 700,
            fontSize: "16px",
            borderColor: "#16bcdc",
            color: "#16bcdc",
          }}
        >
          Register
        </h3>
      </div>
      <div
        className="wrapper_tabcontent"
        style={{
          boxSizing: "border-box",
          WebkitTapHighlightColor: "transparent",
        }}
      >
        <div
          id="tablogin"
          className="customer_login tabcontent"
          style={{
            boxSizing: "border-box",
            WebkitTapHighlightColor: "transparent",
            display: "none",
          }}
        >
          <form
            id="customer_login"
            className="login login-register-form content-form"
            acceptCharset="UTF-8"
            action="/account/login"
            method="post"
            style={{
              boxSizing: "border-box",
              WebkitTapHighlightColor: "transparent",
              margin: "0px",
              padding: "0px",
              marginBottom: "0px",
            }}
          >
            <input
              name="form_type"
              type="hidden"
              defaultValue="customer_login"
              style={{
                boxSizing: "border-box",
                WebkitTapHighlightColor: "transparent",
                outline: "0px",
                borderRadius: "0px",
                boxShadow: "none",
                fontFamily: "Rubik, sans-serif",
              }}
            />
            <input
              name="utf8"
              type="hidden"
              defaultValue="✓"
              style={{
                boxSizing: "border-box",
                WebkitTapHighlightColor: "transparent",
                outline: "0px",
                borderRadius: "0px",
                boxShadow: "none",
                fontFamily: "Rubik, sans-serif",
              }}
            />
            <div
              className="login-form"
              style={{
                boxSizing: "border-box",
                WebkitTapHighlightColor: "transparent",
                padding: "0px",
              }}
            >
              <div
                className="label-text"
                style={{
                  boxSizing: "border-box",
                  WebkitTapHighlightColor: "transparent",
                  margin: "0px 0px 15px",
                  fontSize: "14px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <label
                  style={{
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                    marginBottom: "5px",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "18px",
                    color: "#222222",
                  }}
                >
                  Email Address{" "}
                  <span
                    style={{
                      boxSizing: "border-box",
                      WebkitTapHighlightColor: "transparent",
                      color: "#16bcdc",
                    }}
                  >
                    *
                  </span>
                </label>
                <p
                  style={{
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                    margin: "0px 0px 10px",
                    position: "relative",
                    marginBottom: "0px",
                  }}
                >
                  <input
                    id="CustomerEmail"
                    className="input-info"
                    name="customer[email]"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Email Address"
                    autoCapitalize="off"
                    autoCorrect="off"
                    style={{
                      boxSizing: "border-box",
                      WebkitTapHighlightColor: "transparent",
                      boxShadow: "none",
                      appearance: "none",
                      fontFamily: "Rubik, sans-serif",
                      padding: "0px 20px",
                      outline: "0px",
                      border: "1px solid rgb(229, 232, 236)",
                      borderRadius: "3px",
                      width: "100%",
                      height: "50px",
                      backgroundColor: "rgb(255, 255, 255)",
                      marginBottom: "0px",
                      color: "#777777",
                      fontSize: "13px",
                      lineHeight: "16px",
                      fontWeight: 500,
                    }}
                  />
                </p>
              </div>
              <div
                className="label-text"
                style={{
                  boxSizing: "border-box",
                  WebkitTapHighlightColor: "transparent",
                  margin: "0px 0px 15px",
                  fontSize: "14px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <label
                  style={{
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                    marginBottom: "5px",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "18px",
                    color: "#222222",
                  }}
                >
                  Password{" "}
                  <span
                    style={{
                      boxSizing: "border-box",
                      WebkitTapHighlightColor: "transparent",
                      color: "#16bcdc",
                    }}
                  >
                    *
                  </span>
                </label>
                <p
                  style={{
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                    margin: "0px 0px 10px",
                    position: "relative",
                    marginBottom: "0px",
                  }}
                >
                  <input
                    id="CustomerPassword"
                    className="input-info"
                    name="customer[password]"
                    type="password"
                    autoComplete="current-password"
                    required
                    placeholder="Password"
                    style={{
                      boxSizing: "border-box",
                      WebkitTapHighlightColor: "transparent",
                      boxShadow: "none",
                      appearance: "none",
                      fontFamily: "Rubik, sans-serif",
                      padding: "0px 20px",
                      outline: "0px",
                      border: "1px solid rgb(229, 232, 236)",
                      borderRadius: "3px",
                      width: "100%",
                      height: "50px",
                      backgroundColor: "rgb(255, 255, 255)",
                      marginBottom: "0px",
                      color: "#777777",
                      fontSize: "13px",
                      lineHeight: "16px",
                      fontWeight: 500,
                    }}
                  />
                </p>
              </div>
              <div
                className="label-text check"
                style={{
                  boxSizing: "border-box",
                  WebkitTapHighlightColor: "transparent",
                  margin: "0px 0px 15px",
                  fontSize: "14px",
                  display: "flex",
                  border: "none",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <a
                  id="RecoverPassword"
                  className="forgot"
                  href="https://demo-morata.myshopify.com/account/login#recoverPassword"
                  style={{
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                    textDecoration: "none",
                    color: "#222222",
                    transition: "all 400ms linear 0ms",
                    fontSize: "14px",
                    lineHeight: "15px",
                    outline: "0px",
                  }}
                >
                  Forgot your password ?
                </a>
              </div>
              <div
                className="group-button"
                style={{
                  boxSizing: "border-box",
                  WebkitTapHighlightColor: "transparent",
                  textAlign: "center",
                }}
              >
                <input
                  className="btn button submit"
                  name="login"
                  type="submit"
                  defaultValue="Login"
                  style={{
                    WebkitTapHighlightColor: "transparent",
                    boxShadow: "none",
                    fontFamily: "Rubik, sans-serif",
                    backgroundColor: "#222222",
                    color: "#ffffff",
                    height: "45px",
                    lineHeight: "45px",
                    whiteSpace: "nowrap",
                    justifyContent: "center",
                    alignItems: "center",
                    boxSizing: "border-box",
                    verticalAlign: "middle",
                    userSelect: "none",
                    border: "0px",
                    outline: "0px",
                    transition: "all 400ms linear 0ms",
                    padding: "0px 20px",
                    borderRadius: "3px",
                    display: "inline-block",
                    fontWeight: 500,
                    fontSize: "12px",
                    textTransform: "uppercase",
                    textAlign: "center",
                    maxWidth: "100%",
                    width: "100%",
                    minWidth: "250px",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
          </form>
        </div>
        <div
          id="tabregister"
          className="customer_register tabcontent active"
          style={{
            boxSizing: "border-box",
            WebkitTapHighlightColor: "transparent",
            display: "block",
          }}
        >
          <form
            id="create_customer"
            className="register login-register-form content-form init"
            acceptCharset="UTF-8"
            action="/account"
            method="post"
            noValidate="novalidate"
            style={{
              boxSizing: "border-box",
              WebkitTapHighlightColor: "transparent",
              margin: "0px",
              padding: "0px",
              marginBottom: "0px",
            }}
          >
            <input
              name="form_type"
              type="hidden"
              defaultValue="create_customer"
              style={{
                boxSizing: "border-box",
                WebkitTapHighlightColor: "transparent",
                outline: "0px",
                borderRadius: "0px",
                boxShadow: "none",
                fontFamily: "Rubik, sans-serif",
              }}
            />
            <input
              name="utf8"
              type="hidden"
              defaultValue="✓"
              style={{
                boxSizing: "border-box",
                WebkitTapHighlightColor: "transparent",
                outline: "0px",
                borderRadius: "0px",
                boxShadow: "none",
                fontFamily: "Rubik, sans-serif",
              }}
            />
            <div
              className="register-form"
              style={{
                boxSizing: "border-box",
                WebkitTapHighlightColor: "transparent",
              }}
            >
              <div
                className="label-text"
                style={{
                  boxSizing: "border-box",
                  WebkitTapHighlightColor: "transparent",
                  margin: "0px 0px 15px",
                  fontSize: "14px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <label
                  style={{
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                    marginBottom: "5px",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "18px",
                    color: "#222222",
                  }}
                >
                  First Name{" "}
                  <span
                    style={{
                      boxSizing: "border-box",
                      WebkitTapHighlightColor: "transparent",
                      color: "rgb(245, 126, 96)",
                    }}
                  >
                    *
                  </span>
                </label>
                <p
                  style={{
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                    margin: "0px 0px 10px",
                    position: "relative",
                    marginBottom: "0px",
                  }}
                >
                  <input
                    id="RegisterForm-FirstName"
                    className="required input-info"
                    name="customer[first_name]"
                    type="text"
                    autoComplete="given-name"
                    required
                    placeholder="First Name"
                    style={{
                      boxSizing: "border-box",
                      WebkitTapHighlightColor: "transparent",
                      boxShadow: "none",
                      appearance: "none",
                      fontFamily: "Rubik, sans-serif",
                      padding: "0px 20px",
                      outline: "0px",
                      border: "1px solid rgb(229, 232, 236)",
                      borderRadius: "3px",
                      width: "100%",
                      height: "50px",
                      backgroundColor: "rgb(255, 255, 255)",
                      marginBottom: "0px",
                      color: "#777777",
                      fontSize: "13px",
                      lineHeight: "16px",
                      fontWeight: 500,
                    }}
                  />
                </p>
              </div>
              <div
                className="label-text"
                style={{
                  boxSizing: "border-box",
                  WebkitTapHighlightColor: "transparent",
                  margin: "0px 0px 15px",
                  fontSize: "14px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <label
                  style={{
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                    marginBottom: "5px",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "18px",
                    color: "#222222",
                  }}
                >
                  Last Name{" "}
                  <span
                    style={{
                      boxSizing: "border-box",
                      WebkitTapHighlightColor: "transparent",
                      color: "rgb(245, 126, 96)",
                    }}
                  >
                    *
                  </span>
                </label>
                <p
                  style={{
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                    margin: "0px 0px 10px",
                    position: "relative",
                    marginBottom: "0px",
                  }}
                >
                  <input
                    id="RegisterForm-LastName"
                    className="required input-info"
                    name="customer[last_name]"
                    type="text"
                    autoComplete="family-name"
                    required
                    placeholder="Last Name"
                    style={{
                      boxSizing: "border-box",
                      WebkitTapHighlightColor: "transparent",
                      boxShadow: "none",
                      appearance: "none",
                      fontFamily: "Rubik, sans-serif",
                      padding: "0px 20px",
                      outline: "0px",
                      border: "1px solid rgb(229, 232, 236)",
                      borderRadius: "3px",
                      width: "100%",
                      height: "50px",
                      backgroundColor: "rgb(255, 255, 255)",
                      marginBottom: "0px",
                      color: "#777777",
                      fontSize: "13px",
                      lineHeight: "16px",
                      fontWeight: 500,
                    }}
                  />
                </p>
              </div>
              <div
                className="label-text"
                style={{
                  boxSizing: "border-box",
                  WebkitTapHighlightColor: "transparent",
                  margin: "0px 0px 15px",
                  fontSize: "14px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <label
                  style={{
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                    marginBottom: "5px",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "18px",
                    color: "#222222",
                  }}
                >
                  Email Address{" "}
                  <span
                    style={{
                      boxSizing: "border-box",
                      WebkitTapHighlightColor: "transparent",
                      color: "rgb(245, 126, 96)",
                    }}
                  >
                    *
                  </span>
                </label>
                <p
                  style={{
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                    margin: "0px 0px 10px",
                    position: "relative",
                    marginBottom: "0px",
                  }}
                >
                  <input
                    id="RegisterForm-email"
                    className="required email input-info"
                    name="customer[email]"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Email Address"
                    aria-required="true"
                    autoCapitalize="off"
                    style={{
                      boxSizing: "border-box",
                      WebkitTapHighlightColor: "transparent",
                      boxShadow: "none",
                      appearance: "none",
                      fontFamily: "Rubik, sans-serif",
                      padding: "0px 20px",
                      outline: "0px",
                      border: "1px solid rgb(229, 232, 236)",
                      borderRadius: "3px",
                      width: "100%",
                      height: "50px",
                      backgroundColor: "rgb(255, 255, 255)",
                      marginBottom: "0px",
                      color: "#777777",
                      fontSize: "13px",
                      lineHeight: "16px",
                      fontWeight: 500,
                    }}
                  />
                </p>
              </div>
              <div
                className="label-text"
                style={{
                  boxSizing: "border-box",
                  WebkitTapHighlightColor: "transparent",
                  margin: "0px 0px 15px",
                  fontSize: "14px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <label
                  style={{
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                    marginBottom: "5px",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "18px",
                    color: "#222222",
                  }}
                >
                  Password{" "}
                  <span
                    style={{
                      boxSizing: "border-box",
                      WebkitTapHighlightColor: "transparent",
                      color: "rgb(245, 126, 96)",
                    }}
                  >
                    *
                  </span>
                </label>
                <p
                  style={{
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                    margin: "0px 0px 10px",
                    position: "relative",
                    marginBottom: "0px",
                  }}
                >
                  <input
                    id="CreatePassword"
                    className="required password input-info"
                    name="customer[password]"
                    type="password"
                    autoComplete="on"
                    required
                    placeholder="Password"
                    style={{
                      boxSizing: "border-box",
                      WebkitTapHighlightColor: "transparent",
                      boxShadow: "none",
                      appearance: "none",
                      fontFamily: "Rubik, sans-serif",
                      padding: "0px 20px",
                      outline: "0px",
                      border: "1px solid rgb(229, 232, 236)",
                      borderRadius: "3px",
                      width: "100%",
                      height: "50px",
                      backgroundColor: "rgb(255, 255, 255)",
                      marginBottom: "0px",
                      color: "#777777",
                      fontSize: "13px",
                      lineHeight: "16px",
                      fontWeight: 500,
                    }}
                  />
                </p>
              </div>
              <div
                className="group-button"
                style={{
                  boxSizing: "border-box",
                  WebkitTapHighlightColor: "transparent",
                  textAlign: "center",
                }}
              >
                <input
                  className="btn button submit"
                  type="submit"
                  defaultValue="Create New Account"
                  style={{
                    WebkitTapHighlightColor: "transparent",
                    boxShadow: "none",
                    fontFamily: "Rubik, sans-serif",
                    backgroundColor: "#222222",
                    color: "#ffffff",
                    height: "45px",
                    lineHeight: "45px",
                    whiteSpace: "nowrap",
                    justifyContent: "center",
                    alignItems: "center",
                    boxSizing: "border-box",
                    verticalAlign: "middle",
                    userSelect: "none",
                    border: "0px",
                    outline: "0px",
                    transition: "all 400ms linear 0ms",
                    padding: "0px 20px",
                    borderRadius: "3px",
                    display: "inline-block",
                    fontWeight: 500,
                    fontSize: "12px",
                    textTransform: "uppercase",
                    textAlign: "center",
                    maxWidth: "100%",
                    width: "100%",
                    minWidth: "250px",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
          </form>
        </div>
        <div
          className="text"
          style={{
            boxSizing: "border-box",
            WebkitTapHighlightColor: "transparent",
            paddingTop: "30px",
          }}
        >
          <p
            style={{
              boxSizing: "border-box",
              WebkitTapHighlightColor: "transparent",
              margin: "0px",
              textAlign: "center",
              fontWeight: 400,
              fontSize: "12px",
            }}
          >
            New user discount applies only to full price items.{" "}
            <br
              style={{
                boxSizing: "border-box",
                WebkitTapHighlightColor: "transparent",
              }}
            />
            By providing your email address, you agree to our
            <br
              style={{
                boxSizing: "border-box",
                WebkitTapHighlightColor: "transparent",
              }}
            />{" "}
            <a
              href="https://demo-morata.myshopify.com/"
              style={{
                boxSizing: "border-box",
                WebkitTapHighlightColor: "transparent",
                textDecoration: "none",
                transition: "all 400ms linear 0ms",
                color: "#16bcdc",
                outline: "0px",
              }}
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://demo-morata.myshopify.com/pages/terms-and-conditions"
              style={{
                boxSizing: "border-box",
                WebkitTapHighlightColor: "transparent",
                textDecoration: "none",
                transition: "all 400ms linear 0ms",
                color: "#16bcdc",
                outline: "0px",
              }}
            >
              Terms of Service
            </a>
            .
          </p>
        </div>
      </div>
    </div>
    <style
      dangerouslySetInnerHTML={{
        __html: `
html {
box-sizing: border-box;
padding: 0px;
margin: 0px;
}

body {
box-sizing: border-box;
margin: 0px;
padding: 0px;
position: relative;
font-size: 14;
overflow-x: hidden;
line-height: 1.7;
color: #777777;
background-color: #f4f5f7;
font-family: Rubik, sans-serif;
font-weight: 400;
overflow-y: hidden;
}
`,
      }}
    />
  </>
  )
}

export default Register