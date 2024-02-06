import React from "react";
import "./SignUpPage.css";

const SignUpPage = () => {
    return (
        <div className="signInPage">
            <form>
                <div Name="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Full Name</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password (confirmation)</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="submit-button btn">Sign Up</button>
                <div className="google">
                    <button type="button" className="googleButton">
                        Sign in with Google:
                        <i className="fa-brands fa-google logo"></i>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignUpPage;