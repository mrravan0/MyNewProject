import React from "react";
import "./ProductCard.scss";

const ProductCard = ({ imageUrl, isNew, isWishlistIcon }) => {
  return (
    <div className="product-card">
      {isNew && <div className="badge">NEW</div>}

      <div className="icons">
        {isWishlistIcon && (
          <button className="icon-btn">
            <span role="img" aria-label="like">
              🤍
            </span>
          </button>
        )}
        <button className="icon-btn">
          <span role="img" aria-label="view">
            👁️
          </span>
        </button>
      </div>

      <img src={imageUrl} alt="Product" className="product-image" />

      <div className="hover-overlay">
        <span>Add To Cart</span>
      </div>
    </div>
  );
};

export default ProductCard;
