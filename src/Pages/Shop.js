import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./Shop.css";
import SearchBar from "../Components/SearchBar";
import bestSellersData from "../images";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

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

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoryParam = searchParams.get("category");

    if (categoryParam) {
      handleCategoryChange(categoryParam);
    }
  }, [location.search]);

  return (
    <div className="container mt-4">
      <SearchBar onSearch={handleSearch} />
      <div className="filterButtons d-flex justify-content-center gap-2 mt-3">
        <div className="btn-group">
            <Link to="/shop?category=men">
              <button
                className={`btn btn-outline-secondary ${selectedCategory === 'men' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('men')}
              >
                Men
              </button>
            </Link>
            <Link to="/shop?category=woman">
              <button
                className={`btn btn-outline-secondary ${selectedCategory === 'woman' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('woman')}
              >
                Woman
              </button>
            </Link>
            <Link to="/shop?category=all"> 
              <button
                className={`btn btn-outline-secondary allButton ${selectedCategory === 'all' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('all')}
                to="/shop?category=all"
              >
                All
              </button>
            </Link>
        </div>
      </div>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Sort By
        </button>
        <div className="dropdown-menu" aria-aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#">High to Low</a>
          <a className="dropdown-item" href="#">Low to High</a>
        </div>
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