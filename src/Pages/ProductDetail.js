import React, { useEffect, useState } from "react";
import bestSellersData from "../images";
import { Link, useParams, useSearchParams } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { productId } = useParams();

  const [selectedSize, setSelectedSize] = useState("");
  const [mainProduct, setMainProduct] = useState(null);
  const [otherProducts, setOtherProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const foundMainProduct = bestSellersData.find(
        (product) => product.id === parseInt(productId, 10)
      );

      if (foundMainProduct) {
        setMainProduct(foundMainProduct);

        const shuffledArray = bestSellersData.slice();
        shuffledArray.shift();
        const shuffledProducts = shuffleArray(shuffledArray);
        const selectedOtherProducts = shuffledProducts.slice(0, 3);

        setOtherProducts(selectedOtherProducts);
      }
    };

    fetchData();
  }, [productId]);

  const addToCart = () => {
    console.log(`Added to cart: ${mainProduct.title}, Size: ${selectedSize}`);
  };

  const shuffleArray = (array) => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  if (!mainProduct) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="productDetailContainer">
      <div className="mainProduct">
        <div className="productDetails">
          <h2 id="title">{mainProduct.title}</h2>
          <p id="price">{mainProduct.price}</p>
          <p id="description">{mainProduct.description}</p>
          <div className="sizeSelection">
            <label className="size">Size:</label>
            <select
              className="sizeButton form-select"
              onChange={(e) => setSelectedSize(e.target.value)}
              value={selectedSize}
            >
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>
          <button className="cartButton" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
        <img src={mainProduct.image} alt={mainProduct.title} />
      </div>
      <div className="otherProducts">
        {otherProducts.map((product) => (
          <div key={product.id} className="otherProduct">
            <Link to={`/product/${product.id}`} className="otherProductLink">
              <img src={product.image} alt={product.title} />
              <div className="otherProductDetails">
                <h5>{product.title}</h5>
                {/* <p>{product.price}</p> */}
                {/* <p>{product.description}</p> */}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

// const shuffleArray = (array) => {
//     const shuffledArray = array.slice(); // Orijinal diziyi değiştirmemek için bir kopya oluştur
//     for (let i = shuffledArray.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
//     }
//     return shuffledArray;
//   };

export default ProductDetail;
