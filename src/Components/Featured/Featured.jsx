import { memo } from 'react';
import Title from '../Title/Title';
import FeaturedCard from './FeaturedCard/FeaturedCard';
import Info from '../Info/Info';
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
                    <Info />
                </div>
            </div>
        </section>
    )
})
export default Featured;