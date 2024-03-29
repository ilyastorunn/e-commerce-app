import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import homePic1 from "../pictures/home-pic.jpeg";
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
  };

  const customDotsStyle = {
    bottom: "10px",
    display: "flex",
    justifyContent: "center",
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div style={customDotsStyle}>
        <ul style={{ margin: 0 }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className="body">
      <div className="home container-fluid img-container">
        <img
          src={homePic1}
          className="img-fluid slider-image"
          alt="Slide Picture 1"
        />
      </div>
      <div className="categoryLinks">
        <p>Shop by Category:</p>
        <button
          className="btn btn-outline-secondary"
          onClick={() => handleCategoryClick("men")}
        >
          Men
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => handleCategoryClick("woman")}
        >
          Woman
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => handleCategoryClick("all")}
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
