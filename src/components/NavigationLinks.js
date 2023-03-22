import React from "react";
import PropTypes from "prop-types";
import "./NavigationLinks.css";

const NavigationLinks = (props) => {
  return (
    <nav className="NavigationLinks">
      <button className="icon NavigationLinks-text">{props.countryLink}</button>
      {!props.loggedIn && (
      <button
        className="icon NavigationLinks-text"
        onClick={() => props.logIn()}
      >
        {props.logInLink}
      </button>
      )}
      {!props.loggedIn && (
      <button
        className="icon NavigationLinks-text"
        onClick={() => props.signUp()}
      >
        {props.signUpLink}
      </button>
      )}
      {props.loggedIn && (
      <button
        className="icon NavigationLinks-text"
        onClick={() => props.viewAccount()}
      >
        {props.accountLink}
      </button>
      )}
      {props.loggedIn && (
      <button
        className="icon NavigationLinks-text"
        onClick={() => props.logOut()}
      >
        {props.logOutLink}
      </button>
      )}
      {props.loggedIn && (
      <button
        className="icon NavigationLinks-text"
        onClick={() => props.viewCart()}
      >
        {props.cartLink}
      </button>
      )}
    </nav>
  );
};

NavigationLinks.defaultProps = {
  countryLink: "Country",
  logInLink: "Log In",
  signUpLink: "Sign Up",
  accountLink: "Account",
  logOutLink: "Log Out",
  cartLink: "Cart"
};
NavigationLinks.propTypes = {
  countryLink: PropTypes.string,
  logInLink: PropTypes.string,
  signUpLink: PropTypes.string,
  accountLink: PropTypes.string,
  logOutLink: PropTypes.string,
  cartLink: PropTypes.string
};

export default NavigationLinks;
