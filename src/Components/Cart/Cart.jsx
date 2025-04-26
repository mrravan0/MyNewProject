import PageInfo from '../PageInfo/PageInfo';
import CartCard from './CartCard/CartCard';
import CartTotal from './CartTotal/CartTotal';
import Button from '../Button/Button';
import { DataContext } from '../../Context/Context';
import { useContext } from 'react';
import './_cart.scss';
const Cart = () => {
    const { fakeData } = useContext(DataContext);
    const information = ['Product', 'Price', 'Quantity', 'Subtotal'];
    return (
        <section className='cart'>
            <div className="cart__inner container">
                <div className="cart__wrapper">
                    <PageInfo textList={['Home', 'Cart']} />
                    <div className="cart__group">
                        <div className="cart__top">
                            <div className="cart__content">
                                <div className="cart__card">
                                    <div className="cart__card-wrapper">
                                        <p className="cart__description">{information[0]}</p>
                                        <p className="cart__description">{information[1]}</p>
                                    </div>
                                    <div className="cart__card-wrapper">
                                        <p className="cart__description">{information[2]}</p>
                                        <p className="cart__description">{information[3]}</p>
                                    </div>
                                </div>
                                {fakeData?.map((item, index, arr) => (
                                    <CartCard
                                        key={index}
                                        information={item}
                                        array={arr}
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