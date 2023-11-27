import React from "react";
import "./SıgnInPage.css";
import { Link } from "react-router-dom";

const SıgnInPage = () => {
    return (
        <div className="signInPage">
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Remember me</label>
                </div>
                <button type="submit" class="submit-button btn">Log In</button>
                <div className="google">
                    <button type="button" className="googleButton">
                        Sign in with Google:
                        <i class="fa-brands fa-google logo"></i>
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