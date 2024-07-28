import React from 'react'

const NavBar = () => {
  return (
    <>
    <div
      className="container"
      style={{
        boxSizing: "border-box",
        WebkitTapHighlightColor: "transparent",
        width: "100%",
        paddingRight: "10px",
        paddingLeft: "10px",
        marginRight: "auto",
        marginLeft: "auto",
        maxWidth: "1730px",
        background:"black"
      }}
    >
      <div
        className="row row-0"
        style={{
          boxSizing: "border-box",
          WebkitTapHighlightColor: "transparent",
          display: "flex",
          flexWrap: "wrap",
          margin: "0px",
          marginRight: "0px",
          marginLeft: "0px",
        }}
      >
        <div
          className="col-auto vertical_menu init"
          style={{
            boxSizing: "border-box",
            WebkitTapHighlightColor: "transparent",
            flex: "0 0 auto",
            width: "auto",
            maxWidth: "none",
            padding: "0px",
            paddingRight: "0px",
            paddingLeft: "0px",
            position: "relative",
          }}
        >
          <div
            className="title_vertical_menu click flex"
            style={{
              boxSizing: "border-box",
              WebkitTapHighlightColor: "transparent",
              display: "flex",
              margin: "0px",
              gap: "10px",
              lineHeight: 1,
              alignItems: "center",
              height: "55px",
              cursor: "pointer",
              width: "300px",
              position: "relative",
            }}
          >
            <span
              className="icon-left"
              style={{
                boxSizing: "border-box",
                WebkitTapHighlightColor: "transparent",
                fontVariant: "normal",
                fontStyle: "normal",
                fontWeight: 400,
                textTransform: "none",
                lineHeight: 1,
                WebkitFontSmoothing: "antialiased",
                fontFamily: "icon-dukamarket",
              }}
            >
              <svg
                height="13"
                width="18"
                fill="none"
                viewBox="0 0 18 13"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  boxSizing: "border-box",
                  WebkitTapHighlightColor: "transparent",
                  width: "20px",
                  fill: "#ffffff",
                }}
              >
                <path
                  d="M1.5 7.5H16.5C16.7344 7.5 16.9297 7.42188 17.0859 7.26562C17.2552 7.09635 17.3398 6.89453 17.3398 6.66016C17.3398 6.4388 17.2552 6.25 17.0859 6.09375C16.9297 5.92448 16.7344 5.83984 16.5 5.83984H1.5C1.26562 5.83984 1.0638 5.92448 0.894531 6.09375C0.738281 6.25 0.660156 6.4388 0.660156 6.66016C0.660156 6.89453 0.738281 7.09635 0.894531 7.26562C1.0638 7.42188 1.26562 7.5 1.5 7.5ZM1.5 2.5H16.5C16.7344 2.5 16.9297 2.42188 17.0859 2.26562C17.2552 2.09635 17.3398 1.89453 17.3398 1.66016C17.3398 1.4388 17.2552 1.25 17.0859 1.09375C16.9297 0.924479 16.7344 0.839844 16.5 0.839844H1.5C1.26562 0.839844 1.0638 0.924479 0.894531 1.09375C0.738281 1.25 0.660156 1.4388 0.660156 1.66016C0.660156 1.89453 0.738281 2.09635 0.894531 2.26562C1.0638 2.42188 1.26562 2.5 1.5 2.5ZM1.5 12.5H16.5C16.7344 12.5 16.9297 12.4219 17.0859 12.2656C17.2552 12.0964 17.3398 11.8945 17.3398 11.6602C17.3398 11.4388 17.2552 11.25 17.0859 11.0938C16.9297 10.9245 16.7344 10.8398 16.5 10.8398H1.5C1.26562 10.8398 1.0638 10.9245 0.894531 11.0938C0.738281 11.25 0.660156 11.4388 0.660156 11.6602C0.660156 11.8945 0.738281 12.0964 0.894531 12.2656C1.0638 12.4219 1.26562 12.5 1.5 12.5Z"
                  fill="#212529"
                  style={{
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                    fill: "#ffffff",
                  }}
                />
              </svg>
            </span>
            <span
              className="title"
              style={{
                boxSizing: "border-box",
                WebkitTapHighlightColor: "transparent",
                margin: "0px",
                color: "#ffffff",
                maxWidth: "100%",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "18px",
                textTransform: "uppercase",
              }}
            >
              Shop By Department
            </span>
          </div>
          <div
            className="list-vertical_menu hide-mobile"
            style={{
              boxSizing: "border-box",
              WebkitTapHighlightColor: "transparent",
              background: "rgb(255, 255, 255)",
              padding: "20px 0px",
              overflow: "hidden",
              borderRadius: "0px 0px 3px 3px",
              transition: "all 0.5s linear 0s",
              position: "absolute",
              top: "55px",
              left: "0px",
              right: "0px",
              zIndex: 9,
              opacity: 0,
              pointerEvents: "none",
              transform: "scale(1, 0)",
              transformOrigin: "0px 0px 0px",
            }}
          >
            <ul
              className="lazy_vertical_menu lazyloaded"
              style={{
                boxSizing: "border-box",
                WebkitTapHighlightColor: "transparent",
                margin: "0px",
                padding: "0px",
                listStyle: "none",
                marginBottom: "0px",
              }}
            >
              <li
                id="item_e8ebc923-7702-4173-a59c-e0d7d44e57d2"
                className="type_mega menu_has_offsets verticalmenu-item verticalmenu-item-has-children first"
                style={{
                  boxSizing: "border-box",
                  WebkitTapHighlightColor: "transparent",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                <a
                  className="cms-item-title"
                  href="https://demo-morata.myshopify.com/collections/computer-desktop"
                  target="_self"
                  style={{
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                    textDecoration: "none",
                    transition: "all 400ms linear 0ms",
                    padding: "0px",
                    borderBottom: "1px solid #ebebeb",
                    gap: "5px",
                    display: "flex",
                    color: "#222222",
                    cursor: "pointer",
                    cssFloat: "none",
                    lineHeight: "40px",
                    fontWeight: 500,
                    fontSize: "14px",
                    position: "relative",
                    outline: "0px",
                  }}
                >
                  {"Computer & Desktop"}
                  <i
                    className="icon_right icon-chevron-right"
                    style={{
                      boxSizing: "border-box",
                      WebkitTapHighlightColor: "transparent",
                      fontVariant: "normal",
                      fontStyle: "normal",
                      fontWeight: 400,
                      textTransform: "none",
                      lineHeight: 1,
                      WebkitFontSmoothing: "antialiased",
                      position: "absolute",
                      right: "0px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      fontSize: "16px",
                      fontFamily: "icon-dukamarket",
                    }}
                  />
                </a>
                <div
                  className="subverticalmenu vertical-menu vertical-menu1"
                  style={{
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                    background: "right bottom no-repeat rgb(255, 255, 255)",
                    padding: "30px",
                    borderRadius: "5px",
                    borderLeft: "1px solid rgb(229, 232, 236)",
                    transition:
                      "opacity 0.5s ease 0s, -webkit-transform 0.5s ease 0s",
                    position: "absolute",
                    top: "0px",
                    left: "100%",
                    visibility: "hidden",
                    display: "block",
                    opacity: 0,
                    boxShadow: "rgba(72, 123, 183, 0.15) 0px 0px 30px",
                    transform: "translate(20px)",
                    overflow: "hidden scroll",
                    height: "100%",
                    width: "800px",
                    backgroundColor: "rgb(255, 255, 255)",
                  }}
                >
                  <div
                    className="cus"
                    style={{
                      boxSizing: "border-box",
                      WebkitTapHighlightColor: "transparent",
                    }}
                  >
                    <div
                      id="bk_e8ebc923-7702-4173-a59c-e0d7d44e57d2"
                      className="row lazy_menu_mega lazyload"
                      style={{
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                        display: "flex",
                        flexWrap: "wrap",
                        marginRight: "-10px",
                        marginLeft: "-10px",
                        alignItems: "flex-start",
                      }}
                    >
                      <div
                        className="loading_bg"
                        style={{
                          boxSizing: "border-box",
                          WebkitTapHighlightColor: "transparent",
                          backgroundSize: "cover",
                          position: "relative",
                          display: "contents",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li
                id="item_8e8e1b81-52d1-4d34-a0be-6ce244523ab4"
                className="type_dropdown menu_has_offsets verticalmenu-item verticalmenu-item-has-children"
                style={{
                  boxSizing: "border-box",
                  WebkitTapHighlightColor: "transparent",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  position: "relative",
                }}
              >
                <a
                  className="cms-item-title"
                  href="https://demo-morata.myshopify.com/collections/laptop-ipad"
                  target="_self"
                  style={{
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                    textDecoration: "none",
                    transition: "all 400ms linear 0ms",
                    padding: "0px",
                    borderBottom: "1px solid #ebebeb",
                    gap: "5px",
                    display: "flex",
                    color: "#222222",
                    cursor: "pointer",
                    cssFloat: "none",
                    lineHeight: "40px",
                    fontWeight: 500,
                    fontSize: "14px",
                    position: "relative",
                    outline: "0px",
                  }}
                >
                  {"Laptop & Ipad"}
                  <i
                    className="icon_right icon-chevron-right"
                    style={{
                      boxSizing: "border-box",
                      WebkitTapHighlightColor: "transparent",
                      fontVariant: "normal",
                      fontStyle: "normal",
                      fontWeight: 400,
                      textTransform: "none",
                      lineHeight: 1,
                      WebkitFontSmoothing: "antialiased",
                      position: "absolute",
                      right: "0px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      fontSize: "16px",
                      fontFamily: "icon-dukamarket",
                    }}
                  />
                </a>
                <div
                  className="subverticalmenu"
                  style={{
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                    background: "right bottom no-repeat rgb(255, 255, 255)",
                    borderLeft: "1px solid rgb(229, 232, 236)",
                    transition:
                      "opacity 0.5s ease 0s, -webkit-transform 0.5s ease 0s",
                    position: "absolute",
                    top: "0px",
                    left: "100%",
                    visibility: "hidden",
                    display: "block",
                    opacity: 0,
                    transform: "translate(20px)",
                    padding: "30px",
                    borderRadius: "5px",
                    width: "260px",
                    boxShadow: "rgba(72, 123, 183, 0.15) 0px 0px 30px",
                  }}
                >
                  <div
                    id="bk_8e8e1b81-52d1-4d34-a0be-6ce244523ab4"
                    className="lazy_menu_mega lazyload"
                    style={{
                      boxSizing: "border-box",
                      WebkitTapHighlightColor: "transparent",
                    }}
                  >
                    <div
                      className="loading_bg"
                      style={{
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                        backgroundSize: "cover",
                        position: "relative",
                        display: "contents",
                      }}
                    />
                  </div>
                </div>
              </li>
              <li
                id="item_1fc80983-49c9-45c0-a4e4-59c3e7682610"
                className="type_mega menu_has_offsets verticalmenu-item verticalmenu-item-has-children"
                style={{
                  boxSizing: "border-box",
                  WebkitTapHighlightColor: "transparent",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                <a
                  className="cms-item-title"
                  href="https://demo-morata.myshopify.com/collections/cameras-photos"
                  target="_self"
                  style={{
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                    textDecoration: "none",
                    transition: "all 400ms linear 0ms",
                    padding: "0px",
                    borderBottom: "1px solid #ebebeb",
                    gap: "5px",
                    display: "flex",
                    color: "#222222",
                    cursor: "pointer",
                    cssFloat: "none",
                    lineHeight: "40px",
                    fontWeight: 500,
                    fontSize: "14px",
                    position: "relative",
                    outline: "0px",
                  }}
                >
                  {"Cameras & Photos"}
                  <i
                    className="icon_right icon-chevron-right"
                    style={{
                      boxSizing: "border-box",
                      WebkitTapHighlightColor: "transparent",
                      fontVariant: "normal",
                      fontStyle: "normal",
                      fontWeight: 400,
                      textTransform: "none",
                      lineHeight: 1,
                      WebkitFontSmoothing: "antialiased",
                      position: "absolute",
                      right: "0px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      fontSize: "16px",
                      fontFamily: "icon-dukamarket",
                    }}
                  />
                </a>
                <div
                  className="subverticalmenu vertical-menu vertical-menu1"
                  style={{
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                    background: "right bottom no-repeat rgb(255, 255, 255)",
                    padding: "30px",
                    borderRadius: "5px",
                    borderLeft: "1px solid rgb(229, 232, 236)",
                    transition:
                      "opacity 0.5s ease 0s, -webkit-transform 0.5s ease 0s",
                    position: "absolute",
                    top: "0px",
                    left: "100%",
                    visibility: "hidden",
                    display: "block",
                    opacity: 0,
                    boxShadow: "rgba(72, 123, 183, 0.15) 0px 0px 30px",
                    transform: "translate(20px)",
                    overflow: "hidden scroll",
                    height: "100%",
                    width: "500px",
                    backgroundColor: "rgb(255, 255, 255)",
                    backgroundImage:
                      'url("https://demo-morata.myshopify.com/cdn/shop/files/bg_menu_500x.png?v=1698913113")',
                  }}
                >
                  <div
                    className="cus"
                    style={{
                      boxSizing: "border-box",
                      WebkitTapHighlightColor: "transparent",
                    }}
                  >
                    <div
                      id="bk_1fc80983-49c9-45c0-a4e4-59c3e7682610"
                      className="row lazy_menu_mega lazyload"
                      style={{
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                        display: "flex",
                        flexWrap: "wrap",
                        marginRight: "-10px",
                        marginLeft: "-10px",
                        alignItems: "flex-start",
                      }}
                    >
                      <div
                        className="loading_bg"
                        style={{
                          boxSizing: "border-box",
                          WebkitTapHighlightColor: "transparent",
                          backgroundSize: "cover",
                          position: "relative",
                          display: "contents",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li
                id="item_c53c46bc-f18a-455b-80a2-c2548098d859"
                className="type_mega menu_has_offsets verticalmenu-item verticalmenu-item-has-children"
                style={{
                  boxSizing: "border-box",
                  WebkitTapHighlightColor: "transparent",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                <a
                  className="cms-item-title"
                  href="https://demo-morata.myshopify.com/collections/smart-phones-tablets"
                  target="_self"
                  style={{
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                    textDecoration: "none",
                    transition: "all 400ms linear 0ms",
                    padding: "0px",
                    borderBottom: "1px solid #ebebeb",
                    gap: "5px",
                    display: "flex",
                    color: "#222222",
                    cursor: "pointer",
                    cssFloat: "none",
                    lineHeight: "40px",
                    fontWeight: 500,
                    fontSize: "14px",
                    position: "relative",
                    outline: "0px",
                  }}
                >
                  {"Smart Phones & Tablets"}
                  <i
                    className="icon_right icon-chevron-right"
                    style={{
                      boxSizing: "border-box",
                      WebkitTapHighlightColor: "transparent",
                      fontVariant: "normal",
                      fontStyle: "normal",
                      fontWeight: 400,
                      textTransform: "none",
                      lineHeight: 1,
                      WebkitFontSmoothing: "antialiased",
                      position: "absolute",
                      right: "0px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      fontSize: "16px",
                      fontFamily: "icon-dukamarket",
                    }}
                  />
                </a>
                <div
                  className="subverticalmenu vertical-menu vertical-menu1"
                  style={{
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                    background: "right bottom no-repeat rgb(255, 255, 255)",
                    padding: "30px",
                    borderRadius: "5px",
                    borderLeft: "1px solid rgb(229, 232, 236)",
                    transition:
                      "opacity 0.5s ease 0s, -webkit-transform 0.5s ease 0s",
                    position: "absolute",
                    top: "0px",
                    left: "100%",
                    visibility: "hidden",
                    display: "block",
                    opacity: 0,
                    boxShadow: "rgba(72, 123, 183, 0.15) 0px 0px 30px",
                    transform: "translate(20px)",
                    overflow: "hidden scroll",
                    height: "100%",
                    width: "800px",
                    backgroundColor: "rgb(255, 255, 255)",
                  }}
                >
                  <div
                    className="cus"
                    style={{
                      boxSizing: "border-box",
                      WebkitTapHighlightColor: "transparent",
                    }}
                  >
                    <div
                      id="bk_c53c46bc-f18a-455b-80a2-c2548098d859"
                      className="row lazy_menu_mega lazyload"
                      style={{
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                        display: "flex",
                        flexWrap: "wrap",
                        marginRight: "-10px",
                        marginLeft: "-10px",
                        alignItems: "flex-start",
                      }}
                    >
                      <div
                        className="loading_bg"
                        style={{
                          boxSizing: "border-box",
                          WebkitTapHighlightColor: "transparent",
                          backgroundSize: "cover",
                          position: "relative",
                          display: "contents",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li
                id="item_22570370-6b60-4181-9fb0-db1bf8580747"
                className="type_mega menu_has_offsets verticalmenu-item verticalmenu-item-has-children"
                style={{
                  boxSizing: "border-box",
                  WebkitTapHighlightColor: "transparent",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                <a
                  className="cms-item-title"
                  href="https://demo-morata.myshopify.com/collections/home-kitchen"
                  target="_self"
                  style={{
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                    textDecoration: "none",
                    transition: "all 400ms linear 0ms",
                    padding: "0px",
                    borderBottom: "1px solid #ebebeb",
                    gap: "5px",
                    display: "flex",
                    color: "#222222",
                    cursor: "pointer",
                    cssFloat: "none",
                    lineHeight: "40px",
                    fontWeight: 500,
                    fontSize: "14px",
                    position: "relative",
                    outline: "0px",
                  }}
                >
                  {"Home & Kitchen"}
                  <i
                    className="icon_right icon-chevron-right"
                    style={{
                      boxSizing: "border-box",
                      WebkitTapHighlightColor: "transparent",
                      fontVariant: "normal",
                      fontStyle: "normal",
                      fontWeight: 400,
                      textTransform: "none",
                      lineHeight: 1,
                      WebkitFontSmoothing: "antialiased",
                      position: "absolute",
                      right: "0px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      fontSize: "16px",
                      fontFamily: "icon-dukamarket",
                    }}
                  />
                </a>
                <div
                  className="subverticalmenu vertical-menu vertical-menu1"
                  style={{
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                    background: "right bottom no-repeat rgb(255, 255, 255)",
                    padding: "30px",
                    borderRadius: "5px",
                    borderLeft: "1px solid rgb(229, 232, 236)",
                    transition:
                      "opacity 0.5s ease 0s, -webkit-transform 0.5s ease 0s",
                    position: "absolute",
                    top: "0px",
                    left: "100%",
                    visibility: "hidden",
                    display: "block",
                    opacity: 0,
                    boxShadow: "rgba(72, 123, 183, 0.15) 0px 0px 30px",
                    transform: "translate(20px)",
                    overflow: "hidden scroll",
                    height: "100%",
                    width: "500px",
                    backgroundColor: "rgb(255, 255, 255)",
                    backgroundImage:
                      'url("https://demo-morata.myshopify.com/cdn/shop/files/bg_menu2_500x.png?v=1698914115")',
                  }}
                >
                  <div
                    className="cus"
                    style={{
                      boxSizing: "border-box",
                      WebkitTapHighlightColor: "transparent",
                    }}
                  >
                    <div
                      id="bk_22570370-6b60-4181-9fb0-db1bf8580747"
                      className="row lazy_menu_mega lazyload"
                      style={{
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                        display: "flex",
                        flexWrap: "wrap",
                        marginRight: "-10px",
                        marginLeft: "-10px",
                        alignItems: "flex-start",
                      }}
                    >
                      <div
                        className="loading_bg"
                        style={{
                          boxSizing: "border-box",
                          WebkitTapHighlightColor: "transparent",
                          backgroundSize: "cover",
                          position: "relative",
                          display: "contents",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li
                id="item_b144f080-e7e6-4ee5-a7a4-2d192937d731"
                className="verticalmenu-item type_simple"
                style={{
                  boxSizing: "border-box",
                  WebkitTapHighlightColor: "transparent",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                <a
                  className="cms-item-title"
                  href="https://demo-morata.myshopify.com/collections/tv-audios"
                  target="_self"
                  style={{
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                    textDecoration: "none",
                    transition: "all 400ms linear 0ms",
                    padding: "0px",
                    borderBottom: "1px solid #ebebeb",
                    gap: "5px",
                    display: "flex",
                    color: "#222222",
                    cursor: "pointer",
                    cssFloat: "none",
                    lineHeight: "40px",
                    fontWeight: 500,
                    fontSize: "14px",
                    position: "relative",
                    outline: "0px",
                  }}
                >
                  {"TV & Audios"}
                </a>
              </li>
              <li
                id="item_95b15b59-cb6a-446a-bec3-97965f900d4b"
                className="verticalmenu-item type_simple"
                style={{
                  boxSizing: "border-box",
                  WebkitTapHighlightColor: "transparent",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                <a
                  className="cms-item-title"
                  href="https://demo-morata.myshopify.com/collections/health-beauty"
                  target="_self"
                  style={{
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                    textDecoration: "none",
                    transition: "all 400ms linear 0ms",
                    padding: "0px",
                    borderBottom: "1px solid #ebebeb",
                    gap: "5px",
                    display: "flex",
                    color: "#222222",
                    cursor: "pointer",
                    cssFloat: "none",
                    lineHeight: "40px",
                    fontWeight: 500,
                    fontSize: "14px",
                    position: "relative",
                    outline: "0px",
                  }}
                >
                  {"Health & Beauty"}
                </a>
              </li>
              <li
                id="item_a5479b73-452c-428b-807c-9fc23e6b7499"
                className="verticalmenu-item type_simple"
                style={{
                  boxSizing: "border-box",
                  WebkitTapHighlightColor: "transparent",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                <a
                  className="cms-item-title"
                  href="https://demo-morata.myshopify.com/collections/watches-eyewear"
                  target="_self"
                  style={{
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                    textDecoration: "none",
                    transition: "all 400ms linear 0ms",
                    padding: "0px",
                    borderBottom: "1px solid #ebebeb",
                    gap: "5px",
                    display: "flex",
                    color: "#222222",
                    cursor: "pointer",
                    cssFloat: "none",
                    lineHeight: "40px",
                    fontWeight: 500,
                    fontSize: "14px",
                    position: "relative",
                    outline: "0px",
                  }}
                >
                  {"Watches & Eyewear"}
                </a>
              </li>
              <li
                id="item_32d188e5-f17e-4047-91a9-0ddd61b80940"
                className="verticalmenu-item type_simple"
                style={{
                  boxSizing: "border-box",
                  WebkitTapHighlightColor: "transparent",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                <a
                  className="cms-item-title"
                  href="https://demo-morata.myshopify.com/#"
                  target="_self"
                  style={{
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                    textDecoration: "none",
                    transition: "all 400ms linear 0ms",
                    padding: "0px",
                    borderBottom: "1px solid #ebebeb",
                    gap: "5px",
                    display: "flex",
                    color: "#222222",
                    cursor: "pointer",
                    cssFloat: "none",
                    lineHeight: "40px",
                    fontWeight: 500,
                    fontSize: "14px",
                    position: "relative",
                    outline: "0px",
                  }}
                >
                  {"Top Deals"}
                </a>
              </li>
              <li
                id="item_458e0169-9da4-432a-a257-d375f3e8b8b1"
                className="verticalmenu-item type_simple"
                style={{
                  boxSizing: "border-box",
                  WebkitTapHighlightColor: "transparent",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                <a
                  className="cms-item-title"
                  href="https://demo-morata.myshopify.com/#"
                  target="_self"
                  style={{
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                    textDecoration: "none",
                    transition: "all 400ms linear 0ms",
                    padding: "0px",
                    borderBottom: "1px solid #ebebeb",
                    gap: "5px",
                    display: "flex",
                    color: "#222222",
                    cursor: "pointer",
                    cssFloat: "none",
                    lineHeight: "40px",
                    fontWeight: 500,
                    fontSize: "14px",
                    position: "relative",
                    outline: "0px",
                  }}
                >
                  {"Top Selling Products"}
                </a>
              </li>
              <li
                id="item_cdf00ca1-1c7e-4be1-b44f-59f861f0d1ed"
                className="verticalmenu-item type_simple"
                style={{
                  boxSizing: "border-box",
                  WebkitTapHighlightColor: "transparent",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                <a
                  className="cms-item-title"
                  href="https://demo-morata.myshopify.com/#"
                  target="_self"
                  style={{
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                    textDecoration: "none",
                    transition: "all 400ms linear 0ms",
                    padding: "0px",
                    gap: "5px",
                    display: "flex",
                    color: "#222222",
                    cursor: "pointer",
                    cssFloat: "none",
                    lineHeight: "40px",
                    fontWeight: 500,
                    fontSize: "14px",
                    position: "relative",
                    borderBottom: "none",
                    outline: "0px",
                  }}
                >
                  {"Top Featured Products"}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="ps-static col"
          style={{
            boxSizing: "border-box",
            WebkitTapHighlightColor: "transparent",
            width: "100%",
            paddingRight: "10px",
            paddingLeft: "10px",
            flexBasis: "0px",
            flexGrow: 1,
            maxWidth: "100%",
            position: "static",
          }}
        >
          <div
            className="header-nav-inner"
            style={{
              boxSizing: "border-box",
              WebkitTapHighlightColor: "transparent",
            }}
          >
            <div
              className="box-header-nav"
              style={{
                boxSizing: "border-box",
                WebkitTapHighlightColor: "transparent",
              }}
            >
              <div
                className="container-wapper"
                style={{
                  boxSizing: "border-box",
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                <ul
                  id="menu-main-menu"
                  className="main-menu clone-main-menu"
                  style={{
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px",
                    display: "inline-flex",
                    flexWrap: "wrap",
                  }}
                >
                  <li
                    id="item_56f215e8-e033-46a2-8e94-91f5fe1b1152"
                    className="type_mega menu-item has-children pos_rel"
                    style={{
                      boxSizing: "border-box",
                      WebkitTapHighlightColor: "transparent",
                      display: "inline-block",
                      cssFloat: "none",
                      padding: "0px 15px",
                      position: "relative",
                    }}
                  >
                    <a
                      className="cms-item-title"
                      href="https://demo-morata.myshopify.com/#"
                      target="_self"
                      style={{
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                        textDecoration: "none",
                        transition: "all 400ms linear 0ms",
                        padding: "0px",
                        display: "inline-block",
                        color: "#ffffff",
                        cursor: "pointer",
                        cssFloat: "none",
                        position: "relative",
                        fontWeight: 500,
                        fontSize: "14px",
                        textTransform: "uppercase",
                        lineHeight: "55px",
                        outline: "0px",
                      }}
                    >
                      {"Home"}
                      <i
                        className="icon-chevron-down"
                        style={{
                          boxSizing: "border-box",
                          WebkitTapHighlightColor: "transparent",
                          fontVariant: "normal",
                          fontStyle: "normal",
                          fontWeight: 400,
                          textTransform: "none",
                          lineHeight: 1,
                          WebkitFontSmoothing: "antialiased",
                          fontSize: "12px",
                          fontFamily: "icon-dukamarket",
                        }}
                      />
                    </a>
                    {/* <div
                      className="submenu mega-menu mega-menu1"
                      style={{
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                        transition:
                          "opacity 0.5s ease 0s, visibility 0.5s ease 0s, transform 0.5s ease 0s, -webkit-transform 0.5s ease 0s",
                        borderRadius: "0px 0px 5px 5px",
                        // position: "absolute",
                        zIndex: 100,
                        pointerEvents: "none",
                        top: "100%",
                        textAlign: "left",
                        clip: "rect(1px, 1px, 1px, 1px)",
                        boxShadow: "rgba(72, 123, 183, 0.15) 0px 0px 30px",
                        padding: "30px",
                        margin: "0px auto",
                        left: "0px",
                        right: "0px",
                        transform: "translateY(15px)",
                        backgroundRepeat: "no-repeat",
                        width: "500px",
                        backgroundColor: "rgb(255, 255, 255)",
                      }}
                    >
                      <div
                        className="cus"
                        style={{
                          boxSizing: "border-box",
                          WebkitTapHighlightColor: "transparent",
                        }}
                      >
                        <div
                          id="bk_56f215e8-e033-46a2-8e94-91f5fe1b1152"
                          className="row lazy_menu_mega lazyloaded"
                          style={{
                            boxSizing: "border-box",
                            WebkitTapHighlightColor: "transparent",
                            display: "flex",
                            flexWrap: "wrap",
                            marginRight: "-10px",
                            marginLeft: "-10px",
                          }}
                        >
                          <div
                            id="bk_6f4e4b71-6db6-4e84-8af3-6e74e231c457"
                            className="type_link2 menu-item col-lg-6 col-md-12 col-sm-12"
                            style={{
                              boxSizing: "border-box",
                              WebkitTapHighlightColor: "transparent",
                              width: "100%",
                              paddingRight: "10px",
                              paddingLeft: "10px",
                              flex: "0 0 100%",
                              maxWidth: "50%",
                              listStyle: "none",
                              display: "list-item",
                              position: "relative",
                            }}
                          >
                            <div
                              className="menu-item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                listStyle: "none",
                                display: "list-item",
                                position: "relative",
                              }}
                            >
                              <a
                                href="https://demo-morata.myshopify.com/?preview_theme_id=162558673214"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  textDecoration: "none",
                                  transition: "all 400ms linear 0ms",
                                  padding: "0px",
                                  display: "block",
                                  color: "#888888",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                  lineHeight: "30px",
                                  outline: "0px",
                                }}
                              >
                                {"Home 1"}
                              </a>
                            </div>
                            <div
                              className="menu-item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                listStyle: "none",
                                display: "list-item",
                                position: "relative",
                              }}
                            >
                              <a
                                href="https://demo-morata.myshopify.com/?preview_theme_id=162679652670"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  textDecoration: "none",
                                  transition: "all 400ms linear 0ms",
                                  padding: "0px",
                                  display: "block",
                                  color: "#888888",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                  lineHeight: "30px",
                                  outline: "0px",
                                }}
                              >
                                {"Home 2"}
                              </a>
                            </div>
                            <div
                              className="menu-item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                listStyle: "none",
                                display: "list-item",
                                position: "relative",
                              }}
                            >
                              <a
                                href="https://demo-morata.myshopify.com/?preview_theme_id=162770125118"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  textDecoration: "none",
                                  transition: "all 400ms linear 0ms",
                                  padding: "0px",
                                  display: "block",
                                  color: "#888888",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                  lineHeight: "30px",
                                  outline: "0px",
                                }}
                              >
                                {"Home 3"}
                              </a>
                            </div>
                            <div
                              className="menu-item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                listStyle: "none",
                                display: "list-item",
                                position: "relative",
                              }}
                            >
                              <a
                                href="https://demo-morata.myshopify.com/?preview_theme_id=162777071934"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  textDecoration: "none",
                                  transition: "all 400ms linear 0ms",
                                  padding: "0px",
                                  display: "block",
                                  color: "#888888",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                  lineHeight: "30px",
                                  outline: "0px",
                                }}
                              >
                                {"Home 4"}
                              </a>
                            </div>
                            <div
                              className="menu-item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                listStyle: "none",
                                display: "list-item",
                                position: "relative",
                              }}
                            >
                              <a
                                href="https://demo-morata.myshopify.com/?preview_theme_id=162911715646"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  textDecoration: "none",
                                  transition: "all 400ms linear 0ms",
                                  padding: "0px",
                                  display: "block",
                                  color: "#888888",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                  lineHeight: "30px",
                                  outline: "0px",
                                }}
                              >
                                {"Home 5"}
                              </a>
                            </div>
                            <div
                              className="menu-item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                listStyle: "none",
                                display: "list-item",
                                position: "relative",
                              }}
                            >
                              <a
                                href="https://demo-morata.myshopify.com/?preview_theme_id=163000713534"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  textDecoration: "none",
                                  transition: "all 400ms linear 0ms",
                                  padding: "0px",
                                  display: "block",
                                  color: "#888888",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                  lineHeight: "30px",
                                  outline: "0px",
                                }}
                              >
                                {"Home 6"}
                              </a>
                            </div>
                            <div
                              className="menu-item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                listStyle: "none",
                                display: "list-item",
                                position: "relative",
                              }}
                            >
                              <a
                                href="https://demo-morata.myshopify.com/?preview_theme_id=163076538686"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  textDecoration: "none",
                                  transition: "all 400ms linear 0ms",
                                  padding: "0px",
                                  display: "block",
                                  color: "#888888",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                  lineHeight: "30px",
                                  outline: "0px",
                                }}
                              >
                                {"Home 7"}
                              </a>
                            </div>
                            <div
                              className="menu-item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                listStyle: "none",
                                display: "list-item",
                                position: "relative",
                              }}
                            >
                              <a
                                href="https://demo-morata.myshopify.com/?preview_theme_id=163161571646"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  textDecoration: "none",
                                  transition: "all 400ms linear 0ms",
                                  padding: "0px",
                                  display: "block",
                                  color: "#888888",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                  lineHeight: "30px",
                                  outline: "0px",
                                }}
                              >
                                {"Home 8"}
                              </a>
                            </div>
                            <div
                              className="menu-item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                listStyle: "none",
                                display: "list-item",
                                position: "relative",
                              }}
                            >
                              <a
                                href="https://demo-morata.myshopify.com/?preview_theme_id=163183788350"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  textDecoration: "none",
                                  transition: "all 400ms linear 0ms",
                                  padding: "0px",
                                  display: "block",
                                  color: "#888888",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                  lineHeight: "30px",
                                  outline: "0px",
                                }}
                              >
                                {"Home 9"}
                              </a>
                            </div>
                            <div
                              className="menu-item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                listStyle: "none",
                                display: "list-item",
                                position: "relative",
                              }}
                            >
                              <a
                                href="https://demo-morata.myshopify.com/?preview_theme_id=163186639166"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  textDecoration: "none",
                                  transition: "all 400ms linear 0ms",
                                  padding: "0px",
                                  display: "block",
                                  color: "#888888",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                  lineHeight: "30px",
                                  outline: "0px",
                                }}
                              >
                                {"Home 10"}
                              </a>
                            </div>
                            <div
                              className="menu-item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                listStyle: "none",
                                display: "list-item",
                                position: "relative",
                              }}
                            >
                              <a
                                href="https://demo-morata.myshopify.com/?preview_theme_id=163284255038"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  textDecoration: "none",
                                  transition: "all 400ms linear 0ms",
                                  padding: "0px",
                                  display: "block",
                                  color: "#888888",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                  lineHeight: "30px",
                                  outline: "0px",
                                }}
                              >
                                {"Home 11"}
                              </a>
                            </div>
                            <div
                              className="menu-item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                listStyle: "none",
                                display: "list-item",
                                position: "relative",
                              }}
                            >
                              <a
                                href="https://demo-morata.myshopify.com/?preview_theme_id=163318923582"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  textDecoration: "none",
                                  transition: "all 400ms linear 0ms",
                                  padding: "0px",
                                  display: "block",
                                  color: "#888888",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                  lineHeight: "30px",
                                  outline: "0px",
                                }}
                              >
                                {"Home 12"}
                              </a>
                            </div>
                          </div>
                          <div
                            id="bk_80e7da7d-b7b8-4deb-a6ee-1295b46c0657"
                            className="type_link2 menu-item col-lg-6 col-md-12 col-sm-12"
                            style={{
                              boxSizing: "border-box",
                              WebkitTapHighlightColor: "transparent",
                              width: "100%",
                              paddingRight: "10px",
                              paddingLeft: "10px",
                              flex: "0 0 100%",
                              maxWidth: "50%",
                              listStyle: "none",
                              display: "list-item",
                              position: "relative",
                            }}
                          >
                            <div
                              className="menu-item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                listStyle: "none",
                                display: "list-item",
                                position: "relative",
                              }}
                            >
                              <a
                                href="https://demo-morata.myshopify.com/?preview_theme_id=163443474750"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  textDecoration: "none",
                                  transition: "all 400ms linear 0ms",
                                  padding: "0px",
                                  display: "block",
                                  color: "#888888",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                  lineHeight: "30px",
                                  outline: "0px",
                                }}
                              >
                                {"Home 13"}
                              </a>
                            </div>
                            <div
                              className="menu-item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                listStyle: "none",
                                display: "list-item",
                                position: "relative",
                              }}
                            >
                              <a
                                href="https://demo-morata.myshopify.com/?preview_theme_id=163450028350"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  textDecoration: "none",
                                  transition: "all 400ms linear 0ms",
                                  padding: "0px",
                                  display: "block",
                                  color: "#888888",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                  lineHeight: "30px",
                                  outline: "0px",
                                }}
                              >
                                {"Home 14"}
                              </a>
                            </div>
                            <div
                              className="menu-item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                listStyle: "none",
                                display: "list-item",
                                position: "relative",
                              }}
                            >
                              <a
                                href="https://demo-morata.myshopify.com/?preview_theme_id=163458679102"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  textDecoration: "none",
                                  transition: "all 400ms linear 0ms",
                                  padding: "0px",
                                  display: "block",
                                  color: "#888888",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                  lineHeight: "30px",
                                  outline: "0px",
                                }}
                              >
                                {"Home 15"}
                              </a>
                            </div>
                            <div
                              className="menu-item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                listStyle: "none",
                                display: "list-item",
                                position: "relative",
                              }}
                            >
                              <a
                                href="https://demo-morata.myshopify.com/?preview_theme_id=163474538814"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  textDecoration: "none",
                                  transition: "all 400ms linear 0ms",
                                  padding: "0px",
                                  display: "block",
                                  color: "#888888",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                  lineHeight: "30px",
                                  outline: "0px",
                                }}
                              >
                                {"Home 16"}
                              </a>
                            </div>
                            <div
                              className="menu-item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                listStyle: "none",
                                display: "list-item",
                                position: "relative",
                              }}
                            >
                              <a
                                href="https://demo-morata.myshopify.com/?preview_theme_id=163482173758"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  textDecoration: "none",
                                  transition: "all 400ms linear 0ms",
                                  padding: "0px",
                                  display: "block",
                                  color: "#888888",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                  lineHeight: "30px",
                                  outline: "0px",
                                }}
                              >
                                {"Home 17"}
                              </a>
                            </div>
                            <div
                              className="menu-item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                listStyle: "none",
                                display: "list-item",
                                position: "relative",
                              }}
                            >
                              <a
                                href="https://demo-morata.myshopify.com/?preview_theme_id=163502555454"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  textDecoration: "none",
                                  transition: "all 400ms linear 0ms",
                                  padding: "0px",
                                  display: "block",
                                  color: "#888888",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                  lineHeight: "30px",
                                  outline: "0px",
                                }}
                              >
                                {"Home 18"}
                              </a>
                            </div>
                            <div
                              className="menu-item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                listStyle: "none",
                                display: "list-item",
                                position: "relative",
                              }}
                            >
                              <a
                                href="https://demo-morata.myshopify.com/?preview_theme_id=163562717502"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  textDecoration: "none",
                                  transition: "all 400ms linear 0ms",
                                  padding: "0px",
                                  display: "block",
                                  color: "#888888",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                  lineHeight: "30px",
                                  outline: "0px",
                                }}
                              >
                                {"Home 19"}
                              </a>
                            </div>
                            <div
                              className="menu-item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                listStyle: "none",
                                display: "list-item",
                                position: "relative",
                              }}
                            >
                              <a
                                href="https://demo-morata.myshopify.com/?preview_theme_id=163618914622"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  textDecoration: "none",
                                  transition: "all 400ms linear 0ms",
                                  padding: "0px",
                                  display: "block",
                                  color: "#888888",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                  lineHeight: "30px",
                                  outline: "0px",
                                }}
                              >
                                {"Home 20"}
                              </a>
                            </div>
                            <div
                              className="menu-item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                listStyle: "none",
                                display: "list-item",
                                position: "relative",
                              }}
                            >
                              <a
                                href="https://demo-morata-2.myshopify.com/?preview_theme_id=163770499363"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  textDecoration: "none",
                                  transition: "all 400ms linear 0ms",
                                  padding: "0px",
                                  display: "block",
                                  color: "#888888",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                  lineHeight: "30px",
                                  outline: "0px",
                                }}
                              >
                                {"Home 21"}
                              </a>
                            </div>
                            <div
                              className="menu-item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                listStyle: "none",
                                display: "list-item",
                                position: "relative",
                              }}
                            >
                              <a
                                href="https://demo-morata-2.myshopify.com/?preview_theme_id=163772825891"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  textDecoration: "none",
                                  transition: "all 400ms linear 0ms",
                                  padding: "0px",
                                  display: "block",
                                  color: "#888888",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                  lineHeight: "30px",
                                  outline: "0px",
                                }}
                              >
                                {"Home 22"}
                              </a>
                            </div>
                            <div
                              className="menu-item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                listStyle: "none",
                                display: "list-item",
                                position: "relative",
                              }}
                            >
                              <a
                                href="https://demo-morata-2.myshopify.com/?preview_theme_id=163799662883"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  textDecoration: "none",
                                  transition: "all 400ms linear 0ms",
                                  padding: "0px",
                                  display: "block",
                                  color: "#888888",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                  lineHeight: "30px",
                                  outline: "0px",
                                }}
                              >
                                {"Home 23"}
                              </a>
                            </div>
                            <div
                              className="menu-item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                listStyle: "none",
                                display: "list-item",
                                position: "relative",
                              }}
                            >
                              <a
                                href="https://demo-morata-2.myshopify.com/?preview_theme_id=163805298979"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  textDecoration: "none",
                                  transition: "all 400ms linear 0ms",
                                  padding: "0px",
                                  display: "block",
                                  color: "#888888",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                  lineHeight: "30px",
                                  outline: "0px",
                                }}
                              >
                                {"Home 24"}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </li>
                  <li
                    id="item_2edb69f1-946f-44fb-9516-b508ad1dbadc"
                    className="type_mega menu-item has-children"
                    style={{
                      boxSizing: "border-box",
                      WebkitTapHighlightColor: "transparent",
                      display: "inline-block",
                      cssFloat: "none",
                      padding: "0px 15px",
                      position: "static",
                    }}
                  >
                    <a
                      className="cms-item-title"
                      href="https://demo-morata.myshopify.com/collections"
                      target="_self"
                      style={{
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                        textDecoration: "none",
                        transition: "all 400ms linear 0ms",
                        padding: "0px",
                        display: "inline-block",
                        color: "#ffffff",
                        cursor: "pointer",
                        cssFloat: "none",
                        position: "relative",
                        fontWeight: 500,
                        fontSize: "14px",
                        textTransform: "uppercase",
                        lineHeight: "55px",
                        outline: "0px",
                      }}
                    >
                      {"Shop"}
                      <i
                        className="icon-chevron-down"
                        style={{
                          boxSizing: "border-box",
                          WebkitTapHighlightColor: "transparent",
                          fontVariant: "normal",
                          fontStyle: "normal",
                          fontWeight: 400,
                          textTransform: "none",
                          lineHeight: 1,
                          WebkitFontSmoothing: "antialiased",
                          fontSize: "12px",
                          fontFamily: "icon-dukamarket",
                        }}
                      />
                    </a>
                    {/* <div
                      className="submenu mega-menu mega-menu1"
                      style={{
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                        transition:
                          "opacity 0.5s ease 0s, visibility 0.5s ease 0s, transform 0.5s ease 0s, -webkit-transform 0.5s ease 0s",
                        borderRadius: "0px 0px 5px 5px",
                        // position: "absolute",
                        zIndex: 100,
                        pointerEvents: "none",
                        top: "100%",
                        textAlign: "left",
                        clip: "rect(1px, 1px, 1px, 1px)",
                        boxShadow: "rgba(72, 123, 183, 0.15) 0px 0px 30px",
                        padding: "30px",
                        margin: "0px auto",
                        left: "0px",
                        right: "0px",
                        transform: "translateY(15px)",
                        backgroundRepeat: "no-repeat",
                        width: "1200px",
                        backgroundColor: "rgb(255, 255, 255)",
                      }}
                    >
                      <div
                        className="cus"
                        style={{
                          boxSizing: "border-box",
                          WebkitTapHighlightColor: "transparent",
                        }}
                      >
                        <div
                          id="bk_2edb69f1-946f-44fb-9516-b508ad1dbadc"
                          className="row lazy_menu_mega lazyloaded"
                          style={{
                            boxSizing: "border-box",
                            WebkitTapHighlightColor: "transparent",
                            display: "flex",
                            flexWrap: "wrap",
                            marginRight: "-10px",
                            marginLeft: "-10px",
                          }}
                        >
                          <div
                            id="bk_cc1ec0f5-91e2-4b61-a17b-8821a0fb0b57"
                            className="type_link menu-item col-lg-3 col-md-12 col-sm-12"
                            style={{
                              boxSizing: "border-box",
                              WebkitTapHighlightColor: "transparent",
                              width: "100%",
                              paddingRight: "10px",
                              paddingLeft: "10px",
                              flex: "0 0 100%",
                              maxWidth: "25%",
                              listStyle: "none",
                              display: "list-item",
                              position: "relative",
                            }}
                          >
                            <h3
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                margin: "0px",
                                lineHeight: 1,
                                color: "#222222",
                                fontFamily: "Rubik, sans-serif",
                                fontWeight: 500,
                                marginBottom: "15px",
                                position: "relative",
                              }}
                            >
                              <a
                                className="heading"
                                href="https://demo-morata.myshopify.com/#"
                                target="_self"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  textDecoration: "none",
                                  transition: "all 400ms linear 0ms",
                                  padding: "0px",
                                  display: "block",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  color: "#222222",
                                  fontWeight: 500,
                                  fontSize: "16px",
                                  lineHeight: "18px",
                                  outline: "0px",
                                }}
                              >
                                {"Shop Layout"}
                              </a>
                            </h3>
                            <ul
                              className="sub-column"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                margin: "0px",
                                listStyle: "none",
                                padding: "0px",
                                paddingLeft: "0px",
                              }}
                            >
                              <li
                                className="menu-item"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  listStyle: "none",
                                  display: "list-item",
                                  position: "relative",
                                }}
                              >
                                <a
                                  href="https://demo-morata.myshopify.com/collections"
                                  style={{
                                    boxSizing: "border-box",
                                    WebkitTapHighlightColor: "transparent",
                                    textDecoration: "none",
                                    transition: "all 400ms linear 0ms",
                                    display: "block",
                                    color: "#888888",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    lineHeight: "30px",
                                    padding: "0px",
                                    textTransform: "capitalize",
                                    outline: "0px",
                                    backgroundColor: "transparent",
                                  }}
                                >
                                  Shop Default
                                </a>
                              </li>
                              <li
                                className="menu-item"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  listStyle: "none",
                                  display: "list-item",
                                  position: "relative",
                                }}
                              >
                                <a
                                  href="https://demo-morata.myshopify.com/collections/all/?preview_theme_id=162558673214"
                                  style={{
                                    boxSizing: "border-box",
                                    WebkitTapHighlightColor: "transparent",
                                    textDecoration: "none",
                                    transition: "all 400ms linear 0ms",
                                    display: "block",
                                    color: "#888888",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    lineHeight: "30px",
                                    padding: "0px",
                                    textTransform: "capitalize",
                                    outline: "0px",
                                    backgroundColor: "transparent",
                                  }}
                                >
                                  Filter on the left
                                </a>
                              </li>
                              <li
                                className="menu-item"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  listStyle: "none",
                                  display: "list-item",
                                  position: "relative",
                                }}
                              >
                                <a
                                  href="https://demo-morata.myshopify.com/collections/all/?preview_theme_id=162770125118"
                                  style={{
                                    boxSizing: "border-box",
                                    WebkitTapHighlightColor: "transparent",
                                    textDecoration: "none",
                                    transition: "all 400ms linear 0ms",
                                    display: "block",
                                    color: "#888888",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    lineHeight: "30px",
                                    padding: "0px",
                                    textTransform: "capitalize",
                                    outline: "0px",
                                    backgroundColor: "transparent",
                                  }}
                                >
                                  Filter on the Right
                                </a>
                              </li>
                              <li
                                className="menu-item"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  listStyle: "none",
                                  display: "list-item",
                                  position: "relative",
                                }}
                              >
                                <a
                                  href="https://demo-morata.myshopify.com/collections/all/?preview_theme_id=162911715646"
                                  style={{
                                    boxSizing: "border-box",
                                    WebkitTapHighlightColor: "transparent",
                                    textDecoration: "none",
                                    transition: "all 400ms linear 0ms",
                                    display: "block",
                                    color: "#888888",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    lineHeight: "30px",
                                    padding: "0px",
                                    textTransform: "capitalize",
                                    outline: "0px",
                                    backgroundColor: "transparent",
                                  }}
                                >
                                  Filter on top
                                </a>
                              </li>
                              <li
                                className="menu-item"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  listStyle: "none",
                                  display: "list-item",
                                  position: "relative",
                                }}
                              >
                                <a
                                  href="https://demo-morata.myshopify.com/collections/all/?preview_theme_id=163000713534"
                                  style={{
                                    boxSizing: "border-box",
                                    WebkitTapHighlightColor: "transparent",
                                    textDecoration: "none",
                                    transition: "all 400ms linear 0ms",
                                    display: "block",
                                    color: "#888888",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    lineHeight: "30px",
                                    padding: "0px",
                                    textTransform: "capitalize",
                                    outline: "0px",
                                    backgroundColor: "transparent",
                                  }}
                                >
                                  Popup filter
                                </a>
                              </li>
                              <li
                                className="menu-item"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  listStyle: "none",
                                  display: "list-item",
                                  position: "relative",
                                }}
                              >
                                <a
                                  href="https://demo-morata.myshopify.com/collections/phones-accessories/?preview_theme_id=162558673214"
                                  style={{
                                    boxSizing: "border-box",
                                    WebkitTapHighlightColor: "transparent",
                                    textDecoration: "none",
                                    transition: "all 400ms linear 0ms",
                                    display: "block",
                                    color: "#888888",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    lineHeight: "30px",
                                    padding: "0px",
                                    textTransform: "capitalize",
                                    outline: "0px",
                                    backgroundColor: "transparent",
                                  }}
                                >
                                  Top banner
                                </a>
                              </li>
                              <li
                                className="menu-item"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  listStyle: "none",
                                  display: "list-item",
                                  position: "relative",
                                }}
                              >
                                <a
                                  href="https://demo-morata.myshopify.com/collections/all/?preview_theme_id=162679652670"
                                  style={{
                                    boxSizing: "border-box",
                                    WebkitTapHighlightColor: "transparent",
                                    textDecoration: "none",
                                    transition: "all 400ms linear 0ms",
                                    display: "block",
                                    color: "#888888",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    lineHeight: "30px",
                                    padding: "0px",
                                    textTransform: "capitalize",
                                    outline: "0px",
                                    backgroundColor: "transparent",
                                  }}
                                >
                                  Load More Button
                                </a>
                              </li>
                              <li
                                className="menu-item"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  listStyle: "none",
                                  display: "list-item",
                                  position: "relative",
                                }}
                              >
                                <a
                                  href="https://demo-morata.myshopify.com/collections/phones-accessories/?preview_theme_id=162558673214"
                                  style={{
                                    boxSizing: "border-box",
                                    WebkitTapHighlightColor: "transparent",
                                    textDecoration: "none",
                                    transition: "all 400ms linear 0ms",
                                    display: "block",
                                    color: "#888888",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    lineHeight: "30px",
                                    textTransform: "capitalize",
                                    padding: "0px",
                                    outline: "0px",
                                    backgroundColor: "transparent",
                                  }}
                                >
                                  Infinite Scrolling
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div
                            id="bk_e3ad527e-3670-40a3-b827-3adcc2c529d4"
                            className="type_link menu-item col-lg-3 col-md-12 col-sm-12"
                            style={{
                              boxSizing: "border-box",
                              WebkitTapHighlightColor: "transparent",
                              width: "100%",
                              paddingRight: "10px",
                              paddingLeft: "10px",
                              flex: "0 0 100%",
                              maxWidth: "25%",
                              listStyle: "none",
                              display: "list-item",
                              position: "relative",
                            }}
                          >
                            <h3
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                margin: "0px",
                                lineHeight: 1,
                                color: "#222222",
                                fontFamily: "Rubik, sans-serif",
                                fontWeight: 500,
                                marginBottom: "15px",
                                position: "relative",
                              }}
                            >
                              <a
                                className="heading"
                                href="https://demo-morata.myshopify.com/#"
                                target="_self"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  textDecoration: "none",
                                  transition: "all 400ms linear 0ms",
                                  padding: "0px",
                                  display: "block",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  color: "#222222",
                                  fontWeight: 500,
                                  fontSize: "16px",
                                  lineHeight: "18px",
                                  outline: "0px",
                                }}
                              >
                                {"Product Type"}
                              </a>
                            </h3>
                            <ul
                              className="sub-column"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                margin: "0px",
                                listStyle: "none",
                                padding: "0px",
                                paddingLeft: "0px",
                              }}
                            >
                              <li
                                className="menu-item"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  listStyle: "none",
                                  display: "list-item",
                                  position: "relative",
                                }}
                              >
                                <a
                                  href="https://demo-morata.myshopify.com/products/maisimila-scream/?preview_theme_id=162770125118"
                                  style={{
                                    boxSizing: "border-box",
                                    WebkitTapHighlightColor: "transparent",
                                    textDecoration: "none",
                                    transition: "all 400ms linear 0ms",
                                    display: "block",
                                    color: "#888888",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    lineHeight: "30px",
                                    padding: "0px",
                                    textTransform: "capitalize",
                                    outline: "0px",
                                    backgroundColor: "transparent",
                                  }}
                                >
                                  Product Default
                                </a>
                              </li>
                              <li
                                className="menu-item"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  listStyle: "none",
                                  display: "list-item",
                                  position: "relative",
                                }}
                              >
                                <a
                                  href="https://demo-morata.myshopify.com/products/proenza-schouler-white-label-17/?preview_theme_id=162770125118"
                                  style={{
                                    boxSizing: "border-box",
                                    WebkitTapHighlightColor: "transparent",
                                    textDecoration: "none",
                                    transition: "all 400ms linear 0ms",
                                    display: "block",
                                    color: "#888888",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    lineHeight: "30px",
                                    padding: "0px",
                                    textTransform: "capitalize",
                                    outline: "0px",
                                    backgroundColor: "transparent",
                                  }}
                                >
                                  Product Variable
                                </a>
                              </li>
                              <li
                                className="menu-item"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  listStyle: "none",
                                  display: "list-item",
                                  position: "relative",
                                }}
                              >
                                <a
                                  href="https://demo-morata.myshopify.com/products/proenza-schouler-white-label-16"
                                  style={{
                                    boxSizing: "border-box",
                                    WebkitTapHighlightColor: "transparent",
                                    textDecoration: "none",
                                    transition: "all 400ms linear 0ms",
                                    display: "block",
                                    color: "#888888",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    lineHeight: "30px",
                                    padding: "0px",
                                    textTransform: "capitalize",
                                    outline: "0px",
                                    backgroundColor: "transparent",
                                  }}
                                >
                                  Product Grouped
                                </a>
                              </li>
                              <li
                                className="menu-item"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  listStyle: "none",
                                  display: "list-item",
                                  position: "relative",
                                }}
                              >
                                <a
                                  href="https://demo-morata.myshopify.com/products/blink-home-security-camera-system"
                                  style={{
                                    boxSizing: "border-box",
                                    WebkitTapHighlightColor: "transparent",
                                    textDecoration: "none",
                                    transition: "all 400ms linear 0ms",
                                    display: "block",
                                    color: "#888888",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    lineHeight: "30px",
                                    padding: "0px",
                                    textTransform: "capitalize",
                                    outline: "0px",
                                    backgroundColor: "transparent",
                                  }}
                                >
                                  Product External
                                </a>
                              </li>
                              <li
                                className="menu-item"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  listStyle: "none",
                                  display: "list-item",
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
                                    display: "block",
                                    color: "#888888",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    lineHeight: "30px",
                                    padding: "0px",
                                    textTransform: "capitalize",
                                    outline: "0px",
                                    backgroundColor: "transparent",
                                  }}
                                >
                                  Product Downloadable
                                </a>
                              </li>
                              <li
                                className="menu-item"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  listStyle: "none",
                                  display: "list-item",
                                  position: "relative",
                                }}
                              >
                                <a
                                  href="https://demo-morata-2.myshopify.com/products/cornstalk-dracaena"
                                  style={{
                                    boxSizing: "border-box",
                                    WebkitTapHighlightColor: "transparent",
                                    textDecoration: "none",
                                    transition: "all 400ms linear 0ms",
                                    display: "block",
                                    color: "#888888",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    lineHeight: "30px",
                                    padding: "0px",
                                    textTransform: "capitalize",
                                    outline: "0px",
                                    backgroundColor: "transparent",
                                  }}
                                >
                                  Product Swatch images
                                </a>
                              </li>
                              <li
                                className="menu-item"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  listStyle: "none",
                                  display: "list-item",
                                  position: "relative",
                                }}
                              >
                                <a
                                  href="https://demo-morata.myshopify.com/products/proenza-schouler-white-label-20/?preview_theme_id=163161571646"
                                  style={{
                                    boxSizing: "border-box",
                                    WebkitTapHighlightColor: "transparent",
                                    textDecoration: "none",
                                    transition: "all 400ms linear 0ms",
                                    display: "block",
                                    color: "#888888",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    lineHeight: "30px",
                                    padding: "0px",
                                    textTransform: "capitalize",
                                    outline: "0px",
                                    backgroundColor: "transparent",
                                  }}
                                >
                                  Product 3D
                                </a>
                              </li>
                              <li
                                className="menu-item"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  listStyle: "none",
                                  display: "list-item",
                                  position: "relative",
                                }}
                              >
                                <a
                                  href="https://demo-morata.myshopify.com/products/proenza-schouler-white-label-20/?preview_theme_id=163161571646"
                                  style={{
                                    boxSizing: "border-box",
                                    WebkitTapHighlightColor: "transparent",
                                    textDecoration: "none",
                                    transition: "all 400ms linear 0ms",
                                    display: "block",
                                    color: "#888888",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    lineHeight: "30px",
                                    textTransform: "capitalize",
                                    padding: "0px",
                                    outline: "0px",
                                    backgroundColor: "transparent",
                                  }}
                                >
                                  Product With Video
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div
                            id="bk_eb4b8b78-e314-4cbd-bfd9-fa78f1dbb8d9"
                            className="type_link menu-item col-lg-3 col-md-12 col-sm-12"
                            style={{
                              boxSizing: "border-box",
                              WebkitTapHighlightColor: "transparent",
                              width: "100%",
                              paddingRight: "10px",
                              paddingLeft: "10px",
                              flex: "0 0 100%",
                              maxWidth: "25%",
                              listStyle: "none",
                              display: "list-item",
                              position: "relative",
                            }}
                          >
                            <h3
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                margin: "0px",
                                lineHeight: 1,
                                color: "#222222",
                                fontFamily: "Rubik, sans-serif",
                                fontWeight: 500,
                                marginBottom: "15px",
                                position: "relative",
                              }}
                            >
                              <a
                                className="heading"
                                href="https://demo-morata.myshopify.com/#"
                                target="_self"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  textDecoration: "none",
                                  transition: "all 400ms linear 0ms",
                                  padding: "0px",
                                  display: "block",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  color: "#222222",
                                  fontWeight: 500,
                                  fontSize: "16px",
                                  lineHeight: "18px",
                                  outline: "0px",
                                }}
                              >
                                {"Collection Layout"}
                              </a>
                            </h3>
                            <ul
                              className="sub-column"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                margin: "0px",
                                listStyle: "none",
                                padding: "0px",
                                paddingLeft: "0px",
                              }}
                            >
                              <li
                                className="menu-item"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  listStyle: "none",
                                  display: "list-item",
                                  position: "relative",
                                }}
                              >
                                <a
                                  href="https://demo-morata.myshopify.com/collections/all/?preview_theme_id=163161571646"
                                  style={{
                                    boxSizing: "border-box",
                                    WebkitTapHighlightColor: "transparent",
                                    textDecoration: "none",
                                    transition: "all 400ms linear 0ms",
                                    display: "block",
                                    color: "#888888",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    lineHeight: "30px",
                                    padding: "0px",
                                    textTransform: "capitalize",
                                    outline: "0px",
                                    backgroundColor: "transparent",
                                  }}
                                >
                                  Product 3 column
                                </a>
                              </li>
                              <li
                                className="menu-item"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  listStyle: "none",
                                  display: "list-item",
                                  position: "relative",
                                }}
                              >
                                <a
                                  href="https://demo-morata.myshopify.com/collections/all/?preview_theme_id=162679652670"
                                  style={{
                                    boxSizing: "border-box",
                                    WebkitTapHighlightColor: "transparent",
                                    textDecoration: "none",
                                    transition: "all 400ms linear 0ms",
                                    display: "block",
                                    color: "#888888",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    lineHeight: "30px",
                                    padding: "0px",
                                    textTransform: "capitalize",
                                    outline: "0px",
                                    backgroundColor: "transparent",
                                  }}
                                >
                                  Product 4 column
                                </a>
                              </li>
                              <li
                                className="menu-item"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  listStyle: "none",
                                  display: "list-item",
                                  position: "relative",
                                }}
                              >
                                <a
                                  href="https://demo-morata.myshopify.com/collections/all/?preview_theme_id=162558673214"
                                  style={{
                                    boxSizing: "border-box",
                                    WebkitTapHighlightColor: "transparent",
                                    textDecoration: "none",
                                    transition: "all 400ms linear 0ms",
                                    display: "block",
                                    color: "#888888",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    lineHeight: "30px",
                                    padding: "0px",
                                    textTransform: "capitalize",
                                    outline: "0px",
                                    backgroundColor: "transparent",
                                  }}
                                >
                                  Product 5 column
                                </a>
                              </li>
                              <li
                                className="menu-item"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  listStyle: "none",
                                  display: "list-item",
                                  position: "relative",
                                }}
                              >
                                <a
                                  href="https://demo-morata.myshopify.com/collections/all/?preview_theme_id=163183788350"
                                  style={{
                                    boxSizing: "border-box",
                                    WebkitTapHighlightColor: "transparent",
                                    textDecoration: "none",
                                    transition: "all 400ms linear 0ms",
                                    display: "block",
                                    color: "#888888",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    lineHeight: "30px",
                                    padding: "0px",
                                    textTransform: "capitalize",
                                    outline: "0px",
                                    backgroundColor: "transparent",
                                  }}
                                >
                                  Product List
                                </a>
                              </li>
                              <li
                                className="menu-item"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  listStyle: "none",
                                  display: "list-item",
                                  position: "relative",
                                }}
                              >
                                <a
                                  href="https://demo-morata.myshopify.com/collections/phones-accessories/products/proenza-schouler-white-label-24/?preview_theme_id=162558673214"
                                  style={{
                                    boxSizing: "border-box",
                                    WebkitTapHighlightColor: "transparent",
                                    textDecoration: "none",
                                    transition: "all 400ms linear 0ms",
                                    display: "block",
                                    color: "#888888",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    lineHeight: "30px",
                                    padding: "0px",
                                    textTransform: "capitalize",
                                    outline: "0px",
                                    backgroundColor: "transparent",
                                  }}
                                >
                                  Thumbnail on the left
                                </a>
                              </li>
                              <li
                                className="menu-item"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  listStyle: "none",
                                  display: "list-item",
                                  position: "relative",
                                }}
                              >
                                <a
                                  href="https://demo-morata.myshopify.com/collections/phones-accessories/products/proenza-schouler-white-label-24/?preview_theme_id=162679652670"
                                  style={{
                                    boxSizing: "border-box",
                                    WebkitTapHighlightColor: "transparent",
                                    textDecoration: "none",
                                    transition: "all 400ms linear 0ms",
                                    display: "block",
                                    color: "#888888",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    lineHeight: "30px",
                                    textTransform: "capitalize",
                                    padding: "0px",
                                    outline: "0px",
                                    backgroundColor: "transparent",
                                  }}
                                >
                                  Thumbnail on the right
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div
                            id="bk_d549a5e3-6ea0-4959-8cd7-14b46c1fa870"
                            className="type_mn_banner menu-item col-lg-3 col-md-12 col-sm-12"
                            style={{
                              boxSizing: "border-box",
                              WebkitTapHighlightColor: "transparent",
                              width: "100%",
                              paddingRight: "10px",
                              paddingLeft: "10px",
                              flex: "0 0 100%",
                              maxWidth: "25%",
                              listStyle: "none",
                              display: "list-item",
                              position: "relative",
                            }}
                          >
                            <div
                              className="banner_menu"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                overflow: "hidden",
                                borderRadius: "3px",
                                position: "relative",
                              }}
                            >
                              <div
                                className="alo-image overflow-hidden alo-border-radius ratio w-full h-full"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  width: "100%",
                                  height: "100%",
                                  overflow: "hidden",
                                  borderRadius: "px",
                                  lineHeight: 1,
                                  position: "relative",
                                  alignItems: "stretch",
                                  display: "block",
                                }}
                              >
                                <a
                                  className="block h-full"
                                  aria-label="link"
                                  href="https://demo-morata.myshopify.com/collections/laptop-ipad"
                                  target="_self"
                                  style={{
                                    boxSizing: "border-box",
                                    WebkitTapHighlightColor: "transparent",
                                    textDecoration: "none",
                                    overflow: "hidden",
                                    transition: "all 400ms linear 0ms",
                                    maxWidth: "100%",
                                    position: "absolute",
                                    top: "0px",
                                    left: "0px",
                                    height: "100%",
                                    width: "100%",
                                    objectFit: "cover",
                                    objectPosition: "center center",
                                    padding: "0px",
                                    display: "block",
                                    color: "#888888",
                                    textTransform: "none",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    borderRadius: "px",
                                    lineHeight: 1,
                                    outline: "0px",
                                  }}
                                >
                                  <img
                                    className="w-full h-full"
                                    height={270}
                                    width={270}
                                    sizes="100vw"
                                    src="https://demo-morata.myshopify.com/cdn/shop/products/products_4_7.jpg?v=1697644644&width=3840"
                                    srcSet="//demo-morata.myshopify.com/cdn/shop/products/products_4_7.jpg?v=1697644644&width=375 375w, //demo-morata.myshopify.com/cdn/shop/products/products_4_7.jpg?v=1697644644&width=550 550w, //demo-morata.myshopify.com/cdn/shop/products/products_4_7.jpg?v=1697644644&width=750 750w, //demo-morata.myshopify.com/cdn/shop/products/products_4_7.jpg?v=1697644644&width=1100 1100w, //demo-morata.myshopify.com/cdn/shop/products/products_4_7.jpg?v=1697644644&width=1500 1500w, //demo-morata.myshopify.com/cdn/shop/products/products_4_7.jpg?v=1697644644&width=1780 1780w, //demo-morata.myshopify.com/cdn/shop/products/products_4_7.jpg?v=1697644644&width=2000 2000w, //demo-morata.myshopify.com/cdn/shop/products/products_4_7.jpg?v=1697644644&width=3000 3000w, //demo-morata.myshopify.com/cdn/shop/products/products_4_7.jpg?v=1697644644&width=3840 3840w"
                                    style={{
                                      boxSizing: "border-box",
                                      WebkitTapHighlightColor: "transparent",
                                      transition: "all 400ms linear 0ms",
                                      maxWidth: "100%",
                                      position: "absolute",
                                      top: "0px",
                                      left: "0px",
                                      height: "100%",
                                      width: "100%",
                                      objectFit: "cover",
                                      objectPosition: "center center",
                                      borderRadius: "px",
                                      overflow: "hidden",
                                      lineHeight: 1,
                                    }}
                                  />
                                </a>
                              </div>
                              <div
                                className="title"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  position: "absolute",
                                  bottom: "15px",
                                  left: "15px",
                                  right: "15px",
                                }}
                              >
                                <a
                                  aria-label="link"
                                  href="https://demo-morata.myshopify.com/collections/laptop-ipad"
                                  target="_self"
                                  title="Laptop & Ipad"
                                  style={{
                                    boxSizing: "border-box",
                                    WebkitTapHighlightColor: "transparent",
                                    textDecoration: "none",
                                    transition: "all 400ms linear 0ms",
                                    padding: "0px",
                                    textTransform: "none",
                                    fontStyle: "normal",
                                    lineHeight: 1,
                                    background: "rgb(255, 255, 255)",
                                    borderRadius: "3px",
                                    fontWeight: 600,
                                    height: "45px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    textAlign: "center",
                                    fontSize: "14px",
                                    color: "#222222",
                                    outline: "0px",
                                  }}
                                >
                                  Laptop & Ipad
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </li>
                  <li
                    id="item_9ea37089-1ecc-414b-a84c-1aff6ea43af5"
                    className="type_mega menu-item has-children"
                    style={{
                      boxSizing: "border-box",
                      WebkitTapHighlightColor: "transparent",
                      display: "inline-block",
                      cssFloat: "none",
                      padding: "0px 15px",
                      position: "static",
                    }}
                  >
                    <a
                      className="cms-item-title"
                      href="https://demo-morata.myshopify.com/collections/all"
                      target="_self"
                      style={{
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                        textDecoration: "none",
                        transition: "all 400ms linear 0ms",
                        padding: "0px",
                        display: "inline-block",
                        color: "#ffffff",
                        cursor: "pointer",
                        cssFloat: "none",
                        position: "relative",
                        fontWeight: 500,
                        fontSize: "14px",
                        textTransform: "uppercase",
                        lineHeight: "55px",
                        outline: "0px",
                      }}
                    >
                      {"Product"}
                      <i
                        className="icon-chevron-down"
                        style={{
                          boxSizing: "border-box",
                          WebkitTapHighlightColor: "transparent",
                          fontVariant: "normal",
                          fontStyle: "normal",
                          fontWeight: 400,
                          textTransform: "none",
                          lineHeight: 1,
                          WebkitFontSmoothing: "antialiased",
                          fontSize: "12px",
                          fontFamily: "icon-dukamarket",
                        }}
                      />
                    </a>
                    {/* <div
                      className="submenu mega-menu mega-menu1"
                      style={{
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                        transition:
                          "opacity 0.5s ease 0s, visibility 0.5s ease 0s, transform 0.5s ease 0s, -webkit-transform 0.5s ease 0s",
                        borderRadius: "0px 0px 5px 5px",
                        // position: "absolute",
                        zIndex: 100,
                        pointerEvents: "none",
                        top: "100%",
                        textAlign: "left",
                        clip: "rect(1px, 1px, 1px, 1px)",
                        boxShadow: "rgba(72, 123, 183, 0.15) 0px 0px 30px",
                        padding: "30px",
                        margin: "0px auto",
                        left: "0px",
                        right: "0px",
                        transform: "translateY(15px)",
                        backgroundRepeat: "no-repeat",
                        width: "1200px",
                        backgroundColor: "rgb(255, 255, 255)",
                      }}
                    >
                      <div
                        className="cus"
                        style={{
                          boxSizing: "border-box",
                          WebkitTapHighlightColor: "transparent",
                        }}
                      >
                        <div
                          id="bk_9ea37089-1ecc-414b-a84c-1aff6ea43af5"
                          className="row lazy_menu_mega lazyloaded"
                          style={{
                            boxSizing: "border-box",
                            WebkitTapHighlightColor: "transparent",
                            display: "flex",
                            flexWrap: "wrap",
                            marginRight: "-10px",
                            marginLeft: "-10px",
                          }}
                        >
                          <div
                            id="bk_9cffa0e8-d0b2-4efd-9278-4199ced883af"
                            className="type_link2 menu-item col-lg-3 col-md-12 col-sm-12"
                            style={{
                              boxSizing: "border-box",
                              WebkitTapHighlightColor: "transparent",
                              width: "100%",
                              paddingRight: "10px",
                              paddingLeft: "10px",
                              flex: "0 0 100%",
                              maxWidth: "25%",
                              listStyle: "none",
                              display: "list-item",
                              position: "relative",
                            }}
                          >
                            <div
                              className="menu-item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                listStyle: "none",
                                display: "list-item",
                                position: "relative",
                              }}
                            >
                              <a
                                href="https://demo-morata.myshopify.com/products/maisimila-scream/?preview_theme_id=162770125118"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  textDecoration: "none",
                                  transition: "all 400ms linear 0ms",
                                  padding: "0px",
                                  display: "block",
                                  color: "#888888",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                  lineHeight: "30px",
                                  outline: "0px",
                                }}
                              >
                                {"Product Default"}
                              </a>
                            </div>
                            <div
                              className="menu-item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                listStyle: "none",
                                display: "list-item",
                                position: "relative",
                              }}
                            >
                              <a
                                href="https://demo-morata.myshopify.com/products/proenza-schouler-white-label-17/?preview_theme_id=162770125118"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  textDecoration: "none",
                                  transition: "all 400ms linear 0ms",
                                  padding: "0px",
                                  display: "block",
                                  color: "#888888",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                  lineHeight: "30px",
                                  outline: "0px",
                                }}
                              >
                                {"Product Variable"}
                              </a>
                            </div>
                            <div
                              className="menu-item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                listStyle: "none",
                                display: "list-item",
                                position: "relative",
                              }}
                            >
                              <a
                                href="https://demo-morata.myshopify.com/products/proenza-schouler-white-label-16"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  textDecoration: "none",
                                  transition: "all 400ms linear 0ms",
                                  padding: "0px",
                                  display: "block",
                                  color: "#888888",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                  lineHeight: "30px",
                                  outline: "0px",
                                }}
                              >
                                {"Product Grouped"}
                              </a>
                            </div>
                            <div
                              className="menu-item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                listStyle: "none",
                                display: "list-item",
                                position: "relative",
                              }}
                            >
                              <a
                                href="https://demo-morata.myshopify.com/products/blink-home-security-camera-system"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  textDecoration: "none",
                                  transition: "all 400ms linear 0ms",
                                  padding: "0px",
                                  display: "block",
                                  color: "#888888",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                  lineHeight: "30px",
                                  outline: "0px",
                                }}
                              >
                                {"Product External"}
                              </a>
                            </div>
                            <div
                              className="menu-item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                listStyle: "none",
                                display: "list-item",
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
                                  padding: "0px",
                                  display: "block",
                                  color: "#888888",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                  lineHeight: "30px",
                                  outline: "0px",
                                }}
                              >
                                {"Product Downloadable"}
                              </a>
                            </div>
                            <div
                              className="menu-item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                listStyle: "none",
                                display: "list-item",
                                position: "relative",
                              }}
                            >
                              <a
                                href="https://demo-morata-2.myshopify.com/products/cornstalk-dracaena"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  textDecoration: "none",
                                  transition: "all 400ms linear 0ms",
                                  padding: "0px",
                                  display: "block",
                                  color: "#888888",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                  lineHeight: "30px",
                                  outline: "0px",
                                }}
                              >
                                {"Product Swatch images"}
                              </a>
                            </div>
                            <div
                              className="menu-item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                listStyle: "none",
                                display: "list-item",
                                position: "relative",
                              }}
                            >
                              <a
                                href="https://demo-morata.myshopify.com/products/proenza-schouler-white-label-20/?preview_theme_id=163161571646"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  textDecoration: "none",
                                  transition: "all 400ms linear 0ms",
                                  padding: "0px",
                                  display: "block",
                                  color: "#888888",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                  lineHeight: "30px",
                                  outline: "0px",
                                }}
                              >
                                {"Product 3D"}
                              </a>
                            </div>
                            <div
                              className="menu-item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                listStyle: "none",
                                display: "list-item",
                                position: "relative",
                              }}
                            >
                              <a
                                href="https://demo-morata.myshopify.com/products/proenza-schouler-white-label-20/?preview_theme_id=163161571646"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  textDecoration: "none",
                                  transition: "all 400ms linear 0ms",
                                  padding: "0px",
                                  display: "block",
                                  color: "#888888",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                  lineHeight: "30px",
                                  outline: "0px",
                                }}
                              >
                                {"Product With Video"}
                              </a>
                            </div>
                          </div>
                          <div
                            id="bk_20937395-253c-422a-bd42-fc5aa25ddc2c"
                            className="type_link2 menu-item col-lg-3 col-md-12 col-sm-12"
                            style={{
                              boxSizing: "border-box",
                              WebkitTapHighlightColor: "transparent",
                              width: "100%",
                              paddingRight: "10px",
                              paddingLeft: "10px",
                              flex: "0 0 100%",
                              maxWidth: "25%",
                              listStyle: "none",
                              display: "list-item",
                              position: "relative",
                            }}
                          >
                            <div
                              className="menu-item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                listStyle: "none",
                                display: "list-item",
                                position: "relative",
                              }}
                            >
                              <a
                                href="https://demo-morata.myshopify.com/collections/phones-accessories/products/proenza-schouler-white-label-24/?preview_theme_id=162770125118"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  textDecoration: "none",
                                  transition: "all 400ms linear 0ms",
                                  padding: "0px",
                                  display: "block",
                                  color: "#888888",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                  lineHeight: "30px",
                                  outline: "0px",
                                }}
                              >
                                {"Thumbnail on the bottom"}
                              </a>
                            </div>
                            <div
                              className="menu-item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                listStyle: "none",
                                display: "list-item",
                                position: "relative",
                              }}
                            >
                              <a
                                href="https://demo-morata.myshopify.com/collections/phones-accessories/products/proenza-schouler-white-label-24/?preview_theme_id=162777071934"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  textDecoration: "none",
                                  transition: "all 400ms linear 0ms",
                                  padding: "0px",
                                  display: "block",
                                  color: "#888888",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                  lineHeight: "30px",
                                  outline: "0px",
                                }}
                              >
                                {"Turn off thumbnails"}
                              </a>
                            </div>
                            <div
                              className="menu-item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                listStyle: "none",
                                display: "list-item",
                                position: "relative",
                              }}
                            >
                              <a
                                href="https://demo-morata.myshopify.com/collections/phones-accessories/products/proenza-schouler-white-label-24/?preview_theme_id=162558673214"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  textDecoration: "none",
                                  transition: "all 400ms linear 0ms",
                                  padding: "0px",
                                  display: "block",
                                  color: "#888888",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                  lineHeight: "30px",
                                  outline: "0px",
                                }}
                              >
                                {"Product - zoom Basic"}
                              </a>
                            </div>
                            <div
                              className="menu-item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                listStyle: "none",
                                display: "list-item",
                                position: "relative",
                              }}
                            >
                              <a
                                href="https://demo-morata.myshopify.com/collections/phones-accessories/products/proenza-schouler-white-label-24/?preview_theme_id=162777071934"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  textDecoration: "none",
                                  transition: "all 400ms linear 0ms",
                                  padding: "0px",
                                  display: "block",
                                  color: "#888888",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                  lineHeight: "30px",
                                  outline: "0px",
                                }}
                              >
                                {"Product - Inner zoom"}
                              </a>
                            </div>
                            <div
                              className="menu-item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                listStyle: "none",
                                display: "list-item",
                                position: "relative",
                              }}
                            >
                              <a
                                href="https://demo-morata.myshopify.com/products/proenza-schouler-white-label-23/?preview_theme_id=163161571646"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  textDecoration: "none",
                                  transition: "all 400ms linear 0ms",
                                  padding: "0px",
                                  display: "block",
                                  color: "#888888",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                  lineHeight: "30px",
                                  outline: "0px",
                                }}
                              >
                                {"Product - Lens Zoom"}
                              </a>
                            </div>
                            <div
                              className="menu-item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                listStyle: "none",
                                display: "list-item",
                                position: "relative",
                              }}
                            >
                              <a
                                href="https://demo-morata.myshopify.com/collections/phones-accessories/products/proenza-schouler-white-label-24/?preview_theme_id=163183788350"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  textDecoration: "none",
                                  transition: "all 400ms linear 0ms",
                                  padding: "0px",
                                  display: "block",
                                  color: "#888888",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                  lineHeight: "30px",
                                  outline: "0px",
                                }}
                              >
                                {"Product - Mousewheel Zoom"}
                              </a>
                            </div>
                          </div>
                          <div
                            id="bk_79f322d8-d36a-4fc7-a97b-de35a91442c8"
                            className="type_mn_pr menu-item sub-column-item col-lg-3 col-md-12 col-sm-12 zoom_img cat_design_1"
                            style={{
                              boxSizing: "border-box",
                              WebkitTapHighlightColor: "transparent",
                              width: "100%",
                              paddingRight: "10px",
                              paddingLeft: "10px",
                              flex: "0 0 100%",
                              maxWidth: "25%",
                              listStyle: "none",
                              display: "list-item",
                              position: "relative",
                            }}
                          >
                            <div
                              className="cat_grid_item cat_space_item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                overflow: "hidden",
                              }}
                            >
                              <div
                                className="cat_grid_item__content images-card"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  overflow: "hidden",
                                  borderRadius: "3px",
                                  position: "relative",
                                }}
                              >
                                <a
                                  className="db cat_grid_item__link"
                                  aria-label="link"
                                  href="https://demo-morata.myshopify.com/"
                                  style={{
                                    boxSizing: "border-box",
                                    WebkitTapHighlightColor: "transparent",
                                    textDecoration: "none",
                                    transition: "all 400ms linear 0ms",
                                    padding: "0px",
                                    display: "block",
                                    color: "#888888",
                                    textTransform: "none",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    lineHeight: "30px",
                                    outline: "0px",
                                  }}
                                >
                                  <div
                                    className="alo-image overflow-hidden alo-border-radius ratio w-full h-full"
                                    style={{
                                      boxSizing: "border-box",
                                      WebkitTapHighlightColor: "transparent",
                                      width: "100%",
                                      height: "100%",
                                      lineHeight: 1,
                                      position: "relative",
                                      alignItems: "stretch",
                                      display: "block",
                                      borderRadius: "px",
                                      overflow: "hidden",
                                    }}
                                  >
                                    <img
                                      className="w-full h-full"
                                      height={270}
                                      width={270}
                                      sizes="100vw"
                                      src="https://demo-morata.myshopify.com/cdn/shop/products/products_2_4.jpg?v=1697644616&width=3840"
                                      srcSet="//demo-morata.myshopify.com/cdn/shop/products/products_2_4.jpg?v=1697644616&width=375 375w, //demo-morata.myshopify.com/cdn/shop/products/products_2_4.jpg?v=1697644616&width=550 550w, //demo-morata.myshopify.com/cdn/shop/products/products_2_4.jpg?v=1697644616&width=750 750w, //demo-morata.myshopify.com/cdn/shop/products/products_2_4.jpg?v=1697644616&width=1100 1100w, //demo-morata.myshopify.com/cdn/shop/products/products_2_4.jpg?v=1697644616&width=1500 1500w, //demo-morata.myshopify.com/cdn/shop/products/products_2_4.jpg?v=1697644616&width=1780 1780w, //demo-morata.myshopify.com/cdn/shop/products/products_2_4.jpg?v=1697644616&width=2000 2000w, //demo-morata.myshopify.com/cdn/shop/products/products_2_4.jpg?v=1697644616&width=3000 3000w, //demo-morata.myshopify.com/cdn/shop/products/products_2_4.jpg?v=1697644616&width=3840 3840w"
                                      style={{
                                        boxSizing: "border-box",
                                        WebkitTapHighlightColor:
                                          "transparent",
                                        maxWidth: "100%",
                                        position: "absolute",
                                        top: "0px",
                                        left: "0px",
                                        height: "100%",
                                        width: "100%",
                                        objectFit: "cover",
                                        objectPosition: "center center",
                                        transition:
                                          "opacity 0.3s ease 0s, transform 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s, -webkit-transform 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s",
                                        transform: "scale(1)",
                                      }}
                                    />
                                  </div>
                                </a>
                                <div
                                  className="cat_grid_item__wrapper"
                                  style={{
                                    boxSizing: "border-box",
                                    WebkitTapHighlightColor: "transparent",
                                    position: "absolute",
                                    textAlign: "center",
                                    right: "15px",
                                    left: "15px",
                                    bottom: "15px",
                                  }}
                                >
                                  <div
                                    className="cat_grid_item__title"
                                    style={{
                                      boxSizing: "border-box",
                                      WebkitTapHighlightColor: "transparent",
                                      background: "rgb(255, 255, 255)",
                                      padding: "0px 15px",
                                      borderRadius: "3px",
                                    }}
                                  >
                                    <a
                                      aria-label="link"
                                      href="https://demo-morata.myshopify.com/"
                                      style={{
                                        boxSizing: "border-box",
                                        WebkitTapHighlightColor:
                                          "transparent",
                                        textDecoration: "none",
                                        transition: "all 400ms linear 0ms",
                                        padding: "0px",
                                        display: "block",
                                        color: "#888888",
                                        textTransform: "none",
                                        fontStyle: "normal",
                                        fontWeight: 400,
                                        fontSize: "14px",
                                        lineHeight: "40px",
                                        outline: "0px",
                                      }}
                                    >
                                      {"Collection's name #"}
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            id="bk_ca137f59-9acb-47fe-a6a5-a6fead24d524"
                            className="type_mn_pr menu-item sub-column-item col-lg-3 col-md-12 col-sm-12 zoom_img cat_design_1"
                            style={{
                              boxSizing: "border-box",
                              WebkitTapHighlightColor: "transparent",
                              width: "100%",
                              paddingRight: "10px",
                              paddingLeft: "10px",
                              flex: "0 0 100%",
                              maxWidth: "25%",
                              listStyle: "none",
                              display: "list-item",
                              position: "relative",
                            }}
                          >
                            <div
                              className="cat_grid_item cat_space_item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                overflow: "hidden",
                              }}
                            >
                              <div
                                className="cat_grid_item__content images-card"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  overflow: "hidden",
                                  borderRadius: "3px",
                                  position: "relative",
                                }}
                              >
                                <a
                                  className="db cat_grid_item__link"
                                  aria-label="link"
                                  href="https://demo-morata.myshopify.com/"
                                  style={{
                                    boxSizing: "border-box",
                                    WebkitTapHighlightColor: "transparent",
                                    textDecoration: "none",
                                    transition: "all 400ms linear 0ms",
                                    padding: "0px",
                                    display: "block",
                                    color: "#888888",
                                    textTransform: "none",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    lineHeight: "30px",
                                    outline: "0px",
                                  }}
                                >
                                  <div
                                    className="alo-image overflow-hidden alo-border-radius ratio w-full h-full"
                                    style={{
                                      boxSizing: "border-box",
                                      WebkitTapHighlightColor: "transparent",
                                      width: "100%",
                                      height: "100%",
                                      lineHeight: 1,
                                      position: "relative",
                                      alignItems: "stretch",
                                      display: "block",
                                      borderRadius: "px",
                                      overflow: "hidden",
                                    }}
                                  >
                                    <img
                                      className="w-full h-full"
                                      height={270}
                                      width={270}
                                      sizes="100vw"
                                      src="https://demo-morata.myshopify.com/cdn/shop/products/products_4_7.jpg?v=1697644644&width=3840"
                                      srcSet="//demo-morata.myshopify.com/cdn/shop/products/products_4_7.jpg?v=1697644644&width=375 375w, //demo-morata.myshopify.com/cdn/shop/products/products_4_7.jpg?v=1697644644&width=550 550w, //demo-morata.myshopify.com/cdn/shop/products/products_4_7.jpg?v=1697644644&width=750 750w, //demo-morata.myshopify.com/cdn/shop/products/products_4_7.jpg?v=1697644644&width=1100 1100w, //demo-morata.myshopify.com/cdn/shop/products/products_4_7.jpg?v=1697644644&width=1500 1500w, //demo-morata.myshopify.com/cdn/shop/products/products_4_7.jpg?v=1697644644&width=1780 1780w, //demo-morata.myshopify.com/cdn/shop/products/products_4_7.jpg?v=1697644644&width=2000 2000w, //demo-morata.myshopify.com/cdn/shop/products/products_4_7.jpg?v=1697644644&width=3000 3000w, //demo-morata.myshopify.com/cdn/shop/products/products_4_7.jpg?v=1697644644&width=3840 3840w"
                                      style={{
                                        boxSizing: "border-box",
                                        WebkitTapHighlightColor:
                                          "transparent",
                                        maxWidth: "100%",
                                        position: "absolute",
                                        top: "0px",
                                        left: "0px",
                                        height: "100%",
                                        width: "100%",
                                        objectFit: "cover",
                                        objectPosition: "center center",
                                        transition:
                                          "opacity 0.3s ease 0s, transform 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s, -webkit-transform 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s",
                                        transform: "scale(1)",
                                      }}
                                    />
                                  </div>
                                </a>
                                <div
                                  className="cat_grid_item__wrapper"
                                  style={{
                                    boxSizing: "border-box",
                                    WebkitTapHighlightColor: "transparent",
                                    position: "absolute",
                                    textAlign: "center",
                                    right: "15px",
                                    left: "15px",
                                    bottom: "15px",
                                  }}
                                >
                                  <div
                                    className="cat_grid_item__title"
                                    style={{
                                      boxSizing: "border-box",
                                      WebkitTapHighlightColor: "transparent",
                                      background: "rgb(255, 255, 255)",
                                      padding: "0px 15px",
                                      borderRadius: "3px",
                                    }}
                                  >
                                    <a
                                      aria-label="link"
                                      href="https://demo-morata.myshopify.com/"
                                      style={{
                                        boxSizing: "border-box",
                                        WebkitTapHighlightColor:
                                          "transparent",
                                        textDecoration: "none",
                                        transition: "all 400ms linear 0ms",
                                        padding: "0px",
                                        display: "block",
                                        color: "#888888",
                                        textTransform: "none",
                                        fontStyle: "normal",
                                        fontWeight: 400,
                                        fontSize: "14px",
                                        lineHeight: "40px",
                                        outline: "0px",
                                      }}
                                    >
                                      {"Collection's name #"}
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </li>
                  <li
                    id="item_3681d0ce-afc6-4344-b966-cfda71fb5b43"
                    className="type_dropdown menu-item has-children"
                    style={{
                      boxSizing: "border-box",
                      WebkitTapHighlightColor: "transparent",
                      display: "inline-block",
                      cssFloat: "none",
                      padding: "0px 15px",
                      position: "relative",
                    }}
                  >
                    <a
                      className="cms-item-title"
                      href="https://demo-morata.myshopify.com/pages/page-demo"
                      target="_self"
                      style={{
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                        textDecoration: "none",
                        transition: "all 400ms linear 0ms",
                        padding: "0px",
                        display: "inline-block",
                        color: "#ffffff",
                        cursor: "pointer",
                        cssFloat: "none",
                        position: "relative",
                        fontWeight: 500,
                        fontSize: "14px",
                        textTransform: "uppercase",
                        lineHeight: "55px",
                        outline: "0px",
                      }}
                    >
                      {"Pages"}
                      <i
                        className="icon-chevron-down"
                        style={{
                          boxSizing: "border-box",
                          WebkitTapHighlightColor: "transparent",
                          fontVariant: "normal",
                          fontStyle: "normal",
                          fontWeight: 400,
                          textTransform: "none",
                          lineHeight: 1,
                          WebkitFontSmoothing: "antialiased",
                          fontSize: "12px",
                          fontFamily: "icon-dukamarket",
                        }}
                      />
                    </a>
                    <div
                      className="submenu"
                      style={{
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                        transition:
                          "opacity 0.5s ease 0s, visibility 0.5s ease 0s, transform 0.5s ease 0s, -webkit-transform 0.5s ease 0s",
                        padding: "20px 30px",
                        borderRadius: "0px 0px 5px 5px",
                        position: "absolute",
                        zIndex: 100,
                        pointerEvents: "none",
                        left: "0px",
                        top: "100%",
                        backgroundColor: "rgb(255, 255, 255)",
                        width: "260px",
                        textAlign: "left",
                        clip: "rect(1px, 1px, 1px, 1px)",
                        transform: "translateY(15px)",
                        boxShadow: "rgba(72, 123, 183, 0.15) 0px 0px 30px",
                      }}
                    >
                      <div
                        id="bk_3681d0ce-afc6-4344-b966-cfda71fb5b43"
                        className="lazy_menu_mega lazyloaded"
                        style={{
                          boxSizing: "border-box",
                          WebkitTapHighlightColor: "transparent",
                        }}
                      >
                        <div
                          className="menu-item"
                          style={{
                            boxSizing: "border-box",
                            WebkitTapHighlightColor: "transparent",
                            listStyle: "none",
                            display: "list-item",
                            position: "relative",
                          }}
                        >
                          <a
                            href="https://demo-morata.myshopify.com/pages/about-us"
                            style={{
                              boxSizing: "border-box",
                              WebkitTapHighlightColor: "transparent",
                              textDecoration: "none",
                              transition: "all 400ms linear 0ms",
                              padding: "0px",
                              display: "block",
                              color: "#888888",
                              textTransform: "none",
                              fontStyle: "normal",
                              fontWeight: 400,
                              fontSize: "14px",
                              lineHeight: "30px",
                              outline: "0px",
                            }}
                          >
                            {"About Us"}
                          </a>
                        </div>
                        <div
                          className="menu-item"
                          style={{
                            boxSizing: "border-box",
                            WebkitTapHighlightColor: "transparent",
                            listStyle: "none",
                            display: "list-item",
                            position: "relative",
                          }}
                        >
                          <a
                            href="https://demo-morata.myshopify.com/password"
                            style={{
                              boxSizing: "border-box",
                              WebkitTapHighlightColor: "transparent",
                              textDecoration: "none",
                              transition: "all 400ms linear 0ms",
                              padding: "0px",
                              display: "block",
                              color: "#888888",
                              textTransform: "none",
                              fontStyle: "normal",
                              fontWeight: 400,
                              fontSize: "14px",
                              lineHeight: "30px",
                              outline: "0px",
                            }}
                          >
                            {"Coming Soon"}
                          </a>
                        </div>
                        <div
                          className="menu-item"
                          style={{
                            boxSizing: "border-box",
                            WebkitTapHighlightColor: "transparent",
                            listStyle: "none",
                            display: "list-item",
                            position: "relative",
                          }}
                        >
                          <a
                            href="https://demo-morata.myshopify.com/pages/faqs"
                            style={{
                              boxSizing: "border-box",
                              WebkitTapHighlightColor: "transparent",
                              textDecoration: "none",
                              transition: "all 400ms linear 0ms",
                              padding: "0px",
                              display: "block",
                              color: "#888888",
                              textTransform: "none",
                              fontStyle: "normal",
                              fontWeight: 400,
                              fontSize: "14px",
                              lineHeight: "30px",
                              outline: "0px",
                            }}
                          >
                            {"FAQs"}
                          </a>
                        </div>
                        <div
                          className="menu-item"
                          style={{
                            boxSizing: "border-box",
                            WebkitTapHighlightColor: "transparent",
                            listStyle: "none",
                            display: "list-item",
                            position: "relative",
                          }}
                        >
                          <a
                            href="https://demo-morata.myshopify.com/pages/our-stores"
                            style={{
                              boxSizing: "border-box",
                              WebkitTapHighlightColor: "transparent",
                              textDecoration: "none",
                              transition: "all 400ms linear 0ms",
                              padding: "0px",
                              display: "block",
                              color: "#888888",
                              textTransform: "none",
                              fontStyle: "normal",
                              fontWeight: 400,
                              fontSize: "14px",
                              lineHeight: "30px",
                              outline: "0px",
                            }}
                          >
                            {"Our Team"}
                          </a>
                        </div>
                        <div
                          className="menu-item"
                          style={{
                            boxSizing: "border-box",
                            WebkitTapHighlightColor: "transparent",
                            listStyle: "none",
                            display: "list-item",
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
                              padding: "0px",
                              display: "block",
                              color: "#888888",
                              textTransform: "none",
                              fontStyle: "normal",
                              fontWeight: 400,
                              fontSize: "14px",
                              lineHeight: "30px",
                              outline: "0px",
                            }}
                          >
                            {"Payment Plans"}
                          </a>
                        </div>
                        <div
                          className="menu-item"
                          style={{
                            boxSizing: "border-box",
                            WebkitTapHighlightColor: "transparent",
                            listStyle: "none",
                            display: "list-item",
                            position: "relative",
                          }}
                        >
                          <a
                            href="https://demo-morata.myshopify.com/404"
                            style={{
                              boxSizing: "border-box",
                              WebkitTapHighlightColor: "transparent",
                              textDecoration: "none",
                              transition: "all 400ms linear 0ms",
                              padding: "0px",
                              display: "block",
                              color: "#888888",
                              textTransform: "none",
                              fontStyle: "normal",
                              fontWeight: 400,
                              fontSize: "14px",
                              lineHeight: "30px",
                              outline: "0px",
                            }}
                          >
                            {"Page 404"}
                          </a>
                        </div>
                        <div
                          className="menu-item"
                          style={{
                            boxSizing: "border-box",
                            WebkitTapHighlightColor: "transparent",
                            listStyle: "none",
                            display: "list-item",
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
                              padding: "0px",
                              display: "block",
                              color: "#888888",
                              textTransform: "none",
                              fontStyle: "normal",
                              fontWeight: 400,
                              fontSize: "14px",
                              lineHeight: "30px",
                              outline: "0px",
                            }}
                          >
                            {"Gift Cards"}
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    id="item_bab6430c-5d2b-4e8e-8e42-224c6d149882"
                    className="type_dropdown menu-item has-children"
                    style={{
                      boxSizing: "border-box",
                      WebkitTapHighlightColor: "transparent",
                      display: "inline-block",
                      cssFloat: "none",
                      padding: "0px 15px",
                      position: "relative",
                    }}
                  >
                    <a
                      className="cms-item-title"
                      href="https://demo-morata.myshopify.com/blogs/technology"
                      target="_self"
                      style={{
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                        textDecoration: "none",
                        transition: "all 400ms linear 0ms",
                        padding: "0px",
                        display: "inline-block",
                        color: "#ffffff",
                        cursor: "pointer",
                        cssFloat: "none",
                        position: "relative",
                        fontWeight: 500,
                        fontSize: "14px",
                        textTransform: "uppercase",
                        lineHeight: "55px",
                        outline: "0px",
                      }}
                    >
                      {"Blog"}
                      <i
                        className="icon-chevron-down"
                        style={{
                          boxSizing: "border-box",
                          WebkitTapHighlightColor: "transparent",
                          fontVariant: "normal",
                          fontStyle: "normal",
                          fontWeight: 400,
                          textTransform: "none",
                          lineHeight: 1,
                          WebkitFontSmoothing: "antialiased",
                          fontSize: "12px",
                          fontFamily: "icon-dukamarket",
                        }}
                      />
                    </a>
                    <div
                      className="submenu"
                      style={{
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                        transition:
                          "opacity 0.5s ease 0s, visibility 0.5s ease 0s, transform 0.5s ease 0s, -webkit-transform 0.5s ease 0s",
                        padding: "20px 30px",
                        borderRadius: "0px 0px 5px 5px",
                        position: "absolute",
                        zIndex: 100,
                        pointerEvents: "none",
                        left: "0px",
                        top: "100%",
                        backgroundColor: "rgb(255, 255, 255)",
                        width: "260px",
                        textAlign: "left",
                        clip: "rect(1px, 1px, 1px, 1px)",
                        transform: "translateY(15px)",
                        boxShadow: "rgba(72, 123, 183, 0.15) 0px 0px 30px",
                      }}
                    >
                      <div
                        id="bk_bab6430c-5d2b-4e8e-8e42-224c6d149882"
                        className="lazy_menu_mega lazyloaded"
                        style={{
                          boxSizing: "border-box",
                          WebkitTapHighlightColor: "transparent",
                        }}
                      >
                        <div
                          className="menu-item"
                          style={{
                            boxSizing: "border-box",
                            WebkitTapHighlightColor: "transparent",
                            listStyle: "none",
                            display: "list-item",
                            position: "relative",
                          }}
                        >
                          <a
                            href="https://demo-morata.myshopify.com/blogs/technology/limited-edition-safari-silver-summicron-m-lenses-5"
                            style={{
                              boxSizing: "border-box",
                              WebkitTapHighlightColor: "transparent",
                              textDecoration: "none",
                              transition: "all 400ms linear 0ms",
                              padding: "0px",
                              display: "block",
                              color: "#888888",
                              textTransform: "none",
                              fontStyle: "normal",
                              fontWeight: 400,
                              fontSize: "14px",
                              lineHeight: "30px",
                              outline: "0px",
                            }}
                          >
                            {"Blog Image"}
                          </a>
                        </div>
                        <div
                          className="menu-item menu-item-has-children"
                          style={{
                            boxSizing: "border-box",
                            WebkitTapHighlightColor: "transparent",
                            listStyle: "none",
                            display: "list-item",
                            position: "relative",
                          }}
                        >
                          <a
                            href="https://demo-morata.myshopify.com/blogs/technology/?preview_theme_id=162770125118"
                            style={{
                              boxSizing: "border-box",
                              WebkitTapHighlightColor: "transparent",
                              textDecoration: "none",
                              transition: "all 400ms linear 0ms",
                              padding: "0px",
                              display: "block",
                              color: "#888888",
                              textTransform: "none",
                              fontStyle: "normal",
                              fontWeight: 400,
                              fontSize: "14px",
                              lineHeight: "30px",
                              outline: "0px",
                            }}
                          >
                            {"Blog Grid"}
                          </a>
                          <div
                            className="submenu sub-menu-2"
                            style={{
                              boxSizing: "border-box",
                              WebkitTapHighlightColor: "transparent",
                              transition:
                                "opacity 0.5s ease 0s, visibility 0.5s ease 0s, transform 0.5s ease 0s, -webkit-transform 0.5s ease 0s",
                              padding: "20px 30px",
                              borderRadius: "0px 0px 5px 5px",
                              position: "absolute",
                              zIndex: 100,
                              pointerEvents: "none",
                              backgroundColor: "rgb(255, 255, 255)",
                              width: "260px",
                              textAlign: "left",
                              clip: "rect(1px, 1px, 1px, 1px)",
                              transform: "translateY(15px)",
                              boxShadow:
                                "rgba(72, 123, 183, 0.15) 0px 0px 30px",
                              left: "100%",
                              top: "0px",
                            }}
                          >
                            <div
                              className="menu-item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                listStyle: "none",
                                display: "list-item",
                                position: "relative",
                              }}
                            >
                              <a
                                href="https://demo-morata.myshopify.com/blogs/technology/?preview_theme_id=162558673214"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  textDecoration: "none",
                                  transition: "all 400ms linear 0ms",
                                  padding: "0px",
                                  display: "block",
                                  color: "#888888",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                  lineHeight: "30px",
                                  outline: "0px",
                                }}
                              >
                                {"Blog Left sidebar"}
                              </a>
                            </div>
                            <div
                              className="menu-item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                listStyle: "none",
                                display: "list-item",
                                position: "relative",
                              }}
                            >
                              <a
                                href="https://demo-morata.myshopify.com/blogs/technology/?preview_theme_id=162777071934"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  textDecoration: "none",
                                  transition: "all 400ms linear 0ms",
                                  padding: "0px",
                                  display: "block",
                                  color: "#888888",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                  lineHeight: "30px",
                                  outline: "0px",
                                }}
                              >
                                {"Blog right sidebar"}
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="menu-item"
                          style={{
                            boxSizing: "border-box",
                            WebkitTapHighlightColor: "transparent",
                            listStyle: "none",
                            display: "list-item",
                            position: "relative",
                          }}
                        >
                          <a
                            href="https://demo-morata.myshopify.com/blogs/technology/?preview_theme_id=162679652670"
                            style={{
                              boxSizing: "border-box",
                              WebkitTapHighlightColor: "transparent",
                              textDecoration: "none",
                              transition: "all 400ms linear 0ms",
                              padding: "0px",
                              display: "block",
                              color: "#888888",
                              textTransform: "none",
                              fontStyle: "normal",
                              fontWeight: 400,
                              fontSize: "14px",
                              lineHeight: "30px",
                              outline: "0px",
                            }}
                          >
                            {"Blog Grid 2 column"}
                          </a>
                        </div>
                        <div
                          className="menu-item"
                          style={{
                            boxSizing: "border-box",
                            WebkitTapHighlightColor: "transparent",
                            listStyle: "none",
                            display: "list-item",
                            position: "relative",
                          }}
                        >
                          <a
                            href="https://demo-morata.myshopify.com/blogs/technology/?preview_theme_id=162558673214"
                            style={{
                              boxSizing: "border-box",
                              WebkitTapHighlightColor: "transparent",
                              textDecoration: "none",
                              transition: "all 400ms linear 0ms",
                              padding: "0px",
                              display: "block",
                              color: "#888888",
                              textTransform: "none",
                              fontStyle: "normal",
                              fontWeight: 400,
                              fontSize: "14px",
                              lineHeight: "30px",
                              outline: "0px",
                            }}
                          >
                            {"Blog Grid 3 column"}
                          </a>
                        </div>
                        <div
                          className="menu-item menu-item-has-children"
                          style={{
                            boxSizing: "border-box",
                            WebkitTapHighlightColor: "transparent",
                            listStyle: "none",
                            display: "list-item",
                            position: "relative",
                          }}
                        >
                          <a
                            href="https://demo-morata.myshopify.com/blogs/technology/?preview_theme_id=163076538686"
                            style={{
                              boxSizing: "border-box",
                              WebkitTapHighlightColor: "transparent",
                              textDecoration: "none",
                              transition: "all 400ms linear 0ms",
                              padding: "0px",
                              display: "block",
                              color: "#888888",
                              textTransform: "none",
                              fontStyle: "normal",
                              fontWeight: 400,
                              fontSize: "14px",
                              lineHeight: "30px",
                              outline: "0px",
                            }}
                          >
                            {"Blog List"}
                          </a>
                          <div
                            className="submenu sub-menu-2"
                            style={{
                              boxSizing: "border-box",
                              WebkitTapHighlightColor: "transparent",
                              transition:
                                "opacity 0.5s ease 0s, visibility 0.5s ease 0s, transform 0.5s ease 0s, -webkit-transform 0.5s ease 0s",
                              padding: "20px 30px",
                              borderRadius: "0px 0px 5px 5px",
                              position: "absolute",
                              zIndex: 100,
                              pointerEvents: "none",
                              backgroundColor: "rgb(255, 255, 255)",
                              width: "260px",
                              textAlign: "left",
                              clip: "rect(1px, 1px, 1px, 1px)",
                              transform: "translateY(15px)",
                              boxShadow:
                                "rgba(72, 123, 183, 0.15) 0px 0px 30px",
                              left: "100%",
                              top: "0px",
                            }}
                          >
                            <div
                              className="menu-item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                listStyle: "none",
                                display: "list-item",
                                position: "relative",
                              }}
                            >
                              <a
                                href="https://demo-morata.myshopify.com/blogs/technology/?preview_theme_id=162911715646"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  textDecoration: "none",
                                  transition: "all 400ms linear 0ms",
                                  padding: "0px",
                                  display: "block",
                                  color: "#888888",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                  lineHeight: "30px",
                                  outline: "0px",
                                }}
                              >
                                {"Blog Left sidebar"}
                              </a>
                            </div>
                            <div
                              className="menu-item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                listStyle: "none",
                                display: "list-item",
                                position: "relative",
                              }}
                            >
                              <a
                                href="https://demo-morata.myshopify.com/blogs/technology/?preview_theme_id=163000713534"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  textDecoration: "none",
                                  transition: "all 400ms linear 0ms",
                                  padding: "0px",
                                  display: "block",
                                  color: "#888888",
                                  textTransform: "none",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: "14px",
                                  lineHeight: "30px",
                                  outline: "0px",
                                }}
                              >
                                {"Blog Right sidebar"}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    id="item_407f6f92-2819-4cb0-a735-a3caec3c4cd2"
                    className="menu-item type_simple"
                    style={{
                      boxSizing: "border-box",
                      WebkitTapHighlightColor: "transparent",
                      display: "inline-block",
                      cssFloat: "none",
                      padding: "0px 15px",
                    }}
                  >
                    <a
                      className="cms-item-title"
                      href="https://demo-morata.myshopify.com/pages/contact"
                      target="_self"
                      style={{
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                        textDecoration: "none",
                        transition: "all 400ms linear 0ms",
                        padding: "0px",
                        display: "inline-block",
                        color: "#ffffff",
                        cursor: "pointer",
                        cssFloat: "none",
                        position: "relative",
                        fontWeight: 500,
                        fontSize: "14px",
                        textTransform: "uppercase",
                        lineHeight: "55px",
                        outline: "0px",
                      }}
                    >
                      {"Contact Us"}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="custom_html col-auto"
          style={{
            boxSizing: "border-box",
            WebkitTapHighlightColor: "transparent",
            position: "relative",
            padding: "0px",
            paddingRight: "0px",
            paddingLeft: "0px",
            flex: "0 0 auto",
            width: "auto",
            maxWidth: "none",
            gap: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <svg
            height="23"
            width="23"
            fill="none"
            viewBox="0 0 23 23"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              boxSizing: "border-box",
              WebkitTapHighlightColor: "transparent",
            }}
          >
            <path
              d="M3.08737 14.2867L1.48898 12.6883C0.837006 12.0363 0.837006 10.9637 1.48898 10.3117L3.08737 8.71331C3.36078 8.4399 3.58161 7.90359 3.58161 7.52502V5.26411C3.58161 4.33872 4.33875 3.58161 5.26414 3.58161H7.52502C7.90359 3.58161 8.4399 3.36081 8.71331 3.0874L10.3117 1.48898C10.9637 0.837006 12.0363 0.837006 12.6883 1.48898L14.2867 3.0874C14.5601 3.36081 15.0964 3.58161 15.4749 3.58161H17.7359C18.6612 3.58161 19.4184 4.33872 19.4184 5.26411V7.52502C19.4184 7.90359 19.6392 8.4399 19.9126 8.71331L21.511 10.3117C22.163 10.9637 22.163 12.0363 21.511 12.6883L19.9126 14.2867C19.6392 14.5601 19.4184 15.0964 19.4184 15.475V17.7358C19.4184 18.6612 18.6612 19.4184 17.7359 19.4184H15.4749C15.0964 19.4184 14.5601 19.6392 14.2867 19.9126L12.6883 21.511C12.0363 22.163 10.9637 22.163 10.3117 21.511L8.71331 19.9126C8.4399 19.6392 7.90359 19.4184 7.52502 19.4184H5.26414C4.33875 19.4184 3.58161 18.6612 3.58161 17.7358V15.475C3.58161 15.0859 3.36078 14.5496 3.08737 14.2867Z"
              fill="#16bcdc"
              style={{
                boxSizing: "border-box",
                WebkitTapHighlightColor: "transparent",
                fill: "#16bcdc",
              }}
            />
            <path
              d="M3.08737 14.2867L1.48898 12.6883C0.837006 12.0363 0.837006 10.9637 1.48898 10.3117L3.08737 8.71331C3.36078 8.4399 3.58161 7.90359 3.58161 7.52502V5.26411C3.58161 4.33872 4.33875 3.58161 5.26414 3.58161H7.52502C7.90359 3.58161 8.4399 3.36081 8.71331 3.0874L10.3117 1.48898C10.9637 0.837006 12.0363 0.837006 12.6883 1.48898L14.2867 3.0874C14.5601 3.36081 15.0964 3.58161 15.4749 3.58161H17.7359C18.6612 3.58161 19.4184 4.33872 19.4184 5.26411V7.52502C19.4184 7.90359 19.6392 8.4399 19.9126 8.71331L21.511 10.3117C22.163 10.9637 22.163 12.0363 21.511 12.6883L19.9126 14.2867C19.6392 14.5601 19.4184 15.0964 19.4184 15.475V17.7358C19.4184 18.6612 18.6612 19.4184 17.7359 19.4184H15.4749C15.0964 19.4184 14.5601 19.6392 14.2867 19.9126L12.6883 21.511C12.0363 22.163 10.9637 22.163 10.3117 21.511L8.71331 19.9126C8.4399 19.6392 7.90359 19.4184 7.52502 19.4184H5.26414C4.33875 19.4184 3.58161 18.6612 3.58161 17.7358V15.475C3.58161 15.0859 3.36078 14.5496 3.08737 14.2867Z"
              fill="#16bcdc"
              stroke="#16bcdc"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              style={{
                boxSizing: "border-box",
                WebkitTapHighlightColor: "transparent",
                fill: "#16bcdc",
                stroke: "#16bcdc",
              }}
            />
            <path
              d="M8 15.0909L15.0909 8"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              style={{
                boxSizing: "border-box",
                WebkitTapHighlightColor: "transparent",
                fill: "#16bcdc",
              }}
            />
            <path
              d="M14.4937 14.5H14.5043"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              style={{
                boxSizing: "border-box",
                WebkitTapHighlightColor: "transparent",
                fill: "#16bcdc",
              }}
            />
            <path
              d="M8.58442 8.59091H8.59503"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              style={{
                boxSizing: "border-box",
                WebkitTapHighlightColor: "transparent",
                fill: "#16bcdc",
              }}
            />
          </svg>
          <p
            style={{
              boxSizing: "border-box",
              WebkitTapHighlightColor: "transparent",
              margin: "0px",
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "16px",
            }}
          >
            <a
              href="https://demo-morata.myshopify.com/#"
              title="Sale"
              style={{
                boxSizing: "border-box",
                WebkitTapHighlightColor: "transparent",
                textDecoration: "none",
                transition: "all 400ms linear 0ms",
                borderRadius: "3px",
                overflow: "hidden",
                display: "block",
                lineHeight: 1,
                color: "#ffffff",
                outline: "0px",
              }}
            >
              Sale $20 Off Your First Order.
            </a>
          </p>
        </div>
      </div>
    </div>

  </>  )
}

export default NavBar