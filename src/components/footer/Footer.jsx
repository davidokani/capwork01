import React from "react";
import "./footer.css";
import Logo from '../../assets/logo.svg';
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer1">
                <div className="brand-div">
                    <a href="/"><img src={Logo} alt="piggy-vest" /></a>
                </div>


                <div className="procomp">
                    <div className="prod">
                        <h4>Product</h4>
                        <ul>
                            <li><a href="/">piggybank</a></li>
                            <li><a href="/">Invest</a></li>
                            <li><a href="/">Safelock</a></li>
                            <li><a href="/">Target Savings</a></li>
                            <li><a href="/">Flex Naira</a></li>
                        </ul>
                    </div>

                    <div className="comp">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="/">About</a></li>
                            <li><a href="/">FAQs</a></li>
                            <li><a href="/">Blog</a></li>
                        </ul>
                    </div>

                </div>

                <div className="legal">
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="/">Terms</a></li>
                        <li><a href="/">Privacy</a></li>
                        <li><a href="/">Security</a></li>
                    </ul>
                </div>

                <div className="socials">

                    <div className="icon-div">
                        <FaFacebookSquare size="25px" />
                        <FaTwitterSquare size="25px" />
                        <FaInstagramSquare size="25px" />
                    </div>

                    <ul>
                        <li><a href="/">Tesmot house, Abdulrahman Okene <br /> close, Victoria Island, Lagos, Nigeria.</a></li>
                        <li><a href="/">contact@piggyvest.com</a></li>
                        <li><a href="/">+234 700 933 933</a></li>
                    </ul>
                </div>

            </div>

            <div className="footer2">
                <p>
                    piggyvest (formerly piggybank.ng) is the leading online savings & investing platform in Nigeria.
                    For over 6 years, our <br />  customers have saved and invested billions of Niara that theywould normally be temted to spend.
                </p>

                <p className="yr">
                    2016 - 2022 piggyTech Global limited - RC 1405222
                </p>
            </div>

        </div>
    );
};

export default Footer;
