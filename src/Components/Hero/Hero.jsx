import './_hero.scss';
import photo1 from '../../Assets/Images/Hero/photo1.png';
import ArrowRight from '../../Assets/Svg/ArrowRight';
import ArrowToRight from '../../Assets/Svg/ArrowToRight';
import photo3 from '../../Assets/Images/Hero/photo3.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className='hero'>
            <div className="hero__inner container">
                <div className="hero__wrapper">
                    <div className={`hero__overlay ${isOpen ? 'active' : ''}`}>
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
                        className={`hero__button ${isOpen ? 'active' : ''}`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <ArrowRight />
                    </button>
                    <div className="hero__right">
                        <div className="hero__info">
                            <div className="hero__info-content">
                                <img className='hero__info-image' src={photo3} alt="" />
                                <h1 className="hero__title">iPhone 14 Series</h1>
                            </div>
                            <h2 className="hero__subtitle">Up to 10% <br /> off Voucher</h2>
                            <div className="hero__shopNow">
                                <Link className="hero__shopNow-title">Shop Now</Link>
                                <ArrowToRight />
                            </div>
                        </div>
                        <img src={photo1} className='hero__image' alt="Phone" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero;