import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CustomersCard from './CustomersCard/CustomersCard';
import Info from '../Info/Info';
import photo2 from '../../Assets/Images/About/photo2.png';
import photo3 from '../../Assets/Images/About/photo3.png';
import photo4 from '../../Assets/Images/About/photo4.png';
import FacebookIcon from '../../Assets/Svg/FacebookIcon';
import InstagramIcon from '../../Assets/Svg/InstagramIcon';
import LinkedinIcon from '../../Assets/Svg/LinkedinIcon';
import "swiper/css";
import "swiper/css/bundle";
import './_customers.scss';
const Customers = () => {
    const data = [
        {
            textList: ['Tom Cruise', 'Founder & Chairman'],
            image: photo2,
            svgList: [
                <FacebookIcon color={'black'} />,
                <InstagramIcon color={'black'} />,
                < LinkedinIcon color={'black'} />
            ]
        },
        {
            textList: ['Emma Watson', 'Managing Director'],
            image: photo3,
            svgList: [
                <FacebookIcon color={'black'} />,
                <InstagramIcon color={'black'} />,
                < LinkedinIcon color={'black'} />
            ]
        },
        {
            textList: ['Will Smith', 'Product Designer'],
            image: photo4,
            svgList: [
                <FacebookIcon color={'black'} />,
                <InstagramIcon color={'black'} />,
                < LinkedinIcon color={'black'} />
            ]
        },
        {
            textList: ['Tom Cruise', 'Founder & Chairman'],
            image: photo2,
            svgList: [
                <FacebookIcon color={'black'} />,
                <InstagramIcon color={'black'} />,
                < LinkedinIcon color={'black'} />
            ]
        },
        {
            textList: ['Emma Watson', 'Managing Director'],
            image: photo3,
            svgList: [
                <FacebookIcon color={'black'} />,
                <InstagramIcon color={'black'} />,
                < LinkedinIcon color={'black'} />
            ]
        },
        {
            textList: ['Will Smith', 'Product Designer'],
            image: photo4,
            svgList: [
                <FacebookIcon color={'black'} />,
                <InstagramIcon color={'black'} />,
                < LinkedinIcon color={'black'} />
            ]
        }
    ]
    return (
        <section className="customers">
            <div className="customers__inner container">
                <div className="customers__wrapper">
                    <div className="customers__group">
                        {
                            <Swiper
                                modules={[Pagination, Autoplay]}
                                slidesPerView={1}
                                simulateTouch={false}
                                spaceBetween={40}
                                loop={true}
                                pagination={{
                                    clickable: true,
                                    type: 'bullets',
                                    bulletClass: "custom-swiper",
                                    bulletActiveClass: "custom-swiper-active",
                                }}
                                autoplay={{ delay: 4000 }}
                                breakpoints={{
                                    1250: { slidesPerView: 3 }
                                }}
                            >
                                {
                                    data?.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <CustomersCard
                                                image={item.image}
                                                textList={item.textList}
                                                svgList={item.svgList} />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>}
                    </div>
                    <Info />
                </div>
            </div>
        </section>
    )
}

export default Customers;