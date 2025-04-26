import { Fragment, memo, useContext } from 'react';
import ArrowDown from '../../../Assets/Svg/ArrowDown';
import ArrowUp from '../../../Assets/Svg/ArrowUp';
import { DataContext } from '../../../Context/Context';
import './_cartCard.scss';

const CartCard = memo(({ information, status = false, array }) => {
    const { setFakeData, setTotal } = useContext(DataContext);

    const updateQuantity = (newQuantity) => {
        const updatedData = array.map(item => {
            if (item.id === information.id) {
                const updatedItem = {
                    ...item,
                    quantity: newQuantity,
                    subtotal: item.price * newQuantity
                };
                return updatedItem;
            }
            return item;
        });

        setFakeData(updatedData);

        const newTotal = updatedData.reduce((sum, item) => {
            return sum + (item.subtotal ?? (item.price * (item.quantity ?? 1)));
        }, 0);
        setTotal(newTotal);
    };

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
                    <p className="cart__description">${information.price}</p>
                    <div className="cart__count">
                        <input
                            className='cart__input cart__description'
                            type="number"
                            min={1}
                            value={information.quantity ?? 1}
                            onChange={(e) => {
                                const value = Math.max(1, Number(e.target.value));
                                updateQuantity(value);
                            }}
                        />
                        <div className="cart__arrows">
                            <ArrowUp
                                features={{
                                    width: '16',
                                    height: '16',
                                    onClick: () => updateQuantity((information.quantity ?? 1) + 1)
                                }}
                            />
                            <ArrowDown
                                color={'black'}
                                features={{
                                    width: '16',
                                    height: '16',
                                    onClick: () => updateQuantity(Math.max(1, (information.quantity ?? 1) - 1))
                                }}
                            />
                        </div>
                    </div>
                    <p className="cart__description">
                        ${information.subtotal ?? (information.price * (information.quantity ?? 1))}
                    </p>
                </Fragment>
            }
        </div>
    )
});

export default CartCard;
