import React from "react";
import { useParams } from "react-router-dom";
import bestSellersData from "../images";

const ProductDetail = () => {
    const { productId } = useParams();
    const product = bestSellersData.find((item) => item.id === parseInt(productId));

    if (!product) {
        return <div>Product not found.</div>
    }

    return (
        <div>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} />
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    );
};

export default ProductDetail;