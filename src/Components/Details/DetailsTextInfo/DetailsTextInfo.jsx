import './_detailsTextInfo.scss';
import Star from '../../../Assets/Svg/Star';
import Button from '../../Button/Button';
import HeartIcon from '../../../Assets/Svg/HeartIcon';
import { useState } from 'react';
const DetailsTextInfo = ({ textList, price }) => {
    const [count, setCount] = useState(0);
    const [activeColor, setActiveColor] = useState(false);
    return (
        <div className="details__right">
            <div className="details__top">
                <div className="details__top-wrapper">
                    <p className="details__top-title">{textList[0]}</p>
                    <div className="details__top-score">
                        <div className="details__stars">
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                            <Star color='rgb(191,191,191)' />
                        </div>
                        <p className="details__reviews">(150 Reviews)</p>
                        <p className="details__top-description">In Stock</p>
                    </div>
                    <p className="details__price">{price}</p>
                </div>
                <p className="details__description">{textList[1]}</p>
            </div>
            <div className="details__bottom">
                <div className="details__bottom-wrapper">
                    <div className="details__colors">
                        <p className="details__bottom-text"> Colors :</p>
                        <div className="details__colors-content">
                            <div className={`details__colors-left ${activeColor ? 'active' : ''}`}
                                onChange={() => setActiveColor(!activeColor)}>
                            </div>
                            <div className={`details__colors-right ${activeColor ? 'active' : ''}`}
                                onChange={() => setActiveColor(!activeColor)}>
                            </div>
                        </div>
                    </div>
                    <div className="details__size">
                        <p className="details__bottom-text">Size :</p>
                        <div className="details__size-content">
                            <button className="details__size-description">XS</button>
                            <button className="details__size-description">S</button>
                            <button className="details__size-description">M</button>
                            <button className="details__size-description">L</button>
                            <button className="details__size-description">XL</button>
                        </div>
                    </div>
                    <div className="details__buy">
                        <div className="details__count">
                            <button className="details__count-left" onClick={() => count > 0 && setCount(count - 1)}>
                                -
                            </button>
                            <p className="details__bottom-text">
                                {count}
                            </p>
                            <button className="details__count-right" onClick={() => setCount(count + 1)}>
                                +
                            </button>
                        </div>
                        <Button text={'Buy now'} />
                        <div className="details__like">
                            <HeartIcon  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DetailsTextInfo