import { memo } from 'react';
import './_details.scss';
import PageInfo from '../PageInfo/PageInfo';
import DetailsImgInfo from './DetailsImgInfo.jsx/DetailsImgInfo';
import DetailsTextInfo from './DetailsTextInfo/DetailsTextInfo';
const Details = memo(({ images, texts, price }) => {
    return (
        <section className='details'>
            <div className="details__inner container">
                <div className="details__wrapper">
                    <PageInfo textList={['Account', 'Gaming', 'Havic HV G-92 Gamepad']} />
                    <div className="details__content">
                        <DetailsImgInfo imgList={images} />
                        <DetailsTextInfo textList={texts} price={price} />
                    </div>
                </div>
            </div>
        </section>
    )
})

export default Details;
