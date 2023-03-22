import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import data from "./data/data.json";
import "./style.css";
import Header from "./components/Header";
import Article from "./views/Article";
import Home from "./views/Home";
import Footer from "./components/Footer";

const App = () => {
  // useState
  const [loggedIn, setLoggedIn] = useState(false);

  // functions
  const logIn = () => {
    setLoggedIn(true);
    console.log("Logging in...");
  };
  const signUp = () => {
    console.log("Signing up...");
  };
  const viewAccount = () => {
    console.log("Viewing Account...");
  };
  const logOut = () => {
    setLoggedIn(false);
    console.log("Logging out...");
  };
  const viewCart = () => {
    console.log("Viewing Cart...");
  };
  const addToCart = () => {
    console.log("Adding to Cart...");
  };

  // useEffect
  useEffect(() => {
    if (loggedIn) {
      console.log("Logged in.");
    } else {
      console.log("Logged out.");
    }
  }, [loggedIn]);

  // render
  return (
    <Router>
      <Header
        loggedIn={loggedIn}
        logIn={logIn}
        signUp={signUp}
        viewAccount={viewAccount}
        logOut={logOut}
        viewCart={viewCart}
      />
      <main>
        <Switch>
          <Route path="/articles/:id">
            <Article
              data={data}
              addToCart={addToCart}
            />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
