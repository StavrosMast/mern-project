import React from "react";
import "../assets/styles/Home.css";
// import Header from '../components/Header';
import Hero from "../components/HeroSection";

const Home = () => {
  return (
    <div className="container">
      {/* <div className='inner-header'><Header></Header></div> */}
      {/* <div className="pyramid-loader">
              <div className="wrapper">
                <span className="side side1"></span>
                <span className="side side2"></span>
                <span className="side side3"></span>
                <span className="side side4"></span>
                <span className="shadow"></span>
              </div>
            </div> */}
      <Hero />
      <div className="main-content"></div>
    </div>
  );
};

export default Home;
