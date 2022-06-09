import React from "react";
import { Link } from "react-router-dom";
import Piggy from "../../assets/piggy.jpeg";
// import Navbar from "../navbar/Navbar";
// import Footer from "../footer/Footer";

import "./landing.css";

const Landing = () => {
  return (
    <div className="landingpage">
      {/* <Navbar /> */}
      <section className="landing01">
        <h1 className="landing-topic">The Better Way to Save & Invest.</h1>
        <p className="landing-doings">
          PiggyVest helps over 3 million customers achieve thier financial goals by helping them save and invest with ease.
        </p>
        <div className="landingreg">
          <Link to={"/register"} className="btn-landingreg">Create free account</Link>
        </div>
        <div className="download">
          <a href="/"><img src={"/"} alt="" /> Get on iPhone</a>
          <a href="/"><img src={"/"} alt="" /> Get on Android</a>
        </div>

        <div className="landing01-img">
          <img src={<Piggy />} alt="" />
        </div>
      </section>
      <section className="landing02">

      </section>
      {/* <Footer /> */}
    </div>
  );
};

export default Landing;

/* fevil was here  */