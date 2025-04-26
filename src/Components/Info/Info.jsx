import InfoCard from '../InfoCard/InfoCard';
import Delivery from '../../Assets/Svg/Delivery'
import Service from '../../Assets/Svg/Service';
import Guarantee from '../../Assets/Svg/Guarantee';
import './_info.scss';
const Info = () => {
    return (
        <div className="info">
            <InfoCard textList={['FREE AND FAST DELIVERY', 'Free delivery for all orders over $140']} svg={<Delivery />} />
            <InfoCard textList={['24/7 CUSTOMER SERVICE', 'Friendly 24/7 customer support']} svg={<Service />} />
            <InfoCard textList={['MONEY BACK GUARANTEE', 'We return money within 30 days']} svg={<Guarantee />} />
        </div>
    )
}

export default Info;