import "./_header.scss";
import SearchIcon from "../../Assets/Svg/SearchIcon";
import HeartIcon from "../../Assets/Svg/HeartIcon";
import ArrowDown from '../../Assets/Svg/ArrowDown';
import Cart from "../../Assets/Svg/Cart";
import { Link } from "react-router-dom";
import { useState, memo } from "react";
const Header = ({ status }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__top">
          <div className="header__top-inner">
            <div className="header__top-wrapper">
              <p className="header__top-title">
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%!
              </p>
              <Link className="header__top-subtitle">ShopNow</Link>
            </div>
            <div className="header__language">
              <p>English</p>
              <ArrowDown features={{
                width: '24',
                height: '24'
              }} />
            </div>
          </div>
        </div>
        <div className="header__bottom">
          <div className="header__bottom-inner container">
            <div className="header__bottom-wrapper">
              <p className="header__logo">Exclusive</p>
              <div className={`header__overlay ${isOpen ? "is-active" : ''}`}>
                <nav className="header__nav">
                  <ul className="header__list">
                    <li className="header__item" onClick={() => setIsOpen(!isOpen)}>
                      <Link to={"/"}>Home</Link>
                    </li>
                    <li className="header__item" onClick={() => setIsOpen(!isOpen)}>
                      <Link to={"/contact"}>Contact</Link>
                    </li>
                    <li className="header__item" onClick={() => setIsOpen(!isOpen)}>
                      <Link to={"/about"}>About</Link>
                    </li>
                    <li className="header__item" onClick={() => setIsOpen(!isOpen)}>
                      <Link to={"/signUp"}>Sign Up</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <button
                className={`header__burger ${isOpen ? "is-active" : ''}`}
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="header__burger-line"></span>
                <span className="header__burger-line"></span>
                <span className="header__burger-line"></span>
              </button>
            </div>
            <div className="header__content">
              <div className="header__content-search">
                <input
                  type="text"
                  className="header__input"
                  placeholder="What are you looking for?"
                />
                <div className="header__search">
                  <SearchIcon />
                </div>
              </div>
              {status && (
                <div className="header__content-baskets">
                  <div className="header__liked">
                    <HeartIcon />
                    <div className="header__like">4</div>
                  </div>
                  <div className="header__cart-icon">
                    <Cart />
                    <div className="header__cart-count">4</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default memo(Header);
