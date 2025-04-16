import './_header.scss';
import photo1 from '../../Assets/Images/Header/photo1.svg'
import photo2 from '../../Assets/Images/Header/photo2.svg'
import photo3 from '../../Assets/Images/Header/photo3.svg'
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Header = ({ status = true }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className='header'>
            <div className="header__wrapper">
                <div className="header__top">
                    <div className="header__top-inner">
                        <div className="header__top-wrapper">
                            <p className="header__top-title">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                            <Link className='header__top-subtitle'>ShopNow</Link>
                        </div>
                        <p className='header__language'>English</p>
                    </div>
                </div>
                <div className="header__bottom">
                    <div className="header__bottom-inner container">
                        <div className="header__bottom-wrapper">
                            <p className='header__logo'>Exclusive</p>
                            <div className={`header__overlay ${isOpen && 'is-active'}`}>
                                <nav className="header__nav">
                                    <ul className="header__list">
                                        <li className="header__item"><Link to={'/'}>Home</Link></li>
                                        <li className="header__item"><Link to={'contact'}>Contact</Link></li>
                                        <li className="header__item"><Link to={'about'}>About</Link></li>
                                        <li className="header__item"><Link to={'signUp'}>Sign Up</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            <button className={`header__burger ${isOpen && 'is-active'}`}
                                onClick={() => setIsOpen(!isOpen)}>
                                <span className="header__burger-line"></span>
                                <span className="header__burger-line"></span>
                                <span className="header__burger-line"></span>
                            </button>
                        </div>
                        <div className="header__content">
                            <div className="header__content-search">
                                <input type="text" className='header__input' placeholder='What are you looking for?' />
                                <img src={photo1} className='header__search' alt="Search" />
                            </div>
                            {
                                status &&
                                <div className="header__content-baskets">
                                    <div className="header__liked">
                                        <img src={photo2} alt="WishList" />
                                        <div className="header__like">4</div>
                                    </div>
                                    <img src={photo3} alt="Basket" />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;