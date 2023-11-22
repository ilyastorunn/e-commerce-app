import React from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
    return (
        <div className="signInPage">
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Full Name</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password (confirmation)</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" class="submit-button btn">Sign Up</button>
                <div className="google">
                    <button type="button" className="googleButton">
                        Sign in with Google:
                        <i class="fa-brands fa-google logo"></i>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignUpPage;