import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/logo-white.png'
import "./regform.css"

const Regform = () => {
    return (
        <div className="signinform">
            <Link className="brand" to="/">
                <img src={Logo} alt="" />
            </Link>
            <div className="signinform-container">
                <form action="/" method="POST" className="regform">
                    <h2 className="intro">Login to your account</h2>
                    <i>Securely login to your Piggyvest</i>

                    <div className="logform-option">
                        <label id="logform-option" htmlFor="fullname">Full Name</label>
                        <input type="text" name="fullname" id="fullname" required placeholder="Full Name" />
                    </div>
                    <div className="logform-option">
                        <label id="logform-option" htmlFor="email">Email Adress</label>
                        <input type="text" name="email" id="email" required placeholder="Email Adress" />
                    </div>
                    <div className="logform-option">
                        <label id="logform-option" htmlFor="phone">Phone Number</label>
                        <input type="tel" name="phone" id="phone" required placeholder="Phone Number" />
                    </div>
                    <div className="logform-option">
                        <label id="logform-option" htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" required placeholder="Password" />
                    </div>
                    <div className="logform-option">
                        <label id="logform-option" htmlFor="referrer">Referrer Phone or Phone Code (Optional)</label>
                        <input type="text" name="referrer" id="referrer" required placeholder="Referrer Phone or Phone Code" />
                    </div>
                    <div className="logform-option">
                        <label id="logform-option" htmlFor="email">How Did You Hear About Us? (Optional)</label>
                        <select name="question" id="question">
                            <option value="question">Click To Select</option>
                            <option value="question">Facebook</option>
                            <option value="question">Twitter</option>
                            <option value="question">Instagram</option>
                            <option value="question">Friend/Family/Coworker Referral</option>
                            <option value="question">Google search</option>
                            <option value="question">Google playstore</option>
                            <option value="question">Online Blog</option>
                        </select>
                    </div>
                    <div className="logform-option">
                        <button className="btn-regform">CREATE ACCOUNT</button>
                    </div>
                </form>
            </div>
            <div className="reg">Already have an account? <Link to="/signin">Log In</Link>
            </div>
        </div>
    )
};

export default Regform;
