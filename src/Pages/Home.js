import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import homePic1 from "../pictures/home-pic.jpeg";
import homePic2 from "../pictures/home-pic2.jpeg";
import homePic3 from "../pictures/home-pic3.jpeg";
import bestSellersData from "../images";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
    const topBestSellers = bestSellersData.slice(0, 4);
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        navigate(`/shop?category=${category}`);
    };

    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`);
    }

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
    <div className="body">
        <div className="home container-fluid img-container">
            <Slider {...sliderSettings}>
                <div>
                    <img src={homePic1} className="img-fluid" alt="Slide Picture 1" />
                </div>
                <div>
                    <img src={homePic2} className="img-fluid" alt="Slide Picture 2" />
                </div>
                <div>
                    <img src={homePic3} className="img-fluid" alt="Slide Picture 3" />
                </div>
            </Slider>
        </div>
        <div className="categoryLinks">
            <p>Shop by Category:</p>
                <button
                    className="btn btn-outline-secondary"
                    onClick={() => handleCategoryClick('men')}
                >
                    Men
                </button>
                <button
                    className="btn btn-outline-secondary"
                    onClick={() => handleCategoryClick('woman')}
                >
                    Woman
                </button>
                <button
                    className="btn btn-outline-secondary"
                    onClick={() => handleCategoryClick('all')}
                >
                    All
                </button>
        </div>
        <div className="best-sellers">
            <div class="container">
            <h3>Best Sellers</h3>
                <div class="row">
                    {topBestSellers.map((item) => (
                        <div key={item.id} className="col-md-6 mb-4">
                            <Link to={`/product/${item.id}`} className="bestSellersPics">
                                <img
                                    src={item.image}
                                    className="img-fluid"
                                    alt={item.title}
                                    onClick={() => handleProductClick(item.id)}
                                />
                                <p>{item.title}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    );
}