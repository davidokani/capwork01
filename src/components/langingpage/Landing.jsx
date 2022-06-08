import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

import "./landing.css";

const Landing = () => {
  return (
    <div className="landing">
      <Navbar />
      <h1>Hello Landing Page!</h1>
      <Footer />
    </div>
  );
};

export default Landing;
