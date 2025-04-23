import './_checkOutInput.scss';
import Input from '../../Input/Input';
import { Fragment } from 'react';
const CheckOutInput = ({ text, status }) => {
    return (
        <div className="checkOut__form-content">
            <p className="checkOut__form-title">
                {status ?
                    <Fragment>
                        {text}
                        <span className='checkOut__required'>*</span>
                    </Fragment>
                    : text}
            </p>
            <Input />
        </div>
    )
}
export default CheckOutInput;