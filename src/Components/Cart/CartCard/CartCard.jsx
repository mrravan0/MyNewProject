import { Fragment, memo, useContext, useEffect, useState } from 'react';
import ArrowDown from '../../../Assets/Svg/ArrowDown';
import ArrowUp from '../../../Assets/Svg/ArrowUp';
import { DataContext } from '../../../Context/Context';
import './_cartCard.scss';
const CartCard = memo(({ information, status = false, }) => {
    const { total, setTotal } = useContext(DataContext);
    const [counter, setCounter] = useState(1);
    const [result, setResult] = useState(information.price);

    useEffect(() => {
        const newResult = information.price * counter;
        setResult(newResult);
        setTotal(prevTotal => (prevTotal || 0) + newResult);
    }, [information.price, counter]);

    return (
        <div className="cart__card">
            {status ?
                information?.map((item, index) => (
                    <p key={index} className="cart__description">{item}</p>
                ))
                :
                <Fragment>
                    <div className="cart__card-content">
                        <img src={information.image} alt="" />
                        <p className="cart__description">{information.text}</p>
                    </div>
                    <p className="cart__description">${result}</p>
                    <div className="cart__count">
                        <input
                            className='cart__input cart__description'
                            type="number"
                            value={counter}
                            onChange={(e) => setCounter(Number(e.target.value))} />
                        <div className="cart__arrows">
                            <ArrowUp
                                features={{
                                    width: '16',
                                    height: '16',
                                    onClick: () => {
                                        setCounter(counter + 1)
                                    }
                                }}
                            />
                            <ArrowDown
                                color={'black'}
                                features={{
                                    width: '16',
                                    height: '16',
                                    onClick: () => counter > 1 && setCounter(counter - 1)
                                }} />
                        </div>
                    </div>
                    <p className="cart__description">${result}</p>
                </Fragment>
            }
        </div>
    )
})
export default CartCard;