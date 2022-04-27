import React from "react";
import { MetaData } from "../../components/Meta/MetaData";
import "./Home.css";

const Home = () => {
  const meta = {
    title: "Home",
    desc: "Together, we can save a life.",
    url: "https://scoutcpr.org/",
    img: "../../assets/C911_Pick3.JPG",
  };

  return (
    <>
      <MetaData {...meta} />
      <div className="home">
        <div>
          <p className="home-text">Together, we can save a life.</p>
        </div>
      </div>
    </>
  );
};

export default Home;
