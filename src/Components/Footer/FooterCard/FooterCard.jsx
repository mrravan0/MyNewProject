import './_footerCard.scss';
const FooterCard = ({ textList, status }) => {
    return (
        <div className="footer__card">
            <div className="footer__card-info">
                {textList.map(item => (
                    <p className="footer__text">{item}</p>
                ))}
            </div>
            {status &&
                <div className="footer__content">
                    <input type="email" className='footer__input' placeholder='Enter your email' />
                    <img src="" alt="" className='footer__send' />
                </div>
            }
        </div>
    )
}
export default FooterCard;