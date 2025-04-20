import './_detailsTextInfo.scss';
import Star from '../../../Assets/Svg/Star';
import Button from '../../Button/Button';
import HeartIcon from '../../../Assets/Svg/HeartIcon';
import DeliveryBlack from '../../../Assets/Svg/DeliveryBlack';
import Return from '../../../Assets/Svg/Return';
import { useState } from 'react';
const DetailsTextInfo = ({ textList, price }) => {
    const [count, setCount] = useState(0);
    const [selectedSize, setSelectedSize] = useState('M');
    const [isLiked, setIsLiked] = useState(false);
    const sizes = ["XS", "S", "M", "L", "XL"];
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
                            <div className='details__colors-left'>
                            </div>
                            <div className='details__colors-right'>
                            </div>
                        </div>
                    </div>
                    <div className="details__size">
                        <p className="details__bottom-text">Size :</p>
                        <div className="details__size-content">
                            {
                                sizes.map(item => (
                                    <button
                                        key={item + '1'}
                                        style={selectedSize === item ?
                                            { backgroundColor: 'rgba(219, 68, 68, 1)', color: '#fff' }
                                            : { backgroundColor: 'transparent', color: '#000' }}
                                        onClick={() => setSelectedSize(item)}
                                        className='details__size-description'>
                                        {item}
                                    </button>
                                ))
                            }
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
                        <button className="details__like" onClick={() => setIsLiked(!isLiked)}>
                            <HeartIcon color={isLiked ? 'red' : ''} />
                        </button>
                    </div>
                </div>
                <div className="details__group">
                    <div className="details__group-top">
                        <DeliveryBlack />
                        <div className="details__group-wrapper">
                            <div className="details__group-title">
                                Free Delivery
                            </div>
                            <div className="details__group-subtitle">
                                Enter your postal code for Delivery Availability
                            </div>
                        </div>
                    </div>
                    <div className="details__group-bottom">
                        <Return />
                        <div className="details__group-wrapper">
                            <div className="details__group-title">
                                Free Delivery
                            </div>
                            <div className="details__group-subtitle">
                                Enter your postal code for Delivery Availability
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DetailsTextInfo