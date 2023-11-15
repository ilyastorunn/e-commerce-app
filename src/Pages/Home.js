import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./Home.css";
import homePic from "../pictures/home-pic.jpeg";
import bestseller1 from "../pictures/bestseller1.jpeg";
import bestseller2 from "../pictures/bestseller2.jpeg";
import bestseller3 from "../pictures/bestseller3.jpeg";
import bestseller4 from "../pictures/bestseller4.jpeg";
import bestseller5 from "../pictures/bestseller5.jpeg";
import bestseller6 from "../pictures/bestseller6.jpeg";

export default function Home() {
    return (
    <div className="body">
        <div className="home container-fluid img-container">
            <a href="/">
                <img src={homePic} className="img-fluid"/>
            </a>
        </div>
        <div className="best-sellers">
            <div class="container">
            <h3>Best Sellers</h3>
                <div class="row">
                    <div class="col-md-4 col-lg-3 mb-4">
                        <a href="/" className="bestSellersPics">
                            <img src={bestseller1} class="img-fluid" />
                            <p>EMBROIDERED AND FAUX WOOL JACKET</p>
                        </a>
                    </div>
                    <div class="col-md-4 col-lg-3 mb-4">
                        <a href="/" className="bestSellersPics">
                            <img src={bestseller2} class="img-fluid" />
                            <p>WOOL BLEND COAT</p>
                        </a>
                    </div>
                    <div class="col-md-4 col-lg-3 mb-4">
                        <a href="/" className="bestSellersPics">
                            <img src={bestseller3} class="img-fluid" />
                            <p>BOXY FIT PUFFLE JACKET</p>
                        </a>
                    </div>
                    <div class="col-md-4 col-lg-3 mb-4">
                        <a href="/" className="bestSellersPics">
                            <img src={bestseller4} class="img-fluid" />
                            <p>CONTRAST PRINTED SWEATSHIRT</p>
                        </a>
                    </div>
                    <div class="col-md-4 col-lg-3 mb-4">
                        <a href="/" className="bestSellersPics">
                            <img src={bestseller5} class="img-fluid" />
                            <p>SPRAY PATTERNED SWEATER</p>
                        </a>
                    </div>
                    <div class="col-md-4 col-lg-3 mb-4">
                        <a href="/" className="bestSellersPics">
                            <img src={bestseller6} class="img-fluid" />
                            <p>CONTRAST JACQUARD SWEATER</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}