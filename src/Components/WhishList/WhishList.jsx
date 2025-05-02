import WhishContent from './WhishContent/WhishContent';
import photo1 from '../../Assets/Images/Sales/photo1.png';
import { memo } from 'react';
import './WhishList.scss';
const WhishList = memo(() => {
    const whishListData = [
        {
            image: photo1,
            title: 'The north coat',
            price: 260,
            oldPrice: 360,
        },
        {
            image: photo1,
            title: 'The north coat',
            price: 260,
            oldPrice: 360,
        },
        {
            image: photo1,
            title: 'The north coat',
            price: 260,
            oldPrice: 360,
        },
        {
            image: photo1,
            title: 'The north coat',
            price: 260,
            oldPrice: 360,
        },
    ]
    return (
        <section className="whishList">
            <div className="whishList__inner container">
                <div className="whishList__wrapper">
                    <WhishContent info={{
                        title: 'Move All To Bag',
                        text: 'Wishlist (4)',
                        isActive: false,
                        rating: false
                    }
                    } features={whishListData} />
                    <WhishContent info={{
                        title: 'Move All To Bag',
                        text: 'Just For You',
                        isActive: true,
                    }} features={whishListData} />
                </div>
            </div>
        </section>
    )
})

export default WhishList;