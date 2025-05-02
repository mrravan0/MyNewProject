import { memo } from 'react';
import './_details.scss';
import PageInfo from '../PageInfo/PageInfo';
import DetailsImgInfo from './DetailsImgInfo.jsx/DetailsImgInfo';
import DetailsTextInfo from './DetailsTextInfo/DetailsTextInfo';
import { useLocation } from 'react-router-dom';
const Details = memo(() => {
    const location = useLocation();
    let { state } = location;
    return (
        <section className='details'>
            <div className="details__inner container">
                <div className="details__wrapper">
                    <PageInfo textList={['Account', 'Gaming', state.title]} />
                    <div className="details__content">
                        <DetailsImgInfo image={state.image} />
                        <DetailsTextInfo textList={state.title} price={state.price} />
                    </div>
                </div>
            </div>
        </section>
    )
})

export default Details;
