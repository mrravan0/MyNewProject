import PageInfo from '../PageInfo/PageInfo';
import photo1 from '../../Assets/Images/About/photo1.png';
import './_story.scss';
const Story = () => {
    return (
        <section className="story">
            <div className="story__inner container">
                <div className="story__wrapper">
                    <PageInfo textList={['Home', 'About']} />
                    <div className="story__content">
                        <div className="story__left">
                            <h1 className='story__title'>
                                Our Story
                            </h1>
                            <div className="story__text">
                                <p className="story__description">
                                    Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense
                                    in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive
                                    has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
                                </p>
                                <p className="story__description">Exclusive has more than 1 Million products to offer, growing at a very
                                    fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
                                </p>
                            </div>
                        </div>
                        <img className='story__image' src={photo1} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Story;