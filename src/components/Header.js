import React, { useState } from "react";
import ridgeline from "../media/Ridgeline.png";
import "./Header.css";
import NavigationLinks from "../components/NavigationLinks";

const Header = (props) => {
  // useState
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSearchMobile, setShowSearchMobile] = useState(false);

  // functions
  const toggleMobileMenu = () => {
    setShowMobileMenu(prev => !prev);
    // console.log("toggleMobileMenu");
  };
  const closeMobileMenu = () => {
    setShowMobileMenu(false);
    // console.log("closeMobileMenu");
  };
  const toggleSearchMobile = () => {
    setShowSearchMobile(prev => !prev);
    // console.log("toggleSearchMobile");
  };
  const closeSearchMobile = () => {
    setShowSearchMobile(false);
    // console.log("closeSearchMobile");
  };

  // render
  return (
    <header className="Header">
      <div data-role="Header" className="content Header-content">
        <img
          alt="Ridgeline logo"
          src={ridgeline}
          className="Header-logo"
        />
        <nav className="Header-nav">
          <button className="icon Header-country-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_2_13)">
                <path d="M31.5067 6.22222C30.8907 5.16356 29.7573 4.44444 28.4444 4.44444H16V6.22222H31.5067ZM0 22.2222H32V24H0V22.2222ZM16 15.1111H32V16.8889H16V15.1111ZM16 11.5556H32V13.3333H16V11.5556ZM0 18.6667H32V20.4444H0V18.6667ZM3.55556 27.5556H28.4444C29.7573 27.5556 30.8907 26.8364 31.5067 25.7778H0.493333C1.10933 26.8364 2.24267 27.5556 3.55556 27.5556ZM16 8H32V9.77778H16V8Z" fill="#B22334"/>
                <path d="M0.0604444 24.6036C0.0755556 24.6862 0.0924444 24.7689 0.112889 24.8498C0.136 24.9396 0.164444 25.0258 0.194667 25.1129C0.273778 25.3431 0.369778 25.5653 0.490667 25.7733L0.493333 25.7778H31.5067L31.5084 25.7742C31.6278 25.5647 31.7266 25.3441 31.8036 25.1156C31.8621 24.9487 31.9073 24.7775 31.9387 24.6036C31.9751 24.408 32 24.2071 32 24H0C0 24.2071 0.0248889 24.4071 0.0604444 24.6036ZM0 20.4444H32V22.2222H0V20.4444ZM0 16.8889V18.6667H32V16.8889H16H0ZM16 13.3333H32V15.1111H16V13.3333ZM16 9.77778H32V11.5556H16V9.77778ZM0.493333 6.22222L0.490667 6.22667L0.493333 6.22222ZM0.113778 7.15022C0.136 7.05955 0.167111 6.97333 0.195556 6.88622C0.164687 6.97306 0.137405 7.06114 0.113778 7.15022ZM16 8H32C32 7.79289 31.9751 7.592 31.9387 7.39555C31.9075 7.22143 31.862 7.05018 31.8027 6.88355C31.7256 6.65405 31.6265 6.43257 31.5067 6.22222H16V8Z" fill="#EEEEEE"/>
                <path d="M16 4.44444H3.55556C2.61256 4.44444 1.70819 4.81905 1.0414 5.48584C0.374602 6.15264 0 7.05701 0 8L0 16.8889H16V4.44444Z" fill="#3C3B6E"/>
                <path d="M1.77869 6.86755L2.32802 7.26667L2.11824 7.91111L2.66669 7.51289L3.21602 7.91111L3.00624 7.26667L3.55558 6.86755H2.87646L2.66669 6.22222L2.4578 6.86755H1.77869ZM3.55646 8.64533L4.1058 9.04444L3.89602 9.68889L4.44446 9.29067L4.9938 9.68889L4.78402 9.04444L5.33335 8.64533H4.65424L4.44446 8L4.23558 8.64533H3.55646ZM7.11202 8.64533L7.66135 9.04444L7.45158 9.68889L8.00002 9.29067L8.54935 9.68889L8.33958 9.04444L8.88891 8.64533H8.2098L8.00002 8L7.79113 8.64533H7.11202ZM10.6676 8.64533L11.2169 9.04444L11.0071 9.68889L11.5556 9.29067L12.1049 9.68889L11.8951 9.04444L12.4445 8.64533H11.7654L11.5556 8L11.3467 8.64533H10.6676ZM3.55646 12.2009L4.1058 12.6L3.89602 13.2444L4.44446 12.8462L4.9938 13.2444L4.78402 12.6L5.33335 12.2009H4.65424L4.44446 11.5556L4.23558 12.2009H3.55646ZM7.11202 12.2009L7.66135 12.6L7.45158 13.2444L8.00002 12.8462L8.54935 13.2444L8.33958 12.6L8.88891 12.2009H8.2098L8.00002 11.5556L7.79113 12.2009H7.11202ZM10.6676 12.2009L11.2169 12.6L11.0071 13.2444L11.5556 12.8462L12.1049 13.2444L11.8951 12.6L12.4445 12.2009H11.7654L11.5556 11.5556L11.3467 12.2009H10.6676ZM5.33424 6.86755L5.88358 7.26667L5.6738 7.91111L6.22224 7.51289L6.77158 7.91111L6.5618 7.26667L7.11113 6.86755H6.43202L6.22224 6.22222L6.01335 6.86755H5.33424ZM8.8898 6.86755L9.43913 7.26667L9.22935 7.91111L9.7778 7.51289L10.3271 7.91111L10.1174 7.26667L10.6667 6.86755H9.98758L9.7778 6.22222L9.56891 6.86755H8.8898ZM12.4454 6.86755L12.9947 7.26667L12.7849 7.91111L13.3334 7.51289L13.8827 7.91111L13.6729 7.26667L14.2222 6.86755H13.5431L13.3334 6.22222L13.1245 6.86755H12.4454ZM1.77869 10.4231L2.32802 10.8222L2.11824 11.4667L2.66669 11.0684L3.21602 11.4667L3.00624 10.8222L3.55558 10.4231H2.87646L2.66669 9.77778L2.4578 10.4231H1.77869ZM5.6738 11.4667L6.22224 11.0684L6.77158 11.4667L6.5618 10.8222L7.11113 10.4231H6.43202L6.22224 9.77778L6.01335 10.4231H5.33424L5.88358 10.8222L5.6738 11.4667ZM8.8898 10.4231L9.43913 10.8222L9.22935 11.4667L9.7778 11.0684L10.3271 11.4667L10.1174 10.8222L10.6667 10.4231H9.98758L9.7778 9.77778L9.56891 10.4231H8.8898ZM12.4454 10.4231L12.9947 10.8222L12.7849 11.4667L13.3334 11.0684L13.8827 11.4667L13.6729 10.8222L14.2222 10.4231H13.5431L13.3334 9.77778L13.1245 10.4231H12.4454ZM1.77869 13.9787L2.32802 14.3778L2.11824 15.0222L2.66669 14.624L3.21602 15.0222L3.00624 14.3778L3.55558 13.9787H2.87646L2.66669 13.3333L2.4578 13.9787H1.77869ZM5.6738 15.0222L6.22224 14.624L6.77158 15.0222L6.5618 14.3778L7.11113 13.9787H6.43202L6.22224 13.3333L6.01335 13.9787H5.33424L5.88358 14.3778L5.6738 15.0222ZM8.8898 13.9787L9.43913 14.3778L9.22935 15.0222L9.7778 14.624L10.3271 15.0222L10.1174 14.3778L10.6667 13.9787H9.98758L9.7778 13.3333L9.56891 13.9787H8.8898ZM12.4454 13.9787L12.9947 14.3778L12.7849 15.0222L13.3334 14.624L13.8827 15.0222L13.6729 14.3778L14.2222 13.9787H13.5431L13.3334 13.3333L13.1245 13.9787H12.4454Z" fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0_2_13">
                  <rect width="32" height="32" fill="none"/>
                </clipPath>
              </defs>
            </svg>
          </button>
          {!props.loggedIn && (
          <button
            className="icon"
            onClick={() => props.logIn()}
          >
            Log In
          </button>
          )}
          {!props.loggedIn && (
          <button
            className="icon"
            onClick={() => props.signUp()}
          >
            Sign Up
          </button>
          )}
          {props.loggedIn && (
          <button
            className="icon Header-account-icon"
            onClick={() => props.viewAccount()}
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_2_11)">
                <path d="M25.0553 22.8902C20.8595 21.3617 19.5182 20.0715 19.5182 17.3089C19.5182 15.6511 20.893 14.5766 21.3617 13.1558C21.8303 11.7349 22.1014 10.0526 22.3267 8.82893C22.5521 7.60523 22.6417 7.13192 22.7642 5.82808C22.914 4.20085 21.8247 0 16 0C10.177 0 9.08424 4.20085 9.23744 5.82808C9.36 7.13192 9.45003 7.60528 9.67488 8.82893C9.89976 10.0526 10.1682 11.7348 10.6366 13.1558C11.1049 14.5767 12.4816 15.6511 12.4816 17.3089C12.4816 20.0715 11.1403 21.3617 6.94461 22.8902C2.73363 24.4221 0 25.9328 0 27V32H32V27C32 25.9345 29.2647 24.4238 25.0553 22.8902V22.8902Z" fill="black"/>
              </g>
              <defs>
                <clipPath id="clip0_2_11">
                  <rect width="32" height="32" fill="none"/>
                </clipPath>
              </defs>
            </svg>
          </button>
          )}
          {props.loggedIn && (
          <button
            className="icon"
            onClick={() => props.logOut()}
          >
            Log Out
          </button>
          )}
          {props.loggedIn && (
          <button className="icon Header-cart-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27 23H10L5 2H2M6 6H30L27 19H9L6 6Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M25 29C26.1046 29 27 28.1046 27 27C27 25.8954 26.1046 25 25 25C23.8954 25 23 25.8954 23 27C23 28.1046 23.8954 29 25 29Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 29C13.1046 29 14 28.1046 14 27C14 25.8954 13.1046 25 12 25C10.8954 25 10 25.8954 10 27C10 28.1046 10.8954 29 12 29Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          )}
          <div className="Header-search-container">
            <input
              type="search"
              id="search"
              name="search"
              placeholder="search"
              className="Header-search"
              onClick={() => closeSearchMobile()}
            />
            <button
              className="icon Header-search-icon"
              onClick={() => closeSearchMobile()}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.023 16.977C18.5546 16.5284 18.0988 16.0669 17.656 15.593C17.284 15.215 17.06 14.94 17.06 14.94L14.26 13.603C15.381 12.3316 15.9997 10.695 16 9C16 5.141 12.86 2 9 2C5.14 2 2 5.141 2 9C2 12.859 5.14 16 9 16C10.763 16 12.37 15.34 13.603 14.261L14.94 17.061C14.94 17.061 15.215 17.285 15.593 17.657C15.98 18.02 16.489 18.511 16.977 19.024L18.335 20.416L18.939 21.062L21.06 18.941L20.414 18.337C20.035 17.965 19.529 17.471 19.023 16.977ZM9 14C6.243 14 4 11.757 4 9C4 6.243 6.243 4 9 4C11.757 4 14 6.243 14 9C14 11.757 11.757 14 9 14Z" fill="black"/>
              </svg>
            </button>
            <button
              className="icon Header-search-icon-mobile"
              onClick={() => toggleSearchMobile()}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.023 16.977C18.5546 16.5284 18.0988 16.0669 17.656 15.593C17.284 15.215 17.06 14.94 17.06 14.94L14.26 13.603C15.381 12.3316 15.9997 10.695 16 9C16 5.141 12.86 2 9 2C5.14 2 2 5.141 2 9C2 12.859 5.14 16 9 16C10.763 16 12.37 15.34 13.603 14.261L14.94 17.061C14.94 17.061 15.215 17.285 15.593 17.657C15.98 18.02 16.489 18.511 16.977 19.024L18.335 20.416L18.939 21.062L21.06 18.941L20.414 18.337C20.035 17.965 19.529 17.471 19.023 16.977ZM9 14C6.243 14 4 11.757 4 9C4 6.243 6.243 4 9 4C11.757 4 14 6.243 14 9C14 11.757 11.757 14 9 14Z" fill="black"/>
              </svg>
            </button>
          </div>
          <button
            data-role="BurgerMenu"
            className="icon Header-nav-burger"
            onClick={() => toggleMobileMenu()}
          >
            <svg width="24" height="24" viewBox="0 0 1024 1024">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </button>
        </nav>
        <div
          data-role="MobileMenu"
          className="Header-mobile-menu"
          style={{
            display: showMobileMenu ? "flex" : "none"
          }}
        >
          <nav className="Header-mobile-nav">
            <div className="Header-mobile-container">
              <img
                alt="Ridgeline logo"
                src={ridgeline}
                className="Header-image"
              />
              <button
                data-role="CloseMobileMenu"
                className="icon Header-close-mobile-menu"
                onClick={() => closeMobileMenu()}
              >
                <svg width="24" height="24" viewBox="0 0 1024 1024">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </button>
            </div>
            <NavigationLinks
              loggedIn={props.loggedIn}
              logIn={props.logIn}
              signUp={props.signUp}
              viewAccount={props.viewAccount}
              logOut={props.logOut}
              viewCart={props.viewCart}
            ></NavigationLinks>
          </nav>
        </div>
      </div>
      <div
        className="Header-search-mobile-container"
        style={{
          display: showSearchMobile ? "flex" : "none"
        }}
      >
        <input
          type="search"
          id="searchMobile"
          name="searchMobile"
          placeholder="search"
          className="Header-search-mobile"
        />
      </div>
    </header>
  );
};

export default Header;
