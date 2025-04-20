import "./_hero.scss";
// import photo1 from "../../Assets/Images/Hero/photo1.png";
import ArrowRight from "../../Assets/Svg/ArrowRight";

// import photo3 from "../../Assets/Images/Hero/photo3.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="hero">
      <div className="hero__inner container">
        <div className="hero__wrapper">
          <div className={`hero__overlay ${isOpen ? "active" : ""}`}>
            <div className="hero__left">
              <ul className="hero__list">
                <li className="hero__item">
                  Woman’s Fashion
                  <ArrowRight />
                </li>
                <li className="hero__item">
                  Men’s Fashion
                  <ArrowRight />
                </li>
                <li className="hero__item">Electronics</li>
                <li className="hero__item">Home & Lifestyle</li>
                <li className="hero__item">Medicine</li>
                <li className="hero__item">Sports & Outdoor</li>
                <li className="hero__item">Baby’s & Toys</li>
                <li className="hero__item">Groceries & Pets</li>
                <li className="hero__item">Health & Beauty</li>
              </ul>
            </div>
          </div>
          <button
            className={`hero__button ${isOpen ? "active" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <ArrowRight />
          </button>
          <Banner />
        </div>
      </div>
    </section>
  );
};
export default Hero;
