import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo-white.png";
import "./signinform.css"

const Signinform = () => {
    return (
        <div className="signinform">
            <Link className="brand" to="/">
                <img src={Logo} alt="" />
            </Link>
            <div className="signinform-container">
                <form action="/" method="get" className="logform">
                    <h2 className="intro">Login to your account</h2>
                    <i>Securely login to your Piggyvest</i>

                    <div className="logform-option">
                        <label id="logform-option" htmlFor="email/phone">Email or Phone Number</label>
                        <input type="text" name="email phone" id="email/phone" required />
                    </div>
                    <div className="logform-option">
                        <label id="logform-option" htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" required />
                    </div>
                    <div className="logform-option">
                        <button className="btn-logform">LOG IN</button>
                    </div>
                </form>
            </div>
            <div className="reg"><Link to="/register">Don't have an account? Register</Link>
            </div>
            <div className="reg"><Link to="/recover">Forgot Password?</Link>
            </div>
        </div>
    )
};

export default Signinform;

/* fevil was here  */ 