import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./Home.css";
import homePic from "../pictures/home-pic.jpeg";
import bestSellersData from "../images";

export default function Home() {
    const topBestSellers = bestSellersData.slice(0, 5);

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
                    {topBestSellers.map((item) => (
                        <div key={item.id} className="col-md-6 mb-4">
                            <a href="#" className="bestSellersPics">
                                <img src={item.image} className="img-fluid" alt={item.title} />
                                <p>{item.title}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    )
}