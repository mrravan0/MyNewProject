import { memo, useState } from 'react';
import HeaderSelected from '../HeaderSelected/HeaderSelected';
import SearchIcon from '../../../Assets/Svg/SearchIcon';
import HeartIcon from '../../../Assets/Svg/HeartIcon';
import Cart from '../../../Assets/Svg/Cart';
import User from '../../../Assets/Svg/User';
import Order from '../../../Assets/Svg/Order';
import Cancel from '../../../Assets/Svg/Cancel';
import Reviews from '../../../Assets/Svg/Reviews';
import Logout from '../../../Assets/Svg/Logout';
import './_headerCard.scss';
import { Link } from 'react-router-dom';
const HeaderCard = memo(({ status, userSelect }) => {
    const [isUser, setIsUser] = useState(false);
    const userInfo = [
        {
            svg:
                <User
                    colorInfo={userSelect}
                    details={{ width: '24', height: '24', color: isUser ? '#fff' : '#000' }} />,
            text: 'Manage My Account'
        },
        {
            svg: <Order colorInfo={userSelect} />,
            text: 'My Order'
        },
        {
            svg: <Cancel colorInfo={userSelect} />,
            text: 'My Cancellations'
        },
        {
            svg: <Reviews colorInfo={userSelect} />,
            text: 'My Reviews'
        },
        {
            svg: <Logout colorInfo={userSelect} />,
            text: 'Logout'
        },
    ]
    return (
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
                    <div className="header__liked">
                        <Cart />
                        <div className="header__like">4</div>
                    </div>
                    <div
                        className={`header__user ${isUser ? 'is-user' : ''}`}
                        onClick={() => setIsUser(!isUser)}>
                        <User details={{ width: '32', height: '32', color: isUser ? '#fff' : '#000' }} />
                        {
                            isUser &&
                            <div className={`header__selected ${userSelect ? 'is-black' : ''}`}>
                                {
                                    userInfo?.map((item, index) =>
                                        index === 0 ?
                                            <Link key={index} to={'/account'}>
                                                <HeaderSelected features={item} />
                                            </Link> :
                                            <HeaderSelected key={index} features={item} />
                                    )
                                }
                            </div>
                        }
                    </div>
                </div>
            )}
        </div>
    )
});
export default HeaderCard;