import React from "react";
import { Link } from "react-router-dom";
// import Logo from "../../../assets/logo-white.png";
import "./recoverpassword.css"

const Recoverpassword = () => {
    return (
        <div className="signinform">
            <Link className="logo" to="/">Piggyvest
                {/* <img src={Logo} alt="" /> */}
            </Link>
            <div className="signinform-container">
                <form action="/" method="get" className="logform">
                    <h2 className="intro">Forgot Password</h2>
                    <i>Enter your email to rest your password</i>

                    <div className="logform-option">
                        <label id="logform-option" htmlFor="email">Email Address</label>
                        <input type="text" name="email" id="email" placeholder="e.g john@gmail.com" required />
                    </div>
                    <div className="logform-option">
                        <button className="btn-logform">RECOVER PASSWORD</button>
                    </div>
                </form>
            </div>
            <div className="reg"><Link to="/signin">Back to login</Link>
            </div>
        </div>
    )
};

export default Recoverpassword;

/* fevil was here  */