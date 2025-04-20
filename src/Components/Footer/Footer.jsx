import './_footer.scss';
import FooterCard from './FooterCard/FooterCard';
import photo1 from '../../Assets/Images/Footer/photo1.png';
import photo2 from '../../Assets/Images/Footer/photo2.png';
import photo3 from '../../Assets/Images/Footer/photo3.png';
import FacebookIcon from "../../Assets/Svg/FacebookIcon";
import TwitterIcon from "../../Assets/Svg/TwitterIcon";
import InstagramIcon from "../../Assets/Svg/InstagramIcon";
import LinkedinIcon from "../../Assets/Svg/LinkedinIcon";
import { memo } from 'react';
const Footer = memo(() => {
    return (
        <footer className="footer">
            <div className="footer__inner container">
                <div className="footer__wrapper">
                    <FooterCard textList={['Exclusive', 'Subscribe', 'Get 10% off your first order']} status={true} />
                    <FooterCard textList={['Support', '111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.', 'exclusive@gmail.com', '+88015-88888-9999']} />
                    <FooterCard textList={['Account', 'My Account', 'Login / Register', 'Cart', 'Wishlist', 'Shop']} />
                    <FooterCard textList={['Quick Link', 'Privacy Policy', 'Terms Of Use', 'FAQ', 'Contact']} />
                    <div className="footer__soc1als">
                        <p className="footer__text">Download App</p>
                        <p className='footer__subtitle'>Save $3 with App New User Only</p>
                        <div className="footer__images">
                            <img src={photo1} alt="" />
                            <div className="footer__images-download">
                                <img src={photo2} alt="" />
                                <img src={photo3} alt="" />
                            </div>
                        </div>
                        <div className="footer__soc1als-images">
                            <FacebookIcon />
                            <TwitterIcon />
                            <InstagramIcon />
                            <LinkedinIcon />
                        </div>
                    </div>
                </div>
                <p className="footer__copyright">Copyright Rimel <time dateTime="2022">2022</time>. All right reserved</p>
            </div>
        </footer>
    )
})
export default Footer;
