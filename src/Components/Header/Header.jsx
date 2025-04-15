import './_header.scss';
import photo1 from '../../Assets/Images/Header/photo1.svg'
import photo2 from '../../Assets/Images/Header/photo2.svg'
import photo3 from '../../Assets/Images/Header/photo3.svg'
const Header = () => {
    return (
        <header className='header'>
            <div className="header__inner container">
                <div className="header__wrapper">
                    <div className="header__top">
                        <div className="header__top-wrapper">
                            <p className="header__top-title">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                            <span className='header__top-subtitle'>ShopNow</span>
                        </div>
                        {/* <select>
                            <option value="English">English</option>
                            <option value="Azerbaijan">Azerbaijan</option>
                            <option value="Russian">Russian</option>
                        </select> */}
                    </div>
                    <div className="header__bottom">
                        <p className='header__logo'>Exclusive</p>
                        <nav className="header__nav">
                            <ul className="header__list">
                                <li className="header__item">Home</li>
                                <li className="header__item">Contact</li>
                                <li className="header__item">About</li>
                                <li className="header__item">Sign Up</li>
                            </ul>
                        </nav>
                        <div className="header__search">
                            <input type="text" className='header__input' />
                            <img src={photo1} alt="Search" />
                            <Link><img src={photo2} alt="WishList" /></Link>
                            <Link><img src={photo3} alt="Basket" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;