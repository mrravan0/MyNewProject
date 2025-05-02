import { useState } from "react";
import Button from '../../Button/Button';
import HeartIcon from '../../../Assets/Svg/HeartIcon';
import DetailsGroup from "../DetailsGroup/DetailsGroup";
import './_detailsBottom.scss'
const DetailsBottom = () => {
    const [count, setCount] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [selectedSize, setSelectedSize] = useState('M');
    const sizes = ["XS", "S", "M", "L", "XL"];
    return (
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
                    <Button text={'Buy now'} to={'/cart'} />
                    <button className="details__like" onClick={() => setIsLiked(!isLiked)}>
                        <HeartIcon color={isLiked ? 'red' : ''} />
                    </button>
                </div>
            </div>
            <DetailsGroup />
        </div>
    )
}

export default DetailsBottom;