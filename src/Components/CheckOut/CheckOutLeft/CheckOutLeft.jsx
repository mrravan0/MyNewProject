import { useState } from "react";
import Confirmed from "../../../Assets/Svg/Confirmed";
import CheckOutInput from "../CheckOutInput/CheckOutInput";
import './_checkOutLeft.scss';
const CheckOutLeft = () => {
    const [checked, setChecked] = useState(false);
    return (
        <div className="checkOut__left">
            <p className="checkOut__left-title">Billing Details</p>
            <form className="checkOut__form">
                <CheckOutInput status={true} text={'First Name'} />
                <CheckOutInput text={'Company Name'} />
                <CheckOutInput status={true} text={'Street Address'} />
                <CheckOutInput text={'Apartment, floor, etc. (optional)'} />
                <CheckOutInput status={true} text={'Town/City'} />
                <CheckOutInput status={true} text={'Phone Number'} />
                <CheckOutInput status={true} text={'Email Address'} />
            </form>
            <div className="checkOut__save">
                <div
                    className={
                        `checkOut__save-information ${checked ? 'is-checked' : ''}`
                    }
                    onClick={() => setChecked(!checked)}>
                    {
                        checked && <Confirmed />
                    }
                </div>
                <p className="checkOut__save-title">
                    Save this information for faster check-out next time
                </p>
            </div>
        </div>
    )
}

export default CheckOutLeft;