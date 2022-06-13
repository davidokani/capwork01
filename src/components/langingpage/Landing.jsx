import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import "./landing.css";
import Piggy from "../../assets/piggy.png";
import Myrent from "../../assets/card1.png";
import Investify from "../../assets/card2.png";
import Shield from "../../assets/security.png";
import Phone from "../../assets/piggy-phone.png";
import Macaroni from "../../assets/macaroni2.PNG";
import { IoIosArrowForward } from 'react-icons/io'
import { BsArrowRightCircleFill } from 'react-icons/bs'
import shieldSave from "../../assets/shieldsave.png"
import target from "../../assets/target.png"
import flex from "../../assets/flex.png"
import safeLock from "../../assets/safelock.png"
import newsvg from "../../assets/newsvg.svg"
import techpoint from "../../assets/techpoint"
import crunch from "../../assets/crunch"
import guardian from "../../assets/guardian"



const Landing = () => {
  return (
    <div className="landingpage">
      <Navbar />
      {/* 7 SECTIONS IN TOTAL TO MAKE UP PIGGYVEST LANDINGPADE */}

      {/* SECTION ONE BEGIN */}
      <section className="landing01">
        <div className="container01-left">
          <div className="animation-swipeup">
            <h1 className="landing-topic">The Better Way to Save & Invest.
            </h1>
          </div>
          <p className="landing-doings">
            PiggyVest helps over 3 million customers achieve thier financial goals
            by helping them save and invest with ease.
          </p>
          <div className="landingreg">
            <Link to={"/register"} className="btn-landingreg">
              Create free account
            </Link>
          </div>
          <div className="download">
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="22"
                viewBox="0 0 18 22"
                fill="none"
              >
                <path
                  d="M14.9488 11.6998C14.9217 8.92081 17.2233 7.56779 17.3296 7.50525C16.0266 5.60393 14.0065 5.34542 13.2956 5.32457C11.6007 5.14737 9.95578 6.34194 9.09268 6.34194C8.21082 6.34194 6.87865 5.34333 5.44641 5.37252C3.5993 5.40171 1.8731 6.4712 0.926616 8.1286C-1.02473 11.5122 0.430439 16.4823 2.30257 19.2175C3.24072 20.5559 4.33314 22.0528 5.76538 21.9986C7.16635 21.9402 7.68963 21.1063 9.38038 21.1063C11.0565 21.1063 11.5485 21.9986 13.01 21.9653C14.5131 21.9402 15.4596 20.6206 16.3623 19.2676C17.4464 17.7332 17.88 16.2217 17.8967 16.1446C17.8612 16.132 14.978 15.0313 14.9488 11.6998Z"
                  fill="black"
                />
                <path
                  d="M12.1886 3.52744C12.9412 2.58512 13.4603 1.3009 13.3143 0C12.224 0.0500346 10.8606 0.754689 10.0746 1.67616C9.38038 2.48922 8.75703 3.82139 8.91964 5.07226C10.1455 5.16399 11.4026 4.45517 12.1886 3.52744Z"
                  fill="black"
                />
              </svg>
              Get on iPhone
            </a>
            <a href="/">
              <img src={require("../../assets/play.png")} alt="" /> Get on Android
            </a>
          </div>
        </div>

        <div className="landing01-image">
          <img className="shepoint" src={Piggy} alt="" />
          <img className="myrent" src={Myrent} alt="" />
          <img className="investify" src={Investify} alt="" />

          <svg
            className="crossIcon"
            width="75"
            height="75"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: "translate(0px, 0px)", opacity: "1" }}
          >
            <g opacity="0.2">
              <path
                d="M34.5601 36.8001H8.64014V28.4001H26.2401V10.5601H34.5601V36.8001Z"
                fill="#7913E5"
              ></path>
              <path
                d="M72.1602 36.8001H46.2402V10.5601H54.5602V28.4001H72.1602V36.8001Z"
                fill="#7913E5"
              ></path>
              <path
                d="M35.6798 69.6001H27.3598V51.7601H9.75977V43.3601H35.6798V69.6001Z"
                fill="#7913E5"
              ></path>
              <path
                d="M54.5602 69.6001H46.2402V43.3601H72.1602V51.7601H54.5602V69.6001Z"
                fill="#7913E5"
              ></path>
            </g>
          </svg>
          <svg
            className="dotIcon"
            width="33"
            height="108"
            viewBox="0 0 35 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: "translate(0px, 0px)", opacity: "1" }}
          >
            <circle
              cx="5"
              cy="5"
              r="5"
              fill="#2295F2"
              fillOpacity={0.28}
            ></circle>
            <circle
              cx="5"
              cy="30"
              r="5"
              fill="#2295F2"
              fillOpacity={0.28}
            ></circle>
            <circle
              cx="5"
              cy="55"
              r="5"
              fill="#2295F2"
              fillOpacity={0.28}
            ></circle>
            <circle
              cx="5"
              cy="80"
              r="5"
              fill="#2295F2"
              fillOpacity={0.28}
            ></circle>
            <circle
              cx="5"
              cy="105"
              r="5"
              fill="#2295F2"
              fillOpacity={0.28}
            ></circle>
            <circle
              cx="30"
              cy="5"
              r="5"
              fill="#2295F2"
              fillOpacity={0.28}
            ></circle>
            <circle
              cx="30"
              cy="30"
              r="5"
              fill="#2295F2"
              fillOpacity={0.28}
            ></circle>
            <circle
              cx="30"
              cy="55"
              r="5"
              fill="#2295F2"
              fillOpacity={0.28}
            ></circle>
            <circle
              cx="30"
              cy="80"
              r="5"
              fill="#2295F2"
              fillOpacity={0.28}
            ></circle>
            <circle
              cx="30"
              cy="105"
              r="5"
              fill="#2295F2"
              fillOpacity={0.28}
            ></circle>
          </svg>
          <svg
            className="circleIcon"
            width="41"
            height="41"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: "translate(0px, 0px)", opacity: "1" }}
          >
            <circle
              cx="23"
              cy="23"
              r="15.5"
              stroke="#E7439C"
              strokeOpacity={0.15}
              strokeWidth="15"
            ></circle>
          </svg>
        </div>
      </section>
      {/* SECTION ONE ENDING */}

      {/* SECTION TWO BEGIN */}
      <section className="landing02">
        <div className="container02-left">
          <img className="shieldicon" src={Shield} alt="" />
          <div className="scurity">
            <div className="animation-swipeup">
              <h2 className="securitytopic">
                Your security is our priority
              </h2>
            </div>
            <p className="securitystatement">
              PiggyVest uses the highest level of Internet Security and it is secured by 256 bits SSL security encryption to ensure that your information is completely protected from fraud.
            </p>
            <a className="morelink-for02" href="/">Learn more</a>
          </div>
        </div>
      </section>
      {/* SECTION TWO ENDING */}

      {/* SECTION THREE BEGIN */}
      <section className="landing03">
        <div className="landing03-container">
          <div className="spansection">
            <h1>4 ways to build your savings</h1>
            <p>Earn 5%-15% when you save with any of these PiggyVest plans.</p>
            <button>Start Saving</button>
          </div>
          <div className="gridsection">
            <img className="bullet" alt='shield' src={shieldSave} />
            <h1>Automated Savings</h1>
            <p>Build a dedicated savings faster based on your terms automaticlly or manually</p>
            <p className="arrowbutton"> <img className="right-arrow" src={newsvg} alt='right arrow' /> Piggybank </p>
          </div>
          <div className="gridsection">
            <img className="bullet" alt='shield' src={safeLock} />
            <h1>Fixed Savings</h1>
            <p>Lock money away for a fixed duration with no access to it until maturity.
              It’s like having a custom fixed deposit.</p>
            <p className="arrowbutton"> <img className="right-arrow" src={newsvg} alt='right arrow' /> Safelock</p>
          </div>
          <div className="gridsection">
            <img className="bullet" alt='shield' src={target} />
            <h1>Goal-oriented Savings</h1>
            <p>Reach all your savings goals faster. Save towards multiple goals on your own or with a group.</p>
            <p className="arrowbutton"> <img className="right-arrow" src={newsvg} alt='right arrow' /> Target Savings </p>
          </div>
          <div className="gridsection">
            <img className="bullet" alt='shield' src={flex} />
            <h1>Flexible Savings</h1>
            <p>Save, transfer, withdraw, manage and organise your money for free at any time.</p>
            <p className="arrowbutton"> <img className="right-arrow" src={newsvg} alt='right arrow' /> Flex Naira </p>
          </div>
        </div>
      </section>
      {/* SECTION THREE ENDING */}

      {/* SECTION FOUR BEGIN */}
      <section className="landing04">
        <div className="wrapper">
          <div className="img-div">
            <img src={Phone} alt="phone" />
          </div>

          <div className="writeUp-div">
            <div className="bonus">
              <p>Up To 25% Returns</p>
            </div>

            <h1>Access investment opportunities</h1>
            <p >
              invest securely and confidently on the go. Grow your money
              confidently by investing in pre-vetted investment opportuinities.
            </p>

            <a href="/">Learn more about Investments <IoIosArrowForward size="15px" /> </a>
          </div>
        </div>
      </section>
      {/* SECTION FOUR ENDING */}



      {/* SECTION FIVE BEGIN */}
      <section className="landing05">
        <div className="wrapper">
          <div className="writeUp-div">
            <div className="writeUp">
              <h1>Meet the saver of <br /> the month!</h1>
              <p>
                Every month, we shine a spotlight on one saver, asking them
                questions about thier savings culture and how the product is specifically helping them shape how they spend
                and save for future responsibilities.
              </p>
              <div style={{ display: "flex" }} className="arrow-div">
                <BsArrowRightCircleFill size="20px" />
                <a href="/" style={{ marginLeft: "10px" }}> Meet Debo (Mr Macaroni) </a>
              </div>

            </div>

          </div>
          <div className="img-div">
            <img src={Macaroni} alt="macaroni" />
          </div>
        </div>
      </section>
      {/* SECTION FIVE ENDING */}


      {/* SECTION SEVEN BEGIN */}
      <section className="landing07">
        <div className="landing07-container">
          <p className="featured">As featured in</p>
          <div className="brand">
            <img src={techpoint} alt="brand" />
          </div>
          <div className="brand">
            <img src={guardian} alt="brand" />
          </div><div className="brand">
            <img src={crunch} alt="brand" />
          </div>
        </div>
      </section>
      {/* SECTION SEVEN ENDING */}

      <Footer />
    </div>
  );
};

export default Landing;

/* fevil was here  */
