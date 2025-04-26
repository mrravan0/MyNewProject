import Title from '../Title/Title';
import SalesTime from './SalesTime/SalesTime';
import ProductCard from '../ProductCard/ProductCard';
import photo1 from '../../Assets/Images/Sales/photo1.png';
import photo2 from '../../Assets/Images/Sales/photo2.png';
import photo3 from '../../Assets/Images/Sales/photo3.png';
import photo4 from '../../Assets/Images/Sales/photo4.png';
import './Sales.scss';
const Sales = () => {
    const saleData = [
        {
            title: 'HAVIT HV-G92 Gamepad',
            price: 120,
            oldPrice: 160,
            image: photo1
        },
        {
            title: 'AK-900 Wired Keyboard',
            price: 960,
            oldPrice: 1160,
            image: photo2
        },
        {
            title: 'IPS LCD Gaming Monitor',
            price: 380,
            oldPrice: 460,
            image: photo3
        },
        {
            title: 'S-Series Comfort Chair ',
            price: 375,
            oldPrice: 400,
            image: photo4
        },
    ]
    return (
        <section className='sales'>
            <div className="sales__inner container">
                <div className="sales__wrapper">
                    <Title textList={['Today’s', 'Flash Sales']} subject={<SalesTime />} />
                    <div className="sales__group">
                        {
                            saleData?.map((item, index) => (
                                <ProductCard key={index} features={item} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sales;