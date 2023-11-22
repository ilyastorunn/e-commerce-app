import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./Shop.css";
import SearchBar from "../Components/SearchBar";
import bestSellersData from "../images";

const Shop = () => {
  return (
    <div className="container mt-4">
      <SearchBar />
      <div className="filterButtons d-flex justify-content-center gap-2 mt-3">
        <div className="btn-group">
          <button className="btn btn-outline-secondary">Men</button>
          <button className="btn btn-outline-secondary">Woman</button>
        </div>
      </div>
      <div className="dropdown mx-auto mt-3">
        <button
          className="btn dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
        >
          Sort By Price
          <span className="caret"></span>
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-links" href="#">
              Low to High
            </a>
          </li>
          <li>
            <a className="dropdown-links" href="#">
              High to Low
            </a>
          </li>
        </ul>
      </div>
      <div className="products row mt-3">
        {bestSellersData.map((item) => (
          <div key={item.id} className="col-md-6 mb-4">
            <a href="/" className="bestSellersPics">
              <img src={item.image} className="img-fluid" alt={item.title} />
              <p>{item.title}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
