import React from 'react'

const MiddleBar = () => {
  return (
    <>
      <div
        className="header-top"
        style={{
          boxSizing: "border-box",
          WebkitTapHighlightColor: "transparent",
          padding: "0px",
          height: "auto",
          position: "relative",
          display: "flex",
          alignItems: "center",
          background:"black"
        }}
      >
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
          }}
        >
          <div
            className="row"
            style={{
              boxSizing: "border-box",
              WebkitTapHighlightColor: "transparent",
              display: "flex",
              marginRight: "-10px",
              marginLeft: "-10px",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "nowrap",
              height: "85px",
            }}
          >
            <div
              className="header-nav-mobile col-md-3 col-3"
              style={{
                boxSizing: "border-box",
                WebkitTapHighlightColor: "transparent",
                position: "relative",
                width: "100%",
                paddingRight: "10px",
                paddingLeft: "10px",
                maxWidth: "25%",
                display: "none",
              }}
            >
              <div
                className="js-mobile-menu menu-bar mobile-navigation"
                style={{
                  boxSizing: "border-box",
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                <span
                  className="icon"
                  style={{
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                  }}
                >
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      boxSizing: "border-box",
                      WebkitTapHighlightColor: "transparent",
                    }}
                  >
                    <defs
                      style={{
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                      }}
                    />
                    <title
                      style={{
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                      }}
                    />
                    <g
                      id="Layer_2"
                      style={{
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                      }}
                    >
                      <path
                        d="M28,10H4A1,1,0,0,1,4,8H28a1,1,0,0,1,0,2Z"
                        style={{
                          boxSizing: "border-box",
                          WebkitTapHighlightColor: "transparent",
                        }}
                      />
                      <path
                        d="M28,17H4a1,1,0,0,1,0-2H28a1,1,0,0,1,0,2Z"
                        style={{
                          boxSizing: "border-box",
                          WebkitTapHighlightColor: "transparent",
                        }}
                      />
                      <path
                        d="M28,24H4a1,1,0,0,1,0-2H28a1,1,0,0,1,0,2Z"
                        style={{
                          boxSizing: "border-box",
                          WebkitTapHighlightColor: "transparent",
                        }}
                      />
                    </g>
                    <g
                      id="frame"
                      style={{
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                      }}
                    >
                      <rect
                        className="cls-1"
                        height="32"
                        width="32"
                        style={{
                          boxSizing: "border-box",
                          WebkitTapHighlightColor: "transparent",
                          fill: "none",
                        }}
                      />
                    </g>
                  </svg>
                </span>
              </div>
            </div>
            <div
              className="header-logo hide-desktop flex-1"
              style={{
                boxSizing: "border-box",
                WebkitTapHighlightColor: "transparent",
                flex: "1 1 0%",
                maxWidth: "300px",
                width: "100%",
                display: "none",
              }}
            >
              <a
                className="site-header__logo-image"

                title="Morata Demo Store (password: alo)"
                style={{
                  boxSizing: "border-box",
                  WebkitTapHighlightColor: "transparent",
                  textDecoration: "none",
                  color: "#222222",
                  transition: "all 400ms linear 0ms",
                  outline: "0px",
                }}
              >
                <img
                  height={24}
                  width={150}
                  alt="Morata Demo Store (password: alo)"
                  src="https://demo-morata.myshopify.com/cdn/shop/files/logo_150x@2x.png?v=1697202938"
                  style={{
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                    maxWidth: "150px",
                    width: "auto",
                    height: "auto",
                  }}
                />
              </a>
            </div>
            <div
              className="header-logo hide-mobile col-md-3"
              style={{
                boxSizing: "border-box",
                WebkitTapHighlightColor: "transparent",
                position: "relative",
                paddingRight: "10px",
                paddingLeft: "10px",
                display: "flex",
                maxWidth: "300px",
                width: "100%",
              }}
            >
              <h1
                style={{
                  boxSizing: "border-box",
                  WebkitTapHighlightColor: "transparent",
                  margin: "0px",
                  lineHeight: 1,
                  color: "#222222",
                  fontFamily: "Rubik, sans-serif",
                  fontWeight: 500,
                }}
              >
                <a
                  className="site-header__logo-image"
                  aria-label="Morata Demo Store (password: alo)"
                 
                  style={{
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                    textDecoration: "none",
                    color: "#222222",
                    transition: "all 400ms linear 0ms",
                    outline: "0px",
                  }}
                >
                  <img
                    height={25}
                    width={150}
                    alt="Morata Demo Store (password: alo)"
                    src="https://demo-morata.myshopify.com/cdn/shop/files/logo_150x@2x.png?v=1697202938"
                    style={{
                      boxSizing: "border-box",
                      WebkitTapHighlightColor: "transparent",
                      maxWidth: "150px",
                      width: "auto",
                      height: "auto",
                    }}
                  />
                </a>
              </h1>
            </div>
            <div
              className="search-bar pd-0 col hide-mobile"
              style={{
                boxSizing: "border-box",
                WebkitTapHighlightColor: "transparent",
                position: "relative",
                width: "100%",
                flexBasis: "0px",
                flexGrow: 1,
                maxWidth: "100%",
                padding: "0px",
                paddingRight: "0px",
                paddingLeft: "0px",
              }}
            >
              <div
                className="aloSearch header-search"
                style={{
                  boxSizing: "border-box",
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                <div
                  className="laber_mini_cart"
                  style={{
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                  }}
                >
                  <div
                    className="mini_cart_wrap laber_search"
                    style={{
                      boxSizing: "border-box",
                      WebkitTapHighlightColor: "transparent",
                      position: "relative",
                      marginLeft: "45px",
                    }}
                  >
                    <form
                      className="search_header mini_search_frm pr js_frm_search"
                      action="/search"
                      method="post"
                      role="search"
                      style={{
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                        padding: "0px",
                        borderRadius: "3px",
                        backgroundColor: "rgb(255, 255, 255)",
                        width: "100%",
                      }}
                    >
                      <input
                        name="type"
                        type="hidden"
                        defaultValue="product"
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
                        name="options[unavailable_products]"
                        type="hidden"
                        defaultValue="last"
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
                        name="options[prefix]"
                        type="hidden"
                        defaultValue="none"
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
                        className="row"
                        style={{
                          boxSizing: "border-box",
                          WebkitTapHighlightColor: "transparent",
                          display: "flex",
                          flexWrap: "wrap",
                          margin: "0px",
                          marginRight: "0px",
                          marginLeft: "0px",
                          alignItems: "center",
                        }}
                      >
                        <div
                          className="frm_search_cat col-auto"
                          style={{
                            boxSizing: "border-box",
                            WebkitTapHighlightColor: "transparent",
                            padding: "0px",
                            paddingRight: "0px",
                            paddingLeft: "0px",
                            position: "relative",
                            flex: "0 0 auto",
                            width: "auto",
                            maxWidth: "none",
                          }}
                        >
                          <select
                            name="product_type"
                            style={{
                              boxSizing: "border-box",
                              WebkitTapHighlightColor: "transparent",
                              fontFamily: "Rubik, sans-serif",
                              backgroundPosition: "right 20px top 50%",
                              backgroundImage:
                                'url("https://demo-morata.myshopify.com/cdn/shop/t/3/assets/icon_down.png?v=49595819852549467621700037385")',
                              backgroundSize: "auto 6px",
                              backgroundRepeat: "no-repeat",
                              padding: "0px 30px 0px 20px",
                              outline: "0px",
                              transition: "border-color 0.5s ease 0s",
                              minWidth: "160px",
                              width: "100%",
                              verticalAlign: "middle",
                              appearance: "none",
                              display: "inline-block",
                              backgroundColor: "transparent",
                              boxShadow: "none",
                              color: "#222222",
                              fontSize: "14px",
                              lineHeight: "18px",
                              border: "none",
                              margin: "0px",
                              height: "50px",
                            }}
                          >
                            <option
                              value="*"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                              }}
                            >
                              All Categories
                            </option>
                            <option
                              value="Accessories"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                              }}
                            >
                              Accessories
                            </option>
                            <option
                              value="Basketball"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                              }}
                            >
                              Basketball
                            </option>
                            <option
                              value="Clothing"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                              }}
                            >
                              Clothing
                            </option>
                            <option
                              value="Computer"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                              }}
                            >
                              Computer
                            </option>
                            <option
                              value="Computer & Desktop"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                              }}
                            >
                              Computer & Desktop
                            </option>
                            <option
                              value="Cutting Machine"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                              }}
                            >
                              Cutting Machine
                            </option>
                            <option
                              value="Dining & Kitchen"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                              }}
                            >
                              Dining & Kitchen
                            </option>
                            <option
                              value="Drills"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                              }}
                            >
                              Drills
                            </option>
                            <option
                              value="electronic"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                              }}
                            >
                              electronic
                            </option>
                            <option
                              value="Electronics"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                              }}
                            >
                              Electronics
                            </option>
                            <option
                              value="Fresh Vegetables"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                              }}
                            >
                              Fresh Vegetables
                            </option>
                            <option
                              value="furniture"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                              }}
                            >
                              furniture
                            </option>
                            <option
                              value="Garden"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                              }}
                            >
                              Garden
                            </option>
                            <option
                              value="Handheld Power Drills"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                              }}
                            >
                              Handheld Power Drills
                            </option>
                            <option
                              value="Health & Beauty"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                              }}
                            >
                              Health & Beauty
                            </option>
                            <option
                              value="Jewelry"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                              }}
                            >
                              Jewelry
                            </option>
                            <option
                              value="Laptop"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                              }}
                            >
                              Laptop
                            </option>
                            <option
                              value="Laptop & Ipad"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                              }}
                            >
                              Laptop & Ipad
                            </option>
                            <option
                              value="Logitech"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                              }}
                            >
                              Logitech
                            </option>
                            <option
                              value="makeup"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                              }}
                            >
                              makeup
                            </option>
                            <option
                              value="Sectional Sofas"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                              }}
                            >
                              Sectional Sofas
                            </option>
                            <option
                              value="Smart Phones & Tablets"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                              }}
                            >
                              Smart Phones & Tablets
                            </option>
                            <option
                              value="Snack & Beverage"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                              }}
                            >
                              Snack & Beverage
                            </option>
                            <option
                              value="T-Shirt"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                              }}
                            >
                              T-Shirt
                            </option>
                            <option
                              value="Tables"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                              }}
                            >
                              Tables
                            </option>
                            <option
                              value="Televisions"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                              }}
                            >
                              Televisions
                            </option>
                            <option
                              value="Tools"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                              }}
                            >
                              Tools
                            </option>
                            <option
                              value="Watches"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                              }}
                            >
                              Watches
                            </option>
                            <option
                              value="Watches & Eyewear"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                              }}
                            >
                              Watches & Eyewear
                            </option>
                            <option
                              value="Women’s"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                              }}
                            >
                              Women’s
                            </option>
                          </select>
                        </div>
                        <div
                          className="frm_search_input col"
                          style={{
                            boxSizing: "border-box",
                            WebkitTapHighlightColor: "transparent",
                            width: "100%",
                            paddingRight: "10px",
                            paddingLeft: "10px",
                            display: "flex",
                            position: "relative",
                            flexBasis: "0px",
                            flexGrow: 1,
                            maxWidth: "100%",
                          }}
                        >
                          <input
                            className="search_header__input js_iput_search"
                            name="q"
                            type="text"
                            autoComplete="on"
                            placeholder="Search for products ..."
                            style={{
                              boxSizing: "border-box",
                              WebkitTapHighlightColor: "transparent",
                              outline: "0px",
                              borderRadius: "0px",
                              boxShadow: "none",
                              fontFamily: "Rubik, sans-serif",
                              width: "100%",
                              appearance: "none",
                              border: "none",
                              padding: "0px 10px",
                              background: "transparent",
                              height: "50px",
                              color: "rgb(141, 151, 158)",
                              fontWeight: 400,
                              fontSize: "13px",
                              lineHeight: "16px",
                            }}
                          />
                        </div>
                        <div
                          className="col-auto btn_search"
                          style={{
                            boxSizing: "border-box",
                            WebkitTapHighlightColor: "transparent",
                            position: "relative",
                            flex: "0 0 auto",
                            width: "auto",
                            maxWidth: "none",
                            padding: "0px",
                            paddingRight: "0px",
                            paddingLeft: "0px",
                          }}
                        >
                          <button
                            className="btn search_header__submit js_btn_search"
                            type="submit"
                            style={{
                              WebkitTapHighlightColor: "transparent",
                              fontFamily: "Rubik, sans-serif",
                              width: "50px",
                              transition: "all 400ms linear 0ms",
                              color: "#ffffff",
                              textTransform: "uppercase",
                              padding: "0px 16px",
                              whiteSpace: "nowrap",
                              display: "inline-flex",
                              justifyContent: "center",
                              alignItems: "center",
                              boxSizing: "border-box",
                              textAlign: "center",
                              verticalAlign: "middle",
                              userSelect: "none",
                              border: "none",
                              borderRadius: "3px",
                              position: "static",
                              minWidth: "42px",
                              height: "42px",
                              fontWeight: 600,
                              fontSize: "14px",
                              lineHeight: "18px",
                              marginTop: "4px",
                              marginRight: "4px",
                              marginBottom: "4px",
                              backgroundColor: "#16bcdc",
                              cursor: "pointer",
                            }}
                          >
                            <svg
                              height="17"
                              width="17"
                              fill="none"
                              viewBox="0 0 17 17"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                              }}
                            >
                              <path
                                d="M11.9 11.731C11.8 11.731 11.8 11.731 11.9 11.731C11.8 11.8304 11.8 11.8304 11.8 11.8304C11.3 12.3275 10.7 12.7251 9.9 13.0234C9.2 13.3216 8.4 13.4211 7.6 13.4211C6.8 13.4211 6 13.2222 5.3 12.924C4.6 12.6257 4 12.2281 3.4 11.6316C2.9 11.1345 2.4 10.4386 2.1 9.74269C1.8 9.1462 1.7 8.45029 1.7 7.65497C1.7 6.85965 1.9 6.06433 2.2 5.36842C2.5 4.5731 2.9 3.97661 3.4 3.38012C4 2.88304 4.6 2.48538 5.3 2.18713C6 1.88889 6.8 1.69006 7.6 1.69006C8.4 1.69006 9.2 1.88889 9.9 2.18713C10.6 2.48538 11.3 2.88304 11.8 3.47953C12.3 3.97661 12.7 4.67251 13.1 5.36842C13.4 6.06433 13.6 6.76023 13.6 7.65497C13.6 8.45029 13.4 9.24561 13.1 9.94152C12.8 10.538 12.4 11.1345 11.9 11.731ZM16.7 15.4094L13.6 12.3275C14.1 11.6316 14.5 10.9357 14.8 10.1404C15.1 9.34503 15.2 8.45029 15.2 7.55556C15.2 6.46199 15 5.46784 14.6 4.5731C14.2 3.67836 13.7 2.88304 13 2.18713C12.3 1.49123 11.5 0.994152 10.6 0.596491C9.7 0.19883 8.7 0 7.6 0C6.6 0 5.6 0.19883 4.6 0.596491C3.7 0.994152 2.9 1.49123 2.2 2.18713C1.5 2.88304 1 3.67836 0.6 4.67251C0.2 5.56725 0 6.5614 0 7.65497C0 8.64912 0.2 9.64327 0.6 10.6374C1 11.5322 1.6 12.3275 2.3 13.0234C3 13.7193 3.8 14.2164 4.7 14.7134C5.6 15.0117 6.6 15.2105 7.6 15.2105C8.5 15.2105 9.4 15.1111 10.2 14.8129C11 14.5146 11.8 14.117 12.4 13.6199L15.5 16.7018C15.7 16.9006 15.9 17 16.1 17C16.3 17 16.5 16.9006 16.7 16.7018C16.9 16.5029 17 16.3041 17 16.1053C17 15.807 16.9 15.6082 16.7 15.4094Z"
                                fill="#fff"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                }}
                              />
                            </svg>
                            <span
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                display: "none",
                              }}
                            >
                              Search
                            </span>
                          </button>
                        </div>
                      </div>
                    </form>
                    <div
                      className="mini_cart_content fixcl-scroll widget"
                      style={{
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                        flex: "1 1 auto",
                        overflow: "hidden",
                        width: "100%",
                        background: "rgb(255, 255, 255)",
                        transition: "all 0.24s linear 0s",
                        padding: "30px 5px 30px 30px",
                        borderRadius: "3px",
                        position: "absolute",
                        height: "auto",
                        zIndex: 999,
                        opacity: 0,
                        pointerEvents: "none",
                        boxShadow: "rgba(72, 123, 183, 0.15) 0px 0px 30px",
                        top: "auto",
                        transform: "translateY(20px)",
                      }}
                    >
                      <div
                        className="fixcl-scroll-content product_list_widget"
                        style={{
                          boxSizing: "border-box",
                          WebkitTapHighlightColor: "transparent",
                          maxHeight: "400px",
                          overflowY: "auto",
                          paddingRight: "22px",
                        }}
                      >
                        <div
                          className="skeleton_wrap skeleton_js d-none-important"
                          style={{
                            boxSizing: "border-box",
                            WebkitTapHighlightColor: "transparent",
                            position: "relative",
                            display: "none",
                          }}
                        >
                          <div
                            className="loading_search"
                            style={{
                              boxSizing: "border-box",
                              WebkitTapHighlightColor: "transparent",
                            }}
                          >
                            <div
                              className="item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                              }}
                            >
                              <div
                                className="product-item"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  padding: "0px 0px 15px",
                                  borderBottom: "1px dashed rgb(229, 232, 236)",
                                  display: "flex",
                                  alignItems: "center",
                                  marginBottom: "15px",
                                }}
                              >
                                <div
                                  className="product-image"
                                  style={{
                                    boxSizing: "border-box",
                                    WebkitTapHighlightColor: "transparent",
                                    position: "relative",
                                    background:
                                      "linear-gradient(to right, rgb(238, 238, 238) 8%, rgb(221, 221, 221) 18%, rgb(238, 238, 238) 33%) 0% 0% / 800px 104px",
                                    width: "60px",
                                    marginRight: "20px",
                                    height: "60px",
                                    animationDuration: "1s",
                                    animationFillMode: "forwards",
                                    animationIterationCount: "infinite",
                                    animationName: "placeHolderShimmer",
                                    animationTimingFunction: "linear",
                                  }}
                                />
                                <div
                                  className="product-content"
                                  style={{
                                    boxSizing: "border-box",
                                    WebkitTapHighlightColor: "transparent",
                                    gap: "5px",
                                    flexBasis: "0px",
                                    flexGrow: 1,
                                    maxWidth: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                  }}
                                >
                                  <div
                                    className="product-title"
                                    style={{
                                      boxSizing: "border-box",
                                      WebkitTapHighlightColor: "transparent",
                                      background:
                                        "linear-gradient(to right, rgb(238, 238, 238) 8%, rgb(221, 221, 221) 18%, rgb(238, 238, 238) 33%) 0% 0% / 800px 104px",
                                      height: "10px",
                                      width: "100%",
                                      animationDuration: "1s",
                                      animationFillMode: "forwards",
                                      animationIterationCount: "infinite",
                                      animationName: "placeHolderShimmer",
                                      animationTimingFunction: "linear",
                                    }}
                                  />
                                  <div
                                    className="product-price"
                                    style={{
                                      boxSizing: "border-box",
                                      WebkitTapHighlightColor: "transparent",
                                      background:
                                        "linear-gradient(to right, rgb(238, 238, 238) 8%, rgb(221, 221, 221) 18%, rgb(238, 238, 238) 33%) 0% 0% / 800px 104px",
                                      height: "10px",
                                      width: "100%",
                                      animationDuration: "1s",
                                      animationFillMode: "forwards",
                                      animationIterationCount: "infinite",
                                      animationName: "placeHolderShimmer",
                                      animationTimingFunction: "linear",
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                            <div
                              className="item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                              }}
                            >
                              <div
                                className="product-item"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  padding: "0px 0px 15px",
                                  borderBottom: "1px dashed rgb(229, 232, 236)",
                                  display: "flex",
                                  alignItems: "center",
                                  marginBottom: "15px",
                                }}
                              >
                                <div
                                  className="product-image"
                                  style={{
                                    boxSizing: "border-box",
                                    WebkitTapHighlightColor: "transparent",
                                    position: "relative",
                                    background:
                                      "linear-gradient(to right, rgb(238, 238, 238) 8%, rgb(221, 221, 221) 18%, rgb(238, 238, 238) 33%) 0% 0% / 800px 104px",
                                    width: "60px",
                                    marginRight: "20px",
                                    height: "60px",
                                    animationDuration: "1s",
                                    animationFillMode: "forwards",
                                    animationIterationCount: "infinite",
                                    animationName: "placeHolderShimmer",
                                    animationTimingFunction: "linear",
                                  }}
                                />
                                <div
                                  className="product-content"
                                  style={{
                                    boxSizing: "border-box",
                                    WebkitTapHighlightColor: "transparent",
                                    gap: "5px",
                                    flexBasis: "0px",
                                    flexGrow: 1,
                                    maxWidth: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                  }}
                                >
                                  <div
                                    className="product-title"
                                    style={{
                                      boxSizing: "border-box",
                                      WebkitTapHighlightColor: "transparent",
                                      background:
                                        "linear-gradient(to right, rgb(238, 238, 238) 8%, rgb(221, 221, 221) 18%, rgb(238, 238, 238) 33%) 0% 0% / 800px 104px",
                                      height: "10px",
                                      width: "100%",
                                      animationDuration: "1s",
                                      animationFillMode: "forwards",
                                      animationIterationCount: "infinite",
                                      animationName: "placeHolderShimmer",
                                      animationTimingFunction: "linear",
                                    }}
                                  />
                                  <div
                                    className="product-price"
                                    style={{
                                      boxSizing: "border-box",
                                      WebkitTapHighlightColor: "transparent",
                                      background:
                                        "linear-gradient(to right, rgb(238, 238, 238) 8%, rgb(221, 221, 221) 18%, rgb(238, 238, 238) 33%) 0% 0% / 800px 104px",
                                      height: "10px",
                                      width: "100%",
                                      animationDuration: "1s",
                                      animationFillMode: "forwards",
                                      animationIterationCount: "infinite",
                                      animationName: "placeHolderShimmer",
                                      animationTimingFunction: "linear",
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                            <div
                              className="item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                              }}
                            >
                              <div
                                className="product-item"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  padding: "0px 0px 15px",
                                  borderBottom: "1px dashed rgb(229, 232, 236)",
                                  display: "flex",
                                  alignItems: "center",
                                  marginBottom: "15px",
                                }}
                              >
                                <div
                                  className="product-image"
                                  style={{
                                    boxSizing: "border-box",
                                    WebkitTapHighlightColor: "transparent",
                                    position: "relative",
                                    background:
                                      "linear-gradient(to right, rgb(238, 238, 238) 8%, rgb(221, 221, 221) 18%, rgb(238, 238, 238) 33%) 0% 0% / 800px 104px",
                                    width: "60px",
                                    marginRight: "20px",
                                    height: "60px",
                                    animationDuration: "1s",
                                    animationFillMode: "forwards",
                                    animationIterationCount: "infinite",
                                    animationName: "placeHolderShimmer",
                                    animationTimingFunction: "linear",
                                  }}
                                />
                                <div
                                  className="product-content"
                                  style={{
                                    boxSizing: "border-box",
                                    WebkitTapHighlightColor: "transparent",
                                    gap: "5px",
                                    flexBasis: "0px",
                                    flexGrow: 1,
                                    maxWidth: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                  }}
                                >
                                  <div
                                    className="product-title"
                                    style={{
                                      boxSizing: "border-box",
                                      WebkitTapHighlightColor: "transparent",
                                      background:
                                        "linear-gradient(to right, rgb(238, 238, 238) 8%, rgb(221, 221, 221) 18%, rgb(238, 238, 238) 33%) 0% 0% / 800px 104px",
                                      height: "10px",
                                      width: "100%",
                                      animationDuration: "1s",
                                      animationFillMode: "forwards",
                                      animationIterationCount: "infinite",
                                      animationName: "placeHolderShimmer",
                                      animationTimingFunction: "linear",
                                    }}
                                  />
                                  <div
                                    className="product-price"
                                    style={{
                                      boxSizing: "border-box",
                                      WebkitTapHighlightColor: "transparent",
                                      background:
                                        "linear-gradient(to right, rgb(238, 238, 238) 8%, rgb(221, 221, 221) 18%, rgb(238, 238, 238) 33%) 0% 0% / 800px 104px",
                                      height: "10px",
                                      width: "100%",
                                      animationDuration: "1s",
                                      animationFillMode: "forwards",
                                      animationIterationCount: "infinite",
                                      animationName: "placeHolderShimmer",
                                      animationTimingFunction: "linear",
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                            <div
                              className="item"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                              }}
                            >
                              <div
                                className="product-item"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  padding: "0px 0px 15px",
                                  borderBottom: "1px dashed rgb(229, 232, 236)",
                                  display: "flex",
                                  alignItems: "center",
                                  marginBottom: "15px",
                                }}
                              >
                                <div
                                  className="product-image"
                                  style={{
                                    boxSizing: "border-box",
                                    WebkitTapHighlightColor: "transparent",
                                    position: "relative",
                                    background:
                                      "linear-gradient(to right, rgb(238, 238, 238) 8%, rgb(221, 221, 221) 18%, rgb(238, 238, 238) 33%) 0% 0% / 800px 104px",
                                    width: "60px",
                                    marginRight: "20px",
                                    height: "60px",
                                    animationDuration: "1s",
                                    animationFillMode: "forwards",
                                    animationIterationCount: "infinite",
                                    animationName: "placeHolderShimmer",
                                    animationTimingFunction: "linear",
                                  }}
                                />
                                <div
                                  className="product-content"
                                  style={{
                                    boxSizing: "border-box",
                                    WebkitTapHighlightColor: "transparent",
                                    gap: "5px",
                                    flexBasis: "0px",
                                    flexGrow: 1,
                                    maxWidth: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                  }}
                                >
                                  <div
                                    className="product-title"
                                    style={{
                                      boxSizing: "border-box",
                                      WebkitTapHighlightColor: "transparent",
                                      background:
                                        "linear-gradient(to right, rgb(238, 238, 238) 8%, rgb(221, 221, 221) 18%, rgb(238, 238, 238) 33%) 0% 0% / 800px 104px",
                                      height: "10px",
                                      width: "100%",
                                      animationDuration: "1s",
                                      animationFillMode: "forwards",
                                      animationIterationCount: "infinite",
                                      animationName: "placeHolderShimmer",
                                      animationTimingFunction: "linear",
                                    }}
                                  />
                                  <div
                                    className="product-price"
                                    style={{
                                      boxSizing: "border-box",
                                      WebkitTapHighlightColor: "transparent",
                                      background:
                                        "linear-gradient(to right, rgb(238, 238, 238) 8%, rgb(221, 221, 221) 18%, rgb(238, 238, 238) 33%) 0% 0% / 800px 104px",
                                      height: "10px",
                                      width: "100%",
                                      animationDuration: "1s",
                                      animationFillMode: "forwards",
                                      animationIterationCount: "infinite",
                                      animationName: "placeHolderShimmer",
                                      animationTimingFunction: "linear",
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="js_prs_search"
                          style={{
                            boxSizing: "border-box",
                            WebkitTapHighlightColor: "transparent",
                          }}
                        >
                          <div
                            className="row"
                            style={{
                              boxSizing: "border-box",
                              WebkitTapHighlightColor: "transparent",
                              display: "flex",
                              flexWrap: "wrap",
                              marginRight: "-10px",
                              marginLeft: "-10px",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="header-top-meta col-md-3"
              style={{
                boxSizing: "border-box",
                WebkitTapHighlightColor: "transparent",
                position: "relative",
                width: "100%",
                paddingRight: "10px",
                paddingLeft: "10px",
                maxWidth: "30%",
              }}
            >
              <ul
                className="header-control"
                style={{
                  boxSizing: "border-box",
                  WebkitTapHighlightColor: "transparent",
                  padding: "0px",
                  listStyle: "none",
                  margin: "0px",
                  gap: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <li
                  className="signin item-list hide-mobile"
                  style={{
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                    listStyle: "none",
                    display: "inline-block",
                    paddingLeft: "0px",
                    position: "relative",
                  }}
                >
                  <a
                    className="push_side header-icon"

                    title="Login"
                    style={{
                      boxSizing: "border-box",
                      WebkitTapHighlightColor: "transparent",
                      textDecoration: "none",
                      transition: "all 400ms linear 0ms",
                      gap: "10px",
                      fontSize: "22px",
                      position: "relative",
                      lineHeight: 1,
                      display: "flex",
                      color: "#ffffff",
                      justifyContent: "center",
                      outline: "0px",
                    }}
                  >
                    <svg
                      height="27"
                      fill="none"
                      viewBox="0 0 17 17"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                        color: "#ffffff",
                        fill: "#ffffff",
                      }}
                    >
                      <path
                        d="M16.8927 15.7682C16.0329 14.3137 14.8061 13.1078 13.3338 12.27C11.8614 11.4322 10.1946 10.9915 8.49845 10.9915C6.80225 10.9915 5.13546 11.4322 3.66314 12.27C2.19082 13.1078 0.964024 14.3137 0.104236 15.7682C-0.00102398 15.9568 -0.027822 16.179 0.0295835 16.387C0.0566587 16.493 0.106188 16.592 0.174854 16.6774C0.243521 16.7628 0.329737 16.8326 0.427728 16.8821C0.554141 16.9534 0.697158 16.9904 0.842462 16.9894C0.986554 16.9955 1.12952 16.9616 1.25545 16.8917C1.38138 16.8218 1.48536 16.7185 1.5558 16.5933C2.26752 15.3886 3.2833 14.3898 4.50251 13.6958C5.72172 13.0018 7.10204 12.6367 8.50674 12.6367C9.91144 12.6367 11.2918 13.0018 12.511 13.6958C13.7302 14.3898 14.746 15.3886 15.4577 16.5933C15.5685 16.7807 15.7491 16.9169 15.9603 16.9725C16.1715 17.0282 16.3963 16.9986 16.5858 16.8904C16.6801 16.8403 16.7628 16.7711 16.8285 16.6873C16.8943 16.6034 16.9415 16.5067 16.9673 16.4035C16.998 16.298 17.0072 16.1875 16.9944 16.0784C16.9816 15.9693 16.947 15.8638 16.8927 15.7682Z"
                        fill="#111111"
                        style={{
                          boxSizing: "border-box",
                          WebkitTapHighlightColor: "transparent",
                          fill: "#ffffff",
                        }}
                      />
                      <path
                        d="M8.4999 10.2C9.83646 10.2002 11.1197 9.67091 12.0735 8.72594C13.0273 7.78097 13.5754 6.49588 13.5999 5.14718C13.5999 3.78206 13.0626 2.47286 12.1061 1.50757C11.1497 0.542291 9.85251 0 8.4999 0C7.1473 0 5.85009 0.542291 4.89366 1.50757C3.93722 2.47286 3.3999 3.78206 3.3999 5.14718C3.42441 6.49588 3.97252 7.78097 4.92632 8.72594C5.88011 9.67091 7.16334 10.2002 8.4999 10.2ZM5.0999 5.14718C5.0999 4.2371 5.45812 3.3643 6.09574 2.72078C6.73336 2.07725 7.59817 1.71573 8.4999 1.71573C9.40164 1.71573 10.2664 2.07725 10.9041 2.72078C11.5417 3.3643 11.8999 4.2371 11.8999 5.14718C11.8999 6.05726 11.5417 6.93006 10.9041 7.57359C10.2664 8.21711 9.40164 8.57864 8.4999 8.57864C7.59817 8.57864 6.73336 8.21711 6.09574 7.57359C5.45812 6.93006 5.0999 6.05726 5.0999 5.14718Z"
                        fill="#111111"
                        style={{
                          boxSizing: "border-box",
                          WebkitTapHighlightColor: "transparent",
                          fill: "#ffffff",
                        }}
                      />
                    </svg>
                    <span
                      className="text"
                      style={{
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                        gap: "5px",
                        fontSize: "13px",
                        display: "flex",
                        flexDirection: "column",
                        lineHeight: 1,
                        fontWeight: 400,
                      }}
                    >
                      <span
                        className="l"
                        style={{
                          boxSizing: "border-box",
                          WebkitTapHighlightColor: "transparent",
                          opacity: 0.5,
                        }}
                      >
                        Login
                      </span>
                      <span
                        className="a"
                        style={{
                          boxSizing: "border-box",
                          WebkitTapHighlightColor: "transparent",
                          fontWeight: 500,
                          fontSize: "14px",
                        }}
                      >
                        Account
                      </span>
                    </span>
                  </a>
                </li>
                <li
                  className="alo-wishlist hide-mobile"
                  style={{
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                    listStyle: "none",
                    display: "inline-block",
                    position: "relative",
                  }}
                >
                  <a
                    className="push_side header-icon"

                    title="My Wishlist"
                    style={{
                      boxSizing: "border-box",
                      WebkitTapHighlightColor: "transparent",
                      textDecoration: "none",
                      transition: "all 400ms linear 0ms",
                      gap: "10px",
                      fontSize: "22px",
                      position: "relative",
                      lineHeight: 1,
                      display: "flex",
                      color: "#ffffff",
                      justifyContent: "center",
                      outline: "0px",
                    }}
                  >
                    <svg
                      height="27"
                      fill="none"
                      viewBox="0 0 20 17"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                        color: "#ffffff",
                        fill: "#ffffff",
                      }}
                    >
                      <path
                        d="M18.3887 1.55421C17.3506 0.55606 15.9769 0 14.5491 0C13.1212 0 11.7475 0.55606 10.7094 1.55421L10 2.24289L9.29063 1.55421C8.25514 0.549292 6.87729 -0.00765789 5.44682 0.000470637C4.01902 -0.00635871 2.64421 0.550561 1.61125 1.55421C1.10276 2.0382 0.697356 2.6234 0.420188 3.27353C0.14302 3.92365 0 4.62483 0 5.33357C0 6.0423 0.14302 6.74348 0.420188 7.3936C0.697356 8.04373 1.10276 8.62894 1.61125 9.11292L9.4391 16.7724C9.51585 16.8408 9.60199 16.8974 9.6948 16.9404C9.89078 17.0199 10.1092 17.0199 10.3052 16.9404C10.398 16.8974 10.4841 16.8408 10.5609 16.7724L18.3887 9.11292C18.8972 8.62894 19.3026 8.04373 19.5798 7.3936C19.857 6.74348 20 6.0423 20 5.33357C20 4.62483 19.857 3.92365 19.5798 3.27353C19.3026 2.6234 18.8972 2.0382 18.3887 1.55421ZM18.3887 5.31677C18.3911 5.81361 18.2943 6.30576 18.1043 6.7634C17.9143 7.22103 17.6351 7.63463 17.2834 7.97912L10 15.1179L2.7248 7.97912C2.36775 7.63749 2.08319 7.22502 1.88868 6.76713C1.69417 6.30925 1.59382 5.81565 1.59382 5.31677C1.59382 4.81789 1.69417 4.32429 1.88868 3.86641C2.08319 3.40852 2.36775 2.99605 2.7248 2.65442C3.45741 1.94171 4.43359 1.54714 5.44682 1.55421C6.46509 1.5463 7.44671 1.94068 8.18532 2.65442L9.4391 3.88901C9.51585 3.95737 9.60199 4.01396 9.6948 4.05698C9.89078 4.13645 10.1092 4.13645 10.3052 4.05698C10.398 4.01396 10.4841 3.95737 10.5609 3.88901L11.8229 2.65442C12.5555 1.94171 13.5317 1.54714 14.5449 1.55421C15.5632 1.5463 16.5448 1.94068 17.2834 2.65442C17.6381 2.99747 17.9204 3.41042 18.1133 3.86813C18.3061 4.32583 18.4055 4.81872 18.4052 5.31677H18.3887Z"
                        fill="#111111"
                        style={{
                          boxSizing: "border-box",
                          WebkitTapHighlightColor: "transparent",
                          fill: "#ffffff",
                        }}
                      />
                    </svg>
                    <span
                      className="header__counter"
                      style={{
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                        background: "#16bcdc",
                        borderRadius: "100%",
                        color: "#ffffff",
                        width: "18px",
                        height: "18px",
                        display: "inline-flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "absolute",
                        top: "-5px",
                        left: "24px",
                        fontWeight: 400,
                        fontSize: "11px",
                      }}
                    >
                      0
                    </span>
                    <span
                      className="text"
                      style={{
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                        gap: "5px",
                        fontSize: "13px",
                        display: "flex",
                        flexDirection: "column",
                        lineHeight: 1,
                        fontWeight: 400,
                        marginLeft: "10px",
                      }}
                    >
                      <span
                        className="l"
                        style={{
                          boxSizing: "border-box",
                          WebkitTapHighlightColor: "transparent",
                          opacity: 0.5,
                        }}
                      >
                        Favorite
                      </span>
                      <span
                        className="a"
                        style={{
                          boxSizing: "border-box",
                          WebkitTapHighlightColor: "transparent",
                          fontWeight: 500,
                          fontSize: "14px",
                        }}
                      >
                        My Wishlist
                      </span>
                    </span>
                  </a>
                </li>
                <li
                  className="laber-compare hide-mobile"
                  style={{
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                    listStyle: "none",
                    position: "relative",
                    display: "none",
                  }}
                >
                  <a
                    className="push_side header-icon"

                    title="Compare"
                    style={{
                      boxSizing: "border-box",
                      WebkitTapHighlightColor: "transparent",
                      textDecoration: "none",
                      transition: "all 400ms linear 0ms",
                      gap: "10px",
                      fontSize: "22px",
                      position: "relative",
                      lineHeight: 1,
                      display: "flex",
                      color: "#ffffff",
                      justifyContent: "center",
                      outline: "0px",
                    }}
                  >
                    <svg
                      height="27"
                      fill="none"
                      viewBox="0 0 14 14"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                        color: "#ffffff",
                        fill: "#ffffff",
                      }}
                    >
                      <path
                        d="M7 1.98047L11.5254 4.25L7 6.51953L2.47461 4.25L7 1.98047ZM6.74023 0.818359L0.902344 3.73047C0.75651 3.80339 0.65625 3.91732 0.601562 4.07227C0.55599 4.2181 0.569661 4.36393 0.642578 4.50977C0.669922 4.57357 0.70638 4.62826 0.751953 4.67383C0.797526 4.71029 0.847656 4.74219 0.902344 4.76953L6.74023 7.68164C6.82227 7.72721 6.90885 7.75 7 7.75C7.09115 7.75 7.17773 7.72721 7.25977 7.68164L13.0977 4.76953C13.2435 4.69661 13.3392 4.58724 13.3848 4.44141C13.4395 4.28646 13.4303 4.13607 13.3574 3.99023C13.3301 3.92643 13.2936 3.8763 13.248 3.83984C13.2025 3.79427 13.1523 3.75781 13.0977 3.73047L7.25977 0.804688C7.17773 0.768229 7.09115 0.75 7 0.75C6.90885 0.75 6.82227 0.768229 6.74023 0.804688V0.818359ZM0.902344 10.6074L6.74023 13.5195C6.82227 13.5651 6.90885 13.5833 7 13.5742C7.09115 13.5742 7.17773 13.556 7.25977 13.5195L13.0977 10.6074C13.2435 10.5345 13.3392 10.4206 13.3848 10.2656C13.4395 10.1107 13.4303 9.96484 13.3574 9.82812C13.2845 9.68229 13.1706 9.58659 13.0156 9.54102C12.8607 9.48633 12.7148 9.49089 12.5781 9.55469L7 12.3438L1.42188 9.56836C1.28516 9.49544 1.13932 9.48633 0.984375 9.54102C0.829427 9.58659 0.715495 9.68229 0.642578 9.82812C0.569661 9.96484 0.55599 10.1107 0.601562 10.2656C0.65625 10.4206 0.75651 10.5345 0.902344 10.6074ZM0.902344 7.68164L6.74023 10.6074C6.82227 10.6439 6.90885 10.6621 7 10.6621C7.09115 10.6621 7.17773 10.6439 7.25977 10.6074L13.0977 7.68164C13.2435 7.61784 13.3392 7.50846 13.3848 7.35352C13.4395 7.19857 13.4303 7.04818 13.3574 6.90234C13.2845 6.75651 13.1706 6.66081 13.0156 6.61523C12.8607 6.56055 12.7148 6.56966 12.5781 6.64258L7 9.43164L1.42188 6.64258C1.28516 6.56966 1.13932 6.56055 0.984375 6.61523C0.829427 6.66081 0.715495 6.75651 0.642578 6.90234C0.569661 7.04818 0.55599 7.19857 0.601562 7.35352C0.65625 7.50846 0.75651 7.6224 0.902344 7.69531V7.68164Z"
                        fill="#111111"
                        style={{
                          boxSizing: "border-box",
                          WebkitTapHighlightColor: "transparent",
                          fill: "#ffffff",
                        }}
                      />
                    </svg>
                    <span
                      className="header__counter"
                      style={{
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                        background: "#16bcdc",
                        borderRadius: "100%",
                        color: "#ffffff",
                        width: "18px",
                        height: "18px",
                        display: "inline-flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "absolute",
                        top: "-5px",
                        left: "24px",
                        fontWeight: 400,
                        fontSize: "11px",
                      }}
                    >
                      0
                    </span>
                  </a>
                </li>
                <li
                  className="box-minicart"
                  style={{
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                    listStyle: "none",
                    display: "inline-block",
                    position: "relative",
                    paddingRight: "0px",
                  }}
                >
                  <div
                    className="minicart"
                    style={{
                      boxSizing: "border-box",
                      WebkitTapHighlightColor: "transparent",
                    }}
                  >
                    <div
                      className="cart-block box-has-content"
                      style={{
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                        display: "flex",
                      }}
                    >
                      <a
                        className="push_side header-icon"
                     
                        title="Your Cart"
                        style={{
                          boxSizing: "border-box",
                          WebkitTapHighlightColor: "transparent",
                          textDecoration: "none",
                          transition: "all 400ms linear 0ms",
                          gap: "10px",
                          fontSize: "22px",
                          position: "relative",
                          lineHeight: 1,
                          display: "flex",
                          color: "#ffffff",
                          justifyContent: "center",
                          outline: "0px",
                        }}
                      >
                        <svg
                          height="27"
                          fill="none"
                          viewBox="0 0 21 17"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            boxSizing: "border-box",
                            WebkitTapHighlightColor: "transparent",
                            color: "#ffffff",
                            fill: "#ffffff",
                          }}
                        >
                          <path
                            d="M14.3699 15.3408C14.1509 15.3408 13.941 15.2536 13.7862 15.0983C13.6314 14.9431 13.5444 14.7325 13.5444 14.5129H11.8936C11.8936 15.1716 12.1545 15.8033 12.6189 16.2691C13.0832 16.7348 13.7131 16.9965 14.3699 16.9965C15.0266 16.9965 15.6565 16.7348 16.1209 16.2691C16.5853 15.8033 16.8462 15.1716 16.8462 14.5129H15.1953C15.1953 14.7325 15.1083 14.9431 14.9535 15.0983C14.7987 15.2536 14.5888 15.3408 14.3699 15.3408Z"
                            fill="#111111"
                            style={{
                              boxSizing: "border-box",
                              WebkitTapHighlightColor: "transparent",
                              fill: "#ffffff",
                            }}
                          />
                          <path
                            d="M8.5612 15.3408C8.34228 15.3408 8.13233 15.2536 7.97753 15.0983C7.82273 14.9431 7.73576 14.7325 7.73576 14.5129H6.07715C6.07715 14.8396 6.14129 15.163 6.26592 15.4647C6.39055 15.7665 6.57322 16.0407 6.8035 16.2716C7.03378 16.5026 7.30717 16.6858 7.60805 16.8108C7.90893 16.9358 8.23141 17.0001 8.55707 17.0001C8.88274 17.0001 9.20522 16.9358 9.5061 16.8108C9.80698 16.6858 10.0804 16.5026 10.3106 16.2716C10.5409 16.0407 10.7236 15.7665 10.8482 15.4647C10.9729 15.163 11.037 14.8396 11.037 14.5129H9.38612C9.38612 14.7324 9.29923 14.9429 9.14454 15.0981C8.98985 15.2534 8.78003 15.3406 8.5612 15.3408Z"
                            fill="#111111"
                            style={{
                              boxSizing: "border-box",
                              WebkitTapHighlightColor: "transparent",
                              fill: "#ffffff",
                            }}
                          />
                          <path
                            d="M19.3299 1.64401C19.2849 1.63633 19.2393 1.63252 19.1937 1.63263H5.9867C5.76778 1.63263 5.55782 1.71985 5.40302 1.8751C5.24823 2.03035 5.16126 2.24092 5.16126 2.46047C5.16126 2.68003 5.24823 2.8906 5.40302 3.04585C5.55782 3.2011 5.76778 3.28832 5.9867 3.28832H18.2192L18.001 4.60149L16.8438 11.5668H6.07595L3.26946 4.60149L1.59537 0.482961C1.50684 0.289212 1.34721 0.13717 1.14972 0.0584856C0.952225 -0.020199 0.732083 -0.0194636 0.535118 0.0605389C0.338153 0.140541 0.179541 0.293646 0.0922992 0.487983C0.00505767 0.682319 -0.00409102 0.902913 0.0667575 1.10384L2.73963 7.68158L4.56385 12.5307C4.6985 12.9389 4.97657 13.2224 5.37794 13.2224H17.5428C17.7383 13.2225 17.9275 13.1531 18.0766 13.0264C18.2258 12.8997 18.3253 12.724 18.3574 12.5307L19.675 4.60149L20.0083 2.59655C20.0443 2.38002 19.993 2.15803 19.8658 1.9794C19.7386 1.80077 19.5458 1.68013 19.3299 1.64401Z"
                            fill="#111111"
                            style={{
                              boxSizing: "border-box",
                              WebkitTapHighlightColor: "transparent",
                              fill: "#ffffff",
                            }}
                          />
                        </svg>
                        <span
                          className="header__counter js-cart-count"
                          style={{
                            boxSizing: "border-box",
                            WebkitTapHighlightColor: "transparent",
                            background: "#16bcdc",
                            borderRadius: "100%",
                            color: "#ffffff",
                            width: "18px",
                            height: "18px",
                            display: "inline-flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "-5px",
                            left: "24px",
                            fontWeight: 400,
                            fontSize: "11px",
                          }}
                        >
                          1
                        </span>
                        <span
                          className="total-price"
                          style={{
                            boxSizing: "border-box",
                            WebkitTapHighlightColor: "transparent",
                            fontWeight: 500,
                            gap: "5px",
                            display: "flex",
                            color: "#ffffff",
                            flexDirection: "column",
                            justifyContent: "center",
                            marginLeft: "10px",
                            fontSize: "13px",
                            lineHeight: 1,
                          }}
                        >
                          <span
                            className="text"
                            style={{
                              boxSizing: "border-box",
                              WebkitTapHighlightColor: "transparent",
                              opacity: 0.5,
                              gap: "5px",
                              fontSize: "13px",
                              display: "flex",
                              flexDirection: "column",
                              lineHeight: 1,
                              fontWeight: 400,
                            }}
                          >
                            Your Cart{" "}
                          </span>
                          <span
                            className="js-total-price"
                            style={{
                              boxSizing: "border-box",
                              WebkitTapHighlightColor: "transparent",
                              fontWeight: 500,
                              fontSize: "14px",
                            }}
                          >
                            {" "}
                            $210.00
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="aloSearch-mobile header-search hide-desktop"
            style={{
              boxSizing: "border-box",
              WebkitTapHighlightColor: "transparent",
              display: "none",
            }}
          >
            <div
              className="laber_mini_cart"
              style={{
                boxSizing: "border-box",
                WebkitTapHighlightColor: "transparent",
              }}
            >
              <div
                className="mini_cart_wrap laber_search"
                style={{
                  boxSizing: "border-box",
                  WebkitTapHighlightColor: "transparent",
                  position: "relative",
                }}
              >
                <form
                  className="search_header mini_search_frm pr js_frm_search alo-border-color"
                  action="/search"
                  method="post"
                  role="search"
                  style={{
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                    borderColor: "rgba(0,0,0,0)",
                    padding: "0px",
                    borderRadius: "3px",
                    backgroundColor: "rgb(255, 255, 255)",
                    width: "330px",
                  }}
                >
                  <input
                    name="type"
                    type="hidden"
                    defaultValue="product"
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
                    name="options[unavailable_products]"
                    type="hidden"
                    defaultValue="last"
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
                    name="options[prefix]"
                    type="hidden"
                    defaultValue="none"
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
                    className="row"
                    style={{
                      boxSizing: "border-box",
                      WebkitTapHighlightColor: "transparent",
                      display: "flex",
                      flexWrap: "wrap",
                      margin: "0px",
                      marginRight: "0px",
                      marginLeft: "0px",
                      alignItems: "center",
                    }}
                  >
                    <div
                      className="frm_search_input col"
                      style={{
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                        width: "100%",
                        paddingRight: "10px",
                        paddingLeft: "10px",
                        display: "flex",
                        position: "relative",
                        flexBasis: "0px",
                        flexGrow: 1,
                        maxWidth: "100%",
                      }}
                    >
                      <input
                        className="search_header__input js_iput_search"
                        name="q"
                        type="text"
                        autoComplete="off"
                        placeholder="Search for products ..."
                        style={{
                          boxSizing: "border-box",
                          WebkitTapHighlightColor: "transparent",
                          outline: "0px",
                          borderRadius: "0px",
                          boxShadow: "none",
                          fontFamily: "Rubik, sans-serif",
                          width: "100%",
                          appearance: "none",
                          border: "none",
                          padding: "0px 10px",
                          background: "transparent",
                          height: "50px",
                          color: "rgb(141, 151, 158)",
                          fontWeight: 400,
                          fontSize: "13px",
                          lineHeight: "16px",
                        }}
                      />
                    </div>
                    <div
                      className="col-auto btn_search"
                      style={{
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                        position: "relative",
                        flex: "0 0 auto",
                        width: "auto",
                        maxWidth: "none",
                        padding: "0px",
                        paddingRight: "0px",
                        paddingLeft: "0px",
                      }}
                    >
                      <button
                        className="btn search_header__submit js_btn_search"
                        type="submit"
                        style={{
                          WebkitTapHighlightColor: "transparent",
                          fontFamily: "Rubik, sans-serif",
                          width: "50px",
                          transition: "all 400ms linear 0ms",
                          color: "#ffffff",
                          textTransform: "uppercase",
                          padding: "0px 16px",
                          whiteSpace: "nowrap",
                          display: "inline-flex",
                          justifyContent: "center",
                          alignItems: "center",
                          boxSizing: "border-box",
                          textAlign: "center",
                          verticalAlign: "middle",
                          userSelect: "none",
                          border: "none",
                          borderRadius: "3px",
                          position: "static",
                          minWidth: "42px",
                          height: "42px",
                          fontWeight: 600,
                          fontSize: "14px",
                          lineHeight: "18px",
                          marginTop: "4px",
                          marginRight: "4px",
                          marginBottom: "4px",
                          backgroundColor: "#16bcdc",
                          cursor: "pointer",
                        }}
                      >
                        <svg
                          height="17"
                          width="17"
                          fill="none"
                          viewBox="0 0 17 17"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            boxSizing: "border-box",
                            WebkitTapHighlightColor: "transparent",
                          }}
                        >
                          <path
                            d="M11.9 11.731C11.8 11.731 11.8 11.731 11.9 11.731C11.8 11.8304 11.8 11.8304 11.8 11.8304C11.3 12.3275 10.7 12.7251 9.9 13.0234C9.2 13.3216 8.4 13.4211 7.6 13.4211C6.8 13.4211 6 13.2222 5.3 12.924C4.6 12.6257 4 12.2281 3.4 11.6316C2.9 11.1345 2.4 10.4386 2.1 9.74269C1.8 9.1462 1.7 8.45029 1.7 7.65497C1.7 6.85965 1.9 6.06433 2.2 5.36842C2.5 4.5731 2.9 3.97661 3.4 3.38012C4 2.88304 4.6 2.48538 5.3 2.18713C6 1.88889 6.8 1.69006 7.6 1.69006C8.4 1.69006 9.2 1.88889 9.9 2.18713C10.6 2.48538 11.3 2.88304 11.8 3.47953C12.3 3.97661 12.7 4.67251 13.1 5.36842C13.4 6.06433 13.6 6.76023 13.6 7.65497C13.6 8.45029 13.4 9.24561 13.1 9.94152C12.8 10.538 12.4 11.1345 11.9 11.731ZM16.7 15.4094L13.6 12.3275C14.1 11.6316 14.5 10.9357 14.8 10.1404C15.1 9.34503 15.2 8.45029 15.2 7.55556C15.2 6.46199 15 5.46784 14.6 4.5731C14.2 3.67836 13.7 2.88304 13 2.18713C12.3 1.49123 11.5 0.994152 10.6 0.596491C9.7 0.19883 8.7 0 7.6 0C6.6 0 5.6 0.19883 4.6 0.596491C3.7 0.994152 2.9 1.49123 2.2 2.18713C1.5 2.88304 1 3.67836 0.6 4.67251C0.2 5.56725 0 6.5614 0 7.65497C0 8.64912 0.2 9.64327 0.6 10.6374C1 11.5322 1.6 12.3275 2.3 13.0234C3 13.7193 3.8 14.2164 4.7 14.7134C5.6 15.0117 6.6 15.2105 7.6 15.2105C8.5 15.2105 9.4 15.1111 10.2 14.8129C11 14.5146 11.8 14.117 12.4 13.6199L15.5 16.7018C15.7 16.9006 15.9 17 16.1 17C16.3 17 16.5 16.9006 16.7 16.7018C16.9 16.5029 17 16.3041 17 16.1053C17 15.807 16.9 15.6082 16.7 15.4094Z"
                            fill="#fff"
                            style={{
                              boxSizing: "border-box",
                              WebkitTapHighlightColor: "transparent",
                            }}
                          />
                        </svg>
                        <span
                          style={{
                            boxSizing: "border-box",
                            WebkitTapHighlightColor: "transparent",
                            display: "none",
                          }}
                        >
                          Search
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
                <div
                  className="mini_cart_content fixcl-scroll widget"
                  style={{
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                    flex: "1 1 auto",
                    overflow: "hidden",
                    width: "100%",
                    background: "rgb(255, 255, 255)",
                    transition: "all 0.24s linear 0s",
                    padding: "30px 5px 30px 30px",
                    borderRadius: "3px",
                    position: "absolute",
                    height: "auto",
                    zIndex: 999,
                    opacity: 0,
                    pointerEvents: "none",
                    boxShadow: "rgba(72, 123, 183, 0.15) 0px 0px 30px",
                    top: "auto",
                    transform: "translateY(20px)",
                  }}
                >
                  <div
                    className="fixcl-scroll-content product_list_widget"
                    style={{
                      boxSizing: "border-box",
                      WebkitTapHighlightColor: "transparent",
                      maxHeight: "400px",
                      overflowY: "auto",
                      paddingRight: "22px",
                    }}
                  >
                    <div
                      className="skeleton_wrap skeleton_js d-none-important"
                      style={{
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                        position: "relative",
                        display: "none",
                      }}
                    >
                      <div
                        className="loading_search"
                        style={{
                          boxSizing: "border-box",
                          WebkitTapHighlightColor: "transparent",
                        }}
                      >
                        <div
                          className="item"
                          style={{
                            boxSizing: "border-box",
                            WebkitTapHighlightColor: "transparent",
                          }}
                        >
                          <div
                            className="product-item"
                            style={{
                              boxSizing: "border-box",
                              WebkitTapHighlightColor: "transparent",
                              padding: "0px 0px 15px",
                              borderBottom: "1px dashed rgb(229, 232, 236)",
                              display: "flex",
                              alignItems: "center",
                              marginBottom: "15px",
                            }}
                          >
                            <div
                              className="product-image"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                position: "relative",
                                background:
                                  "linear-gradient(to right, rgb(238, 238, 238) 8%, rgb(221, 221, 221) 18%, rgb(238, 238, 238) 33%) 0% 0% / 800px 104px",
                                width: "60px",
                                marginRight: "20px",
                                height: "60px",
                                animationDuration: "1s",
                                animationFillMode: "forwards",
                                animationIterationCount: "infinite",
                                animationName: "placeHolderShimmer",
                                animationTimingFunction: "linear",
                              }}
                            />
                            <div
                              className="product-content"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                gap: "5px",
                                flexBasis: "0px",
                                flexGrow: 1,
                                maxWidth: "100%",
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <div
                                className="product-title"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  background:
                                    "linear-gradient(to right, rgb(238, 238, 238) 8%, rgb(221, 221, 221) 18%, rgb(238, 238, 238) 33%) 0% 0% / 800px 104px",
                                  height: "10px",
                                  width: "100%",
                                  animationDuration: "1s",
                                  animationFillMode: "forwards",
                                  animationIterationCount: "infinite",
                                  animationName: "placeHolderShimmer",
                                  animationTimingFunction: "linear",
                                }}
                              />
                              <div
                                className="product-price"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  background:
                                    "linear-gradient(to right, rgb(238, 238, 238) 8%, rgb(221, 221, 221) 18%, rgb(238, 238, 238) 33%) 0% 0% / 800px 104px",
                                  height: "10px",
                                  width: "100%",
                                  animationDuration: "1s",
                                  animationFillMode: "forwards",
                                  animationIterationCount: "infinite",
                                  animationName: "placeHolderShimmer",
                                  animationTimingFunction: "linear",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="item"
                          style={{
                            boxSizing: "border-box",
                            WebkitTapHighlightColor: "transparent",
                          }}
                        >
                          <div
                            className="product-item"
                            style={{
                              boxSizing: "border-box",
                              WebkitTapHighlightColor: "transparent",
                              padding: "0px 0px 15px",
                              borderBottom: "1px dashed rgb(229, 232, 236)",
                              display: "flex",
                              alignItems: "center",
                              marginBottom: "15px",
                            }}
                          >
                            <div
                              className="product-image"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                position: "relative",
                                background:
                                  "linear-gradient(to right, rgb(238, 238, 238) 8%, rgb(221, 221, 221) 18%, rgb(238, 238, 238) 33%) 0% 0% / 800px 104px",
                                width: "60px",
                                marginRight: "20px",
                                height: "60px",
                                animationDuration: "1s",
                                animationFillMode: "forwards",
                                animationIterationCount: "infinite",
                                animationName: "placeHolderShimmer",
                                animationTimingFunction: "linear",
                              }}
                            />
                            <div
                              className="product-content"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                gap: "5px",
                                flexBasis: "0px",
                                flexGrow: 1,
                                maxWidth: "100%",
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <div
                                className="product-title"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  background:
                                    "linear-gradient(to right, rgb(238, 238, 238) 8%, rgb(221, 221, 221) 18%, rgb(238, 238, 238) 33%) 0% 0% / 800px 104px",
                                  height: "10px",
                                  width: "100%",
                                  animationDuration: "1s",
                                  animationFillMode: "forwards",
                                  animationIterationCount: "infinite",
                                  animationName: "placeHolderShimmer",
                                  animationTimingFunction: "linear",
                                }}
                              />
                              <div
                                className="product-price"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  background:
                                    "linear-gradient(to right, rgb(238, 238, 238) 8%, rgb(221, 221, 221) 18%, rgb(238, 238, 238) 33%) 0% 0% / 800px 104px",
                                  height: "10px",
                                  width: "100%",
                                  animationDuration: "1s",
                                  animationFillMode: "forwards",
                                  animationIterationCount: "infinite",
                                  animationName: "placeHolderShimmer",
                                  animationTimingFunction: "linear",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="item"
                          style={{
                            boxSizing: "border-box",
                            WebkitTapHighlightColor: "transparent",
                          }}
                        >
                          <div
                            className="product-item"
                            style={{
                              boxSizing: "border-box",
                              WebkitTapHighlightColor: "transparent",
                              padding: "0px 0px 15px",
                              borderBottom: "1px dashed rgb(229, 232, 236)",
                              display: "flex",
                              alignItems: "center",
                              marginBottom: "15px",
                            }}
                          >
                            <div
                              className="product-image"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                position: "relative",
                                background:
                                  "linear-gradient(to right, rgb(238, 238, 238) 8%, rgb(221, 221, 221) 18%, rgb(238, 238, 238) 33%) 0% 0% / 800px 104px",
                                width: "60px",
                                marginRight: "20px",
                                height: "60px",
                                animationDuration: "1s",
                                animationFillMode: "forwards",
                                animationIterationCount: "infinite",
                                animationName: "placeHolderShimmer",
                                animationTimingFunction: "linear",
                              }}
                            />
                            <div
                              className="product-content"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                gap: "5px",
                                flexBasis: "0px",
                                flexGrow: 1,
                                maxWidth: "100%",
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <div
                                className="product-title"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  background:
                                    "linear-gradient(to right, rgb(238, 238, 238) 8%, rgb(221, 221, 221) 18%, rgb(238, 238, 238) 33%) 0% 0% / 800px 104px",
                                  height: "10px",
                                  width: "100%",
                                  animationDuration: "1s",
                                  animationFillMode: "forwards",
                                  animationIterationCount: "infinite",
                                  animationName: "placeHolderShimmer",
                                  animationTimingFunction: "linear",
                                }}
                              />
                              <div
                                className="product-price"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  background:
                                    "linear-gradient(to right, rgb(238, 238, 238) 8%, rgb(221, 221, 221) 18%, rgb(238, 238, 238) 33%) 0% 0% / 800px 104px",
                                  height: "10px",
                                  width: "100%",
                                  animationDuration: "1s",
                                  animationFillMode: "forwards",
                                  animationIterationCount: "infinite",
                                  animationName: "placeHolderShimmer",
                                  animationTimingFunction: "linear",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="item"
                          style={{
                            boxSizing: "border-box",
                            WebkitTapHighlightColor: "transparent",
                          }}
                        >
                          <div
                            className="product-item"
                            style={{
                              boxSizing: "border-box",
                              WebkitTapHighlightColor: "transparent",
                              padding: "0px 0px 15px",
                              borderBottom: "1px dashed rgb(229, 232, 236)",
                              display: "flex",
                              alignItems: "center",
                              marginBottom: "15px",
                            }}
                          >
                            <div
                              className="product-image"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                position: "relative",
                                background:
                                  "linear-gradient(to right, rgb(238, 238, 238) 8%, rgb(221, 221, 221) 18%, rgb(238, 238, 238) 33%) 0% 0% / 800px 104px",
                                width: "60px",
                                marginRight: "20px",
                                height: "60px",
                                animationDuration: "1s",
                                animationFillMode: "forwards",
                                animationIterationCount: "infinite",
                                animationName: "placeHolderShimmer",
                                animationTimingFunction: "linear",
                              }}
                            />
                            <div
                              className="product-content"
                              style={{
                                boxSizing: "border-box",
                                WebkitTapHighlightColor: "transparent",
                                gap: "5px",
                                flexBasis: "0px",
                                flexGrow: 1,
                                maxWidth: "100%",
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <div
                                className="product-title"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  background:
                                    "linear-gradient(to right, rgb(238, 238, 238) 8%, rgb(221, 221, 221) 18%, rgb(238, 238, 238) 33%) 0% 0% / 800px 104px",
                                  height: "10px",
                                  width: "100%",
                                  animationDuration: "1s",
                                  animationFillMode: "forwards",
                                  animationIterationCount: "infinite",
                                  animationName: "placeHolderShimmer",
                                  animationTimingFunction: "linear",
                                }}
                              />
                              <div
                                className="product-price"
                                style={{
                                  boxSizing: "border-box",
                                  WebkitTapHighlightColor: "transparent",
                                  background:
                                    "linear-gradient(to right, rgb(238, 238, 238) 8%, rgb(221, 221, 221) 18%, rgb(238, 238, 238) 33%) 0% 0% / 800px 104px",
                                  height: "10px",
                                  width: "100%",
                                  animationDuration: "1s",
                                  animationFillMode: "forwards",
                                  animationIterationCount: "infinite",
                                  animationName: "placeHolderShimmer",
                                  animationTimingFunction: "linear",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="js_prs_search"
                      style={{
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                      }}
                    >
                      <div
                        className="row"
                        style={{
                          boxSizing: "border-box",
                          WebkitTapHighlightColor: "transparent",
                          display: "flex",
                          flexWrap: "wrap",
                          marginRight: "-10px",
                          marginLeft: "-10px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
}
`,
        }}
      />
    </>
  )
}

export default MiddleBar