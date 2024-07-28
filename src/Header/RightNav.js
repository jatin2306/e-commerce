import React from 'react'

const RightNav = () => {
  return (
    <>
    <div
      className="topbar-right col-lg-6 col-md-6 col-12 flex hide-mobile"
      style={{
        boxSizing: "border-box",
        WebkitTapHighlightColor: "transparent",
        position: "relative",
        width: "100%",
        paddingRight: "10px",
        paddingLeft: "10px",
        maxWidth: "50%",
        display: "flex",
        gap: "40px",
        justifyContent: "flex-end",
        marginLeft: "auto",
        fontSize: "14px",
        font: "14px / 23.8px Rubik, sans-serif",
        lineHeight: "23.8px",
        backgroundColor:"black"
      }}
    >
      <ul
        className="topbar-menu"
        style={{
          boxSizing: "border-box",
          WebkitTapHighlightColor: "transparent",
          margin: "0px",
          padding: "0px",
          listStyle: "none",
          gap: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <li
          style={{
            boxSizing: "border-box",
            WebkitTapHighlightColor: "transparent",
            position: "relative",
          }}
        >
          <a
            href="https://demo-morata.myshopify.com/#"
            style={{
              boxSizing: "border-box",
              WebkitTapHighlightColor: "transparent",
              textDecoration: "none",
              transition: "all 400ms linear 0ms",
              margin: "0px",
              color: "#ffffff",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "15px",
              outline: "0px",
            }}
          >
            {" "}
            About Us{" "}
          </a>
        </li>
        <li
          style={{
            boxSizing: "border-box",
            WebkitTapHighlightColor: "transparent",
            position: "relative",
          }}
        >
          <a
            href="https://demo-morata.myshopify.com/#"
            style={{
              boxSizing: "border-box",
              WebkitTapHighlightColor: "transparent",
              textDecoration: "none",
              transition: "all 400ms linear 0ms",
              margin: "0px",
              color: "#ffffff",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "15px",
              outline: "0px",
            }}
          >
            {" "}
            Order Tracking{" "}
          </a>
        </li>
        <li
          style={{
            boxSizing: "border-box",
            WebkitTapHighlightColor: "transparent",
            position: "relative",
          }}
        >
          <a
            href="https://demo-morata.myshopify.com/#"
            style={{
              boxSizing: "border-box",
              WebkitTapHighlightColor: "transparent",
              textDecoration: "none",
              transition: "all 400ms linear 0ms",
              margin: "0px",
              color: "#ffffff",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "15px",
              outline: "0px",
            }}
          >
            {" "}
            Contact Us{" "}
          </a>
        </li>
        <li
          style={{
            boxSizing: "border-box",
            WebkitTapHighlightColor: "transparent",
            position: "relative",
          }}
        >
          <a
            href="https://demo-morata.myshopify.com/#"
            style={{
              boxSizing: "border-box",
              WebkitTapHighlightColor: "transparent",
              textDecoration: "none",
              transition: "all 400ms linear 0ms",
              margin: "0px",
              color: "#ffffff",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "15px",
              outline: "0px",
            }}
          >
            {" "}
            FAQs{" "}
          </a>
        </li>
      </ul>
    </div>
  </>  )
}

export default RightNav