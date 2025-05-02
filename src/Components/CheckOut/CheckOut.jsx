import { useContext } from 'react';
import PageInfo from '../PageInfo/PageInfo';
import CheckOutLeft from './CheckOutLeft/CheckOutLeft';
import CheckOutRight from './CheckOutRight/CheckOutRight';
import { DataContext } from '../../Context/Context';
import './_checkOut.scss';
const CheckOut = () => {
    const { fakeData } = useContext(DataContext);
    return (
        <section className='checkOut'>
            <div className="checkOut__inner container">
                <div className="checkOut__wrapper">
                    <PageInfo
                        textList={['Account', 'My Account', 'Product', 'View Cart', 'CheckOut']} />
                    <div className="checkOut__group">
                        <CheckOutLeft />
                        <CheckOutRight data={fakeData} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CheckOut;