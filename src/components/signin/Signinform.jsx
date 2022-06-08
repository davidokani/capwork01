import React from "react";
import "./signinform.css"

const Signinform = () => {
    return (
        <div className="signinform">
            <h1 className="logo">piggyvest</h1>
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
            <div className="reg">Don't have an account? <a href="/">Register</a>
            </div>
            <div className="reg"><a href="/">Forgot Password?</a>
            </div>
        </div >
    )
};

export default Signinform;
