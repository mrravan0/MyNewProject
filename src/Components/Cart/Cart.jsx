import PageInfo from '../PageInfo/PageInfo';
import CartCard from './CartCard/CartCard';
import CartTotal from './CartTotal/CartTotal';
import Button from '../Button/Button';
import photo1 from '../../Assets/Images/Cart/photo1.png';
import photo2 from '../../Assets/Images/Cart/photo2.png';
import './_cart.scss';
const Cart = () => {
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
                                <CartCard
                                    information={
                                        {
                                            text: 'LCD Monitor',
                                            price: 650,
                                            image: photo1
                                        }
                                    }
                                />
                                <CartCard
                                    information={
                                        {
                                            text: 'H1 Gamepad',
                                            price: 550,
                                            image: photo2
                                        }
                                    } />
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