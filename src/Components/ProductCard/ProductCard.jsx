import Star from '../../Assets/Svg/Star';
import "./ProductCard.scss";

const ProductCard = ({ features, isNew, isWishlistIcon }) => {
  return (
    <div className="product__card">
      <div className="product__content">
        {isNew && <div className="product__badge">NEW</div>}
        <div className="product__icons">
          {isWishlistIcon && (
            <button className="product__icon">
              <span role="img" aria-label="like">
                🤍
              </span>
            </button>
          )}
          <button className="product__icon">
            <span role="img" aria-label="view">
              👁️
            </span>
          </button>
        </div>
        <img src={features.image} alt="Product" className="product__image" />
        <div className="product__overlay">
          <span>Add To Cart</span>
        </div>
      </div>
      <div className="product__group">
        <p className="product__title">{features.title}</p>
        <p className="product__price">
          ${features.price}
          {
            features.oldPrice &&
            <span className="product__discount">${features.oldPrice}</span>
          }
        </p>
        <div className="product__stars">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
          <p className="product__comments">(88)</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
