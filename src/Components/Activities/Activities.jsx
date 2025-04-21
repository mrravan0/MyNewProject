import InfoCard from '../InfoCard/InfoCard';
import Market from '../../Assets/Svg/Market';
import Sale from '../../Assets/Svg/Sale';
import Money from '../../Assets/Svg/Money';
import Bag from '../../Assets/Svg/Bag';
import './_activities.scss';

const Activities = () => {
    return (
        <section className="activities">
            <div className="activities__inner container">
                <div className="activities__wrapper">
                    <InfoCard svg={<Market />} textList={['10.5k ', 'Sallers active our site']} />
                    <InfoCard svg={<Sale />} textList={['33k', 'Mopnthly Produduct Sale']} />
                    <InfoCard svg={<Bag />} textList={['45.5k', 'Customer active in our site']} />
                    <InfoCard svg={<Money />} textList={['25k', 'Anual gross sale in our site']} />
                </div>
            </div>
        </section>
    )
}
export default Activities;