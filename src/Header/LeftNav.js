import React from 'react'

const LeftNav = () => {
  return (
    <>
    <div
      className="topbar-left col-lg-6 col-md-6 col-12 flex hide-mobile"
      style={{
        boxSizing: "border-box",
        WebkitTapHighlightColor: "transparent",
        position: "relative",
        width: "100%",
        paddingRight: "10px",
        paddingLeft: "10px",
        maxWidth: "50%",
        display: "flex",
        fontSize: "14px",
        font: "14px / 23.8px Rubik, sans-serif",
        lineHeight: "23.8px",
        backgroundColor:"black"
      }}
    >
      <ul
        className="menu-language parent-list"
        style={{
          boxSizing: "border-box",
          WebkitTapHighlightColor: "transparent",
          margin: "0px",
          padding: "0px",
          listStyle: "none",
          gap: "40px",
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          marginBottom: "0px",
          cursor: "pointer",
        }}
      >
        <noscript
          className="small-hide medium-hide"
          style={{
            boxSizing: "border-box",
            WebkitTapHighlightColor: "transparent",
          }}
        >{`<form method="post" action="/localization" id="HeaderLanguageMobileFormNoScript" accept-charset="UTF-8" class="localization-form" enctype="multipart/form-data"><input type="hidden" name="form_type" value="localization" /><input type="hidden" name="utf8" value="✓" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="return_to" value="/" /><div class="localization-form__select">
        <h2 class="visually-hidden" id="HeaderLanguageMobileLabelNoScript">Language</h2>
        <select class="localization-selector link" name="locale_code" aria-labelledby="HeaderLanguageMobileLabelNoScript"><option value="en" lang="en" selected>
              English
            </option><option value="ar" lang="ar">
              العربية
            </option><option value="it" lang="it">
              Italiano
            </option><option value="el" lang="el">
              Ελληνικά
            </option><option value="de" lang="de">
              Deutsch
            </option><option value="fr" lang="fr">
              Français
            </option></select>
        <i class="icon-plus icon-caret"></i>
      </div>
      <button class="button button--tertiary">Update language</button></form>`}</noscript>
        <localization-form
          className="small-hide medium-hide no-js-hidden true"
          style={{
            boxSizing: "border-box",
            WebkitTapHighlightColor: "transparent",
            position: "relative",
          }}
        >
          <form
            id="HeaderLanguageForm"
            className="localization-form"
            acceptCharset="UTF-8"
            action="/localization"
            encType="multipart/form-data"
            method="post"
            style={{
              boxSizing: "border-box",
              WebkitTapHighlightColor: "transparent",
            }}
          >
            <input
              name="form_type"
              type="hidden"
              defaultValue="localization"
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
            <input
              name="_method"
              type="hidden"
              defaultValue="put"
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
              name="return_to"
              type="hidden"
              defaultValue="/"
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
              style={{
                boxSizing: "border-box",
                WebkitTapHighlightColor: "transparent",
              }}
            >
              <h2
                id="HeaderLanguageLabel"
                className="visually-hidden"
                style={{
                  boxSizing: "border-box",
                  WebkitTapHighlightColor: "transparent",
                  margin: "0px",
                  lineHeight: 1,
                  color: "#222222",
                  fontFamily: "Rubik, sans-serif",
                  fontWeight: 500,
                  display: "none",
                }}
              >
                Language
              </h2>
              <div
                className="disclosure"
                style={{
                  boxSizing: "border-box",
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                <button
                  className="disclosure__button localization-form__select localization-selector link link--text caption-large"
                  type="button"
                  aria-controls="HeaderLanguageList"
                  aria-describedby="HeaderLanguageLabel"
                  aria-expanded="false"
                  style={{
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                    fontFamily: "Rubik, sans-serif",
                    transition: "all 400ms linear 0ms",
                    margin: "0px",
                    gap: "5px",
                    padding: "0px",
                    border: "none",
                    background: "none",
                    color: "#ffffff",
                    display: "flex",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "40px",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <img
                    className="flag"
                    height={12}
                    width={16}
                    alt="EN"
                    src="https://demo-morata.myshopify.com/cdn/shop/t/3/assets/flag_en.png?v=14076981825125011091700037390"
                    style={{
                      boxSizing: "border-box",
                      WebkitTapHighlightColor: "transparent",
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                  <span
                    style={{
                      boxSizing: "border-box",
                      WebkitTapHighlightColor: "transparent",
                    }}
                  >
                    English
                  </span>
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
                      fontFamily: "icon-dukamarket",
                    }}
                  />
                </button>
                <div
                  className="disclosure__list-wrapper"
                  hidden
                  style={{
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                    padding: "15px 20px",
                    listStyle: "none",
                    transition:
                      "opacity 0.5s ease 0s, visibility 0.5s ease 0s, transform 0.5s ease 0s, -webkit-transform 0.5s ease 0s",
                    borderRadius: "0 0 3px 3px",
                    position: "absolute",
                    display: "block",
                    zIndex: 100,
                    top: "calc(100% + 1px)",
                    left: "0px",
                    backgroundColor: "rgb(255, 255, 255)",
                    textAlign: "left",
                    minWidth: "195px",
                    boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 30px",
                    visibility: "hidden",
                    opacity: 0,
                    transform: "translateY(15px)",
                  }}
                >
                  <ul
                    id="HeaderLanguageList"
                    className="disclosure__list list-unstyled"
                    role="list"
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
                      className="disclosure__item active"
                      tabIndex="-1"
                      style={{
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                        position: "relative",
                      }}
                    >
                      <a
                        className="link link--text disclosure__link caption-large focus-inset"
                        aria-current="true"

                        hrefLang="en"
                        lang="en"
                        style={{
                          boxSizing: "border-box",
                          WebkitTapHighlightColor: "transparent",
                          textDecoration: "none",
                          transition: "all 400ms linear 0ms",
                          lineHeight: "30px",
                          display: "block",
                          color: "#16bcdc",
                          outline: "0px",
                        }}
                      >
                        <img
                          className="flag"
                          height={12}
                          width={16}
                          alt="English"
                          src="https://demo-morata.myshopify.com/cdn/shop/t/3/assets/flag_en.png?v=14076981825125011091700037390"
                          style={{
                            boxSizing: "border-box",
                            WebkitTapHighlightColor: "transparent",
                            maxWidth: "100%",
                            height: "auto",
                          }}
                        />
                        {"English"}
                      </a>
                    </li>
                    <li
                      className="disclosure__item"
                      tabIndex="-1"
                      style={{
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                        position: "relative",
                      }}
                    >
                      <a
                        className="link link--text disclosure__link caption-large focus-inset"
                       
                        hrefLang="ar"
                        lang="ar"
                        style={{
                          boxSizing: "border-box",
                          WebkitTapHighlightColor: "transparent",
                          textDecoration: "none",
                          color: "#222222",
                          transition: "all 400ms linear 0ms",
                          lineHeight: "30px",
                          display: "block",
                          outline: "0px",
                        }}
                      >
                        <img
                          className="flag"
                          height={12}
                          width={16}
                          alt="Arabic"
                          src="https://demo-morata.myshopify.com/cdn/shop/t/3/assets/flag_ar.png?v=87171907108583701081700037392"
                          style={{
                            boxSizing: "border-box",
                            WebkitTapHighlightColor: "transparent",
                            maxWidth: "100%",
                            height: "auto",
                          }}
                        />
                        {"العربية"}
                      </a>
                    </li>
                    <li
                      className="disclosure__item"
                      tabIndex="-1"
                      style={{
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                        position: "relative",
                      }}
                    >
                      <a
                        className="link link--text disclosure__link caption-large focus-inset"
                       
                        hrefLang="it"
                        lang="it"
                        style={{
                          boxSizing: "border-box",
                          WebkitTapHighlightColor: "transparent",
                          textDecoration: "none",
                          color: "#222222",
                          transition: "all 400ms linear 0ms",
                          lineHeight: "30px",
                          display: "block",
                          outline: "0px",
                        }}
                      >
                        <img
                          className="flag"
                          height={12}
                          width={16}
                          alt="Italian"
                          src="https://demo-morata.myshopify.com/cdn/shop/t/3/assets/flag_it.png?v=145339513251517899001700037391"
                          style={{
                            boxSizing: "border-box",
                            WebkitTapHighlightColor: "transparent",
                            maxWidth: "100%",
                            height: "auto",
                          }}
                        />
                        {"Italiano"}
                      </a>
                    </li>
                    <li
                      className="disclosure__item"
                      tabIndex="-1"
                      style={{
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                        position: "relative",
                      }}
                    >
                      <a
                        className="link link--text disclosure__link caption-large focus-inset"
                       
                        hrefLang="el"
                        lang="el"
                        style={{
                          boxSizing: "border-box",
                          WebkitTapHighlightColor: "transparent",
                          textDecoration: "none",
                          color: "#222222",
                          transition: "all 400ms linear 0ms",
                          lineHeight: "30px",
                          display: "block",
                          outline: "0px",
                        }}
                      >
                        <img
                          className="flag"
                          height={10}
                          width={16}
                          alt="Greek"
                          src="https://demo-morata.myshopify.com/cdn/shop/t/3/assets/flag_el.png?v=163704008545148749451700037392"
                          style={{
                            boxSizing: "border-box",
                            WebkitTapHighlightColor: "transparent",
                            maxWidth: "100%",
                            height: "auto",
                          }}
                        />
                        {"Ελληνικά"}
                      </a>
                    </li>
                    <li
                      className="disclosure__item"
                      tabIndex="-1"
                      style={{
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                        position: "relative",
                      }}
                    >
                      <a
                        className="link link--text disclosure__link caption-large focus-inset"
                       
                        hrefLang="de"
                        lang="de"
                        style={{
                          boxSizing: "border-box",
                          WebkitTapHighlightColor: "transparent",
                          textDecoration: "none",
                          color: "#222222",
                          transition: "all 400ms linear 0ms",
                          lineHeight: "30px",
                          display: "block",
                          outline: "0px",
                        }}
                      >
                        <img
                          className="flag"
                          height={12}
                          width={16}
                          alt="German"
                          src="https://demo-morata.myshopify.com/cdn/shop/t/3/assets/flag_de.png?v=69801997571936479461700037390"
                          style={{
                            boxSizing: "border-box",
                            WebkitTapHighlightColor: "transparent",
                            maxWidth: "100%",
                            height: "auto",
                          }}
                        />
                        {"Deutsch"}
                      </a>
                    </li>
                    <li
                      className="disclosure__item"
                      tabIndex="-1"
                      style={{
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                        position: "relative",
                      }}
                    >
                      <a
                        className="link link--text disclosure__link caption-large focus-inset"
                       
                        hrefLang="fr"
                        lang="fr"
                        style={{
                          boxSizing: "border-box",
                          WebkitTapHighlightColor: "transparent",
                          textDecoration: "none",
                          color: "#222222",
                          transition: "all 400ms linear 0ms",
                          lineHeight: "30px",
                          display: "block",
                          outline: "0px",
                        }}
                      >
                        <img
                          className="flag"
                          height={12}
                          width={16}
                          alt="French"
                          src="https://demo-morata.myshopify.com/cdn/shop/t/3/assets/flag_fr.png?v=69148847184916641131700037389"
                          style={{
                            boxSizing: "border-box",
                            WebkitTapHighlightColor: "transparent",
                            maxWidth: "100%",
                            height: "auto",
                          }}
                        />
                        {"Français"}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <input
                name="locale_code"
                type="hidden"
                defaultValue="en"
                style={{
                  boxSizing: "border-box",
                  WebkitTapHighlightColor: "transparent",
                  outline: "0px",
                  borderRadius: "0px",
                  boxShadow: "none",
                  fontFamily: "Rubik, sans-serif",
                }}
              />
            </div>
          </form>
        </localization-form>
        <noscript
          className="small-hide medium-hide"
          style={{
            boxSizing: "border-box",
            WebkitTapHighlightColor: "transparent",
          }}
        >{`<form method="post" action="/localization" id="HeaderCountryMobileFormNoScript" accept-charset="UTF-8" class="localization-form" enctype="multipart/form-data"><input type="hidden" name="form_type" value="localization" /><input type="hidden" name="utf8" value="✓" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="return_to" value="/" /><div class="localization-form__select">
    <select class="localization-selector link" name="country_code" aria-labelledby="HeaderCountryMobileLabelNoScript"><option
          value="CA"
        >
          Canada (CAD
          $)
        </option><option
          value="JP"
        >
          Japan (JPY
          ¥)
        </option><option
          value="GB"
        >
          United Kingdom (GBP
          £)
        </option><option
          value="US"
            selected
          
        >
          United States (USD
          $)
        </option></select>
    <i class="icon-plus icon-caret"></i>
  </div>
  <button class="button button--tertiary">Update country/region</button></form>`}</noscript>
        <localization-form
          className="small-hide medium-hide no-js-hidden"
          style={{
            boxSizing: "border-box",
            WebkitTapHighlightColor: "transparent",
            position: "relative",
          }}
        >
          <form
            id="HeaderCountryForm"
            className="localization-form"
            acceptCharset="UTF-8"
            action="/localization"
            encType="multipart/form-data"
            method="post"
            style={{
              boxSizing: "border-box",
              WebkitTapHighlightColor: "transparent",
            }}
          >
            <input
              name="form_type"
              type="hidden"
              defaultValue="localization"
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
            <input
              name="_method"
              type="hidden"
              defaultValue="put"
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
              name="return_to"
              type="hidden"
              defaultValue="/"
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
              style={{
                boxSizing: "border-box",
                WebkitTapHighlightColor: "transparent",
              }}
            >
              <h2
                id="HeaderCountryLabel"
                className="visually-hidden"
                style={{
                  boxSizing: "border-box",
                  WebkitTapHighlightColor: "transparent",
                  margin: "0px",
                  lineHeight: 1,
                  color: "#222222",
                  fontFamily: "Rubik, sans-serif",
                  fontWeight: 500,
                  display: "none",
                }}
              >
                Country/region
              </h2>
              <button
                className="disclosure__button localization-form__select localization-selector link link--text caption-large"
                type="button"
                aria-controls="HeaderCountryList"
                aria-describedby="HeaderCountryLabel"
                aria-expanded="false"
                style={{
                  boxSizing: "border-box",
                  WebkitTapHighlightColor: "transparent",
                  fontFamily: "Rubik, sans-serif",
                  transition: "all 400ms linear 0ms",
                  margin: "0px",
                  gap: "5px",
                  padding: "0px",
                  border: "none",
                  background: "none",
                  color: "#ffffff",
                  display: "flex",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "40px",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                  }}
                >{`United States(USD
$)`}</span>
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
                    fontFamily: "icon-dukamarket",
                  }}
                />
              </button>
              <div
                className="disclosure__list-wrapper"
                hidden
                style={{
                  boxSizing: "border-box",
                  WebkitTapHighlightColor: "transparent",
                  padding: "15px 20px",
                  listStyle: "none",
                  transition:
                    "opacity 0.5s ease 0s, visibility 0.5s ease 0s, transform 0.5s ease 0s, -webkit-transform 0.5s ease 0s",
                  borderRadius: "0 0 3px 3px",
                  position: "absolute",
                  display: "block",
                  zIndex: 100,
                  top: "calc(100% + 1px)",
                  left: "0px",
                  backgroundColor: "rgb(255, 255, 255)",
                  textAlign: "left",
                  minWidth: "195px",
                  boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 30px",
                  visibility: "hidden",
                  opacity: 0,
                  transform: "translateY(15px)",
                }}
              >
                <ul
                  className="USD dropdown list-currencies currency-lists"
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
                    className="disclosure__item"
                    tabIndex="-1"
                    style={{
                      boxSizing: "border-box",
                      WebkitTapHighlightColor: "transparent",
                      position: "relative",
                    }}
                  >
                    <a
                      className="link link--text disclosure__link caption-large focus-inset"
                     
                      style={{
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                        textDecoration: "none",
                        color: "#222222",
                        transition: "all 400ms linear 0ms",
                        lineHeight: "30px",
                        display: "block",
                        outline: "0px",
                      }}
                    >
                      <span
                        className="localization-form__currency"
                        style={{
                          boxSizing: "border-box",
                          WebkitTapHighlightColor: "transparent",
                        }}
                      >{`Canada (CAD
$)`}</span>
                    </a>
                  </li>
                  <li
                    className="disclosure__item"
                    tabIndex="-1"
                    style={{
                      boxSizing: "border-box",
                      WebkitTapHighlightColor: "transparent",
                      position: "relative",
                    }}
                  >
                    <a
                      className="link link--text disclosure__link caption-large focus-inset"
                     
                      style={{
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                        textDecoration: "none",
                        color: "#222222",
                        transition: "all 400ms linear 0ms",
                        lineHeight: "30px",
                        display: "block",
                        outline: "0px",
                      }}
                    >
                      <span
                        className="localization-form__currency"
                        style={{
                          boxSizing: "border-box",
                          WebkitTapHighlightColor: "transparent",
                        }}
                      >{`Japan (JPY
¥)`}</span>
                    </a>
                  </li>
                  <li
                    className="disclosure__item"
                    tabIndex="-1"
                    style={{
                      boxSizing: "border-box",
                      WebkitTapHighlightColor: "transparent",
                      position: "relative",
                    }}
                  >
                    <a
                      className="link link--text disclosure__link caption-large focus-inset"
                     
                      style={{
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                        textDecoration: "none",
                        color: "#222222",
                        transition: "all 400ms linear 0ms",
                        lineHeight: "30px",
                        display: "block",
                        outline: "0px",
                      }}
                    >
                      <span
                        className="localization-form__currency"
                        style={{
                          boxSizing: "border-box",
                          WebkitTapHighlightColor: "transparent",
                        }}
                      >{`United Kingdom (GBP
£)`}</span>
                    </a>
                  </li>
                  <li
                    className="disclosure__item active"
                    tabIndex="-1"
                    style={{
                      boxSizing: "border-box",
                      WebkitTapHighlightColor: "transparent",
                      position: "relative",
                    }}
                  >
                    <a
                      className="link link--text disclosure__link caption-large focus-inset"
                      aria-current="true"
                     
                      style={{
                        boxSizing: "border-box",
                        WebkitTapHighlightColor: "transparent",
                        textDecoration: "none",
                        transition: "all 400ms linear 0ms",
                        lineHeight: "30px",
                        display: "block",
                        color: "#16bcdc",
                        outline: "0px",
                      }}
                    >
                      <span
                        className="localization-form__currency"
                        style={{
                          boxSizing: "border-box",
                          WebkitTapHighlightColor: "transparent",
                        }}
                      >{`United States (USD
$)`}</span>
                    </a>
                  </li>
                </ul>
              </div>
              <input
                name="country_code"
                type="hidden"
                defaultValue="US"
                style={{
                  boxSizing: "border-box",
                  WebkitTapHighlightColor: "transparent",
                  outline: "0px",
                  borderRadius: "0px",
                  boxShadow: "none",
                  fontFamily: "Rubik, sans-serif",
                }}
              />
            </div>
          </form>
        </localization-form>
        <li
          style={{
            boxSizing: "border-box",
            WebkitTapHighlightColor: "transparent",
            position: "relative",
          }}
        >
          <span
            style={{
              boxSizing: "border-box",
              WebkitTapHighlightColor: "transparent",
              margin: "0px",
              gap: "5px",
              padding: "0px",
              border: "none",
              background: "none",
              color: "#ffffff",
              display: "flex",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "40px",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            Need Help? +001 123 456 789
          </span>
        </li>
      </ul>
    </div>

  </>  )
}

export default LeftNav