import PageInfo from '../PageInfo/PageInfo';
import CartCard from './CartCard/CartCard';
import CartTotal from './CartTotal/CartTotal';
import Button from '../Button/Button';
import { DataContext } from '../../Context/Context';
import { useContext } from 'react';
import './_cart.scss';
const Cart = () => {
    const { fakeData } = useContext(DataContext)
    return (
        <section className='cart'>
            <div className="cart__inner container">
                <div className="cart__wrapper">
                    <PageInfo textList={['Home', 'Cart']} />
                    <div className="cart__group">
                        <div className="cart__top">
                            <div className="cart__content">
                                <CartCard
                                    status={true}
                                    information={
                                        ['Product', 'Price', 'Quantity', 'Subtotal']} />
                                {fakeData?.map((item, index) => (
                                    <CartCard
                                        key={index}
                                        information={item}
                                    />
                                ))}
                            </div>
                            <div className="cart__info">
                                <Button text={'Return To Shop'} />
                                <Button text={'Update Cart'} />
                            </div>
                        </div>
                        <div className="cart__bottom">
                            <CartTotal />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart;