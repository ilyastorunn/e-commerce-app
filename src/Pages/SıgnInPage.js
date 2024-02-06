import React from "react";
import "./SıgnInPage.css";
import { Link } from "react-router-dom";

const SıgnInPage = () => {
    return (
        <div className="signInPage">
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Remember me</label>
                </div>
                <button type="submit" className="submit-button btn">Log In</button>
                <div className="google">
                    <button type="button" className="googleButton">
                        Sign in with Google:
                        <i className="fa-brands fa-google logo"></i>
                    </button>
                </div>
                <div className="signUp">
                    <p>
                        You don't have account?
                        <button type="button" className="signUpButton">
                            <Link className="signUpLink" to="/signup">
                                Sign Up
                            </Link>
                        </button>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default SıgnInPage;