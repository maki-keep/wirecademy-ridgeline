import React from "react";
import { Helmet } from "react-helmet";
import "./Home.css";

const Home = (props) => {
  return (
    <div className="content Home">
      <Helmet>
        <title>Home | Ridgeline</title>
        <meta property="og:title" content="Home | Ridgeline" />
      </Helmet>
      <div>
        <h1 className="heading">Ridgeline</h1>
      </div>
    </div>
  );
};

export default Home;
