import Button from '../Button/Button';
import Title from '../Title/Title';
import ProductCard from '../ProductCard/ProductCard'
import photo1 from '../../Assets/Images/Selling/photo1.png';
import photo2 from '../../Assets/Images/Selling/photo2.png';
import photo3 from '../../Assets/Images/Selling/photo3.png';
import photo4 from '../../Assets/Images/Selling/photo4.png';
import './Selling.scss';
const Selling = () => {
    const sellingData = [
        {
            image: photo1,
            title: 'The north coat',
            price: 260,
            oldPrice: 360,
            isWishList: true
        },
        {
            image: photo2,
            title: 'Gucci duffle bag',
            price: 960,
            oldPrice: 1160,
            isWishList: true
        },
        {
            image: photo3,
            title: 'RGB liquid CPU Cooler',
            price: 160,
            oldPrice: 170,
            isWishList: true
        },
        {
            image: photo4,
            title: 'Small BookSelf',
            price: 360,
            isWishList: true
        }
    ]
    return (
        <section className='selling'>
            <div className="selling__inner container">
                <div className="selling__wrapper">
                    <Title textList={['This Month', 'Best Selling Products']} subject={<Button text={'View All'} />} />
                    <div className="selling__group">
                        {
                            sellingData?.map((item, index) => (
                                <ProductCard key={index} features={item} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Selling;