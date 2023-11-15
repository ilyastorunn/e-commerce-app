import React from "react";
// import { Nav, Navbar, NavDropdown } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";


export default function Header() {
    return (
        <div>
            <ul>
                <li><a href="/" className="name">FashionHub</a></li>
                <li><a href="/">Home</a></li>
                <li><a href="/">Shop</a></li>
                <li className="active"><a href="/">About</a></li>
                <li className="active"><a href="/">Sign In</a></li>
                <li className="active"><a href="/">Cart</a></li>
            </ul>
        </div>
    );
};