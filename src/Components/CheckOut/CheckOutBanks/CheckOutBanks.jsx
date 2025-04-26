import { Fragment, useState } from 'react';
import photo1 from '../../../Assets/Images/CheckOut/photo1.png'
import photo2 from '../../../Assets/Images/CheckOut/photo2.png'
import photo3 from '../../../Assets/Images/CheckOut/photo3.png'
import photo4 from '../../../Assets/Images/CheckOut/photo4.png'
import './_checkOutBanks.scss';
const CheckOutBanks = () => {
    const [selectedPayment, setSelectedPayment] = useState('bank');
    return (
        <Fragment>
            <div className="checkOut__banks">
                <div className="checkOut__banks-group">
                    <button className="checkOut__banks-button" onClick={() => setSelectedPayment('bank')}>
                        <div className={`${selectedPayment == 'bank' ? 'is-bank' : ''}`}></div>
                    </button>
                    <p className="checkOut__banks-title">Bank</p>
                </div>
                <div className="checkOut__banks-images">
                    <img className='checkOut__banks-image' src={photo1} alt="" />
                    <img className='checkOut__banks-image' src={photo2} alt="" />
                    <img className='checkOut__banks-image' src={photo3} alt="" />
                    <img className='checkOut__banks-image' src={photo4} alt="" />
                </div>
            </div>
            <div className="checkOut__banks-group">
                <button className="checkOut__banks-button" onClick={() => setSelectedPayment('cash')}>
                    <div className={`${selectedPayment === 'cash' ? 'is-bank' : ''}`}></div>
                </button>
                <p className="checkOut__banks-title">Cash on delivery</p>
            </div>
        </Fragment>
    )
}
export default CheckOutBanks;