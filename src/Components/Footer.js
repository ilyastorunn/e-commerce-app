import React from "react";
import "./Footer.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <div className="footer">
            <div className="container my-5">
                <footer
                    className="text-center text-lg-start text-white"
                >
                    <section
                        className="d-flex justify-content-between p-4"
                    >
                        <div className="my-5">
                            <span>Get connected with me on social networks:</span>
                        </div>
                        <div>
                            <a href="https://twitter.com/ilyastorunn" className="text-white me-4" target="_blank">
                                <i class="fa-brands fa-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com/ilyastorunn/" className="text-white me-4" target="_blank">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/ilyastorunn/" className="text-white me-4" target="_blank">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/ilyastorunn" className="text-white me-4" target="_blank">
                                <i className="fab fa-github"></i>
                            </a>
                         </div>
                    </section>
                </footer>
            </div>
        </div>
    )
};