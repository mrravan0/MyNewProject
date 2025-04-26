import CheckOutCard from '../CheckOutCard/CheckOutCard';
import Button from '../../Button/Button';
import './_checkOutRight.scss';
const CheckOutRight = ({ data }) => {
    return (
        <div className="checkOut__right">
            <CheckOutCard features={data} />
            <div className="checkOut__buttons">
                <div className="checkOut__buttons-content">
                    <input className="checkOut__buttons-input" type='text' placeholder='Coupon Code' />
                    <Button text={'Apply Coupon'} />
                </div>
                <Button text={'Place Order'} />
            </div>
        </div>
    )
}

export default CheckOutRight;