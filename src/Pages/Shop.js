import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./Shop.css";
import SearchBar from "../Components/SearchBar";
import bestSellersData from "../images";
import { Link } from "react-router-dom";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState("");

  const filterProducts = (category) => {
    console.log('Filtering with category:', category);
    let filteredData;
  
    if (category === 'all') {
      filteredData = bestSellersData;
    } else if (category === 'men') {
      filteredData = bestSellersData.filter(product => product.id <= 8);
    } else if (category === 'woman') {
      filteredData = bestSellersData.filter(product => product.id > 8);
    } else {
      filteredData = bestSellersData;
    }
  
    return filteredData.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    console.log('Searching with term:', term);
  };

  const filteredProducts = filterProducts(selectedCategory);

  return (
    <div className="container mt-4">
      <SearchBar onSearch={handleSearch} />
      <div className="filterButtons d-flex justify-content-center gap-2 mt-3">
        <div className="btn-group">
          <button
            className={`btn btn-outline-secondary ${selectedCategory === 'men' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('men')}
          >
              Men
          </button>
          <button
            className={`btn btn-outline-secondary ${selectedCategory === 'woman' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('woman')}
          >
            Woman
          </button>
          <button
            className={`btn btn-outline-secondary allButton ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('all')}
          >
            All
          </button>
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
        {filteredProducts.map((item) => (
          <div key={item.id} className="col-md-6 mb-4">
            <Link to={`/product/${item.id}`} className="bestSellersPics">
              <img src={item.image} className="img-fluid" alt={item.title} />
              <p>{item.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;