import { Fragment, useContext } from 'react';
import Button from '../../Button/Button';
import { DataContext } from '../../../Context/Context';
import './_cartTotal.scss';
const CartTotal = () => {
    const { total } = useContext(DataContext);
    console.log(total);

    return (
        <Fragment>
            <div className="cart__left">
                <input className="cart__coupon cart__subtitle" type='text' placeholder='Coupon Code' />
                <Button text={'Apply Coupon'} />
            </div>
            <div className="cart__right">
                <p className="cart__title">
                    Cart Total
                </p>
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
                <Button text={'Procees to checkout'} to={'/checkOut'} />
            </div>
        </Fragment>
    )
}

export default CartTotal;