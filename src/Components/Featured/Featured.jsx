import { memo } from 'react';
import Title from '../Title/Title';
import FeaturedCard from './FeaturedCard/FeaturedCard';
import InfoCard from '../InfoCard/InfoCard';
import Delivery from '../../Assets/Svg/Delivery';
import Service from '../../Assets/Svg/Service';
import Guarantee from '../../Assets/Svg/Guarantee';
import './_featured.scss';
const Featured = memo(() => {
    return (
        <section className="featured">
            <div className="featured__inner container">
                <div className="featured__wrapper">
                    <Title textList={['Featured', 'New Arrival']} />
                    <div className="featured__content">
                        <FeaturedCard
                            textList={['PlayStation 5', 'Black and White version of the PS5 coming out on sale.', 'Shop Now']}
                        />
                        <FeaturedCard
                            textList={['Women’s Collections', 'Featured woman collections that give you another vibe.', 'Shop Now']}
                        />
                        <FeaturedCard
                            textList={['Speakers', 'Amazon wireless speakers', 'Shop Now']}
                        />
                        <FeaturedCard
                            textList={['Perfume', 'GUCCI INTENSE OUD EDP', 'Shop Now']}
                        />
                    </div>
                    <div className="featured__info">
                        <InfoCard textList={['FREE AND FAST DELIVERY', 'Free delivery for all orders over $140']} svg={<Delivery />} />
                        <InfoCard textList={['24/7 CUSTOMER SERVICE', 'Friendly 24/7 customer support']} svg={<Service />} />
                        <InfoCard textList={['MONEY BACK GUARANTEE', 'We return money within 30 days']} svg={<Guarantee />} />
                    </div>
                </div>
            </div>
        </section>
    )
})
export default Featured;