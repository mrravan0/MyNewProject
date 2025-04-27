import DeliveryBlack from '../../../Assets/Svg/DeliveryBlack';
import Return from '../../../Assets/Svg/Return';
import './_detailsGroup.scss';
const DetailsGroup = () => {
    return (
        <div className="details__group">
            <div className="details__group-top">
                <DeliveryBlack />
                <div className="details__group-wrapper">
                    <div className="details__group-title">
                        Free Delivery
                    </div>
                    <div className="details__group-subtitle">
                        Enter your postal code for Delivery Availability
                    </div>
                </div>
            </div>
            <div className="details__group-bottom">
                <Return />
                <div className="details__group-wrapper">
                    <div className="details__group-title">
                        Free Delivery
                    </div>
                    <div className="details__group-subtitle">
                        Enter your postal code for Delivery Availability
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsGroup;