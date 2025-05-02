import { useNavigate } from 'react-router-dom';
import Star from '../../Assets/Svg/Star';
import Eye from '../../Assets/Svg/Eye';
import HeartIcon from '../../Assets/Svg/HeartIcon';
import "./ProductCard.scss";

const ProductCard = ({ features, rating = true }) => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate(`/productDetails`, { state: features });
  }
  return (
    <div className="product__card" onClick={() => handleClick()}>
      <div className="product__content">
        {features.isNew && <div className="product__badge">NEW</div>}
        <div className="product__icons">
          {features.isWishList && (
            <button className="product__icon">
              <HeartIcon width='24' height='24' />
            </button>
          )}
          <button className="product__icon">
            <Eye />
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
        {
          rating &&
          <div className="product__stars">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            <p className="product__comments">(88)</p>
          </div>
        }
      </div>
    </div>
  );
};

export default ProductCard;
