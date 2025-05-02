import { useContext } from 'react';
import CheckOutBanks from '../CheckOutBanks/CheckOutBanks';
import './_checkOutCard.scss';
import { DataContext } from '../../../Context/Context';
const CheckOutCard = ({ features }) => {
    const { total } = useContext(DataContext);
    return (
        <div className="checkOut__card">
            {
                features?.map((item, index) => (
                    <div key={index} className="checkOut__card-description">
                        <div className="checkOut__card-left">
                            <img src={item.image} alt="" />
                            <p className="cart__total cart__subtitle">{item.text}</p>
                        </div>
                        <p className="cart__total cart__subtitle">$ {item.price}</p>
                    </div>
                ))
            }
            <div className="checkOut__total">
                <div className="cart__right-description">
                    <div className="cart__right-content">
                        <p className="cart__subtitle">Subtotal:</p>
                        <p className="cart__total cart__subtitle">$ {total}</p>
                    </div>
                    <div className="cart__right-content">
                        <p className="cart__subtitle">Shipping:</p>
                        <p className="cart__total cart__subtitle">Free</p>
                    </div>
                    <div className="cart__right-content">
                        <p className="cart__subtitle">Total:</p>
                        <p className="cart__total cart__subtitle">$ {total}</p>
                    </div>
                </div>
            </div>
            <CheckOutBanks />
        </div>
    )
}

export default CheckOutCard;