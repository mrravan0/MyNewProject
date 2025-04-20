import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import useSWR from "swr";
import { useSliderTrigger } from "../sliderTrigger.js";
import { useSliderData } from "../sliderTrigger.js";
import ArrowToRight from "../../Assets/Svg/ArrowToRight";
import photo1 from "../../Assets/Images/Hero/photo1.png";
import photo3 from "../../Assets/Images/Hero/photo3.png";
import "./Banner.scss";

const Banner = () => {
  const { isOpen, handleOpen } = useSliderTrigger();
  const { setData } = useSliderData();
  let data = [
    {
      id: 0,
      title: "iphone13 series",
      desc: "up to 10% off Voucher",
    },
    {
      id: 1,
      title: "iphone14 max",
      desc: "up to 15% off Voucher",
    },
    {
      id: 2,
      title: "iphone15 pro",
      desc: "up to 19% off Voucher",
    },
  ];
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      simulateTouch={false}
      loop={true}
      pagination={{
        clickable: true,
        type: "bullets",
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active",
      }}
      autoplay={{ delay: 5000 }}
    >
      {data?.map((item) => (
        <SwiperSlide key={item?.id}>
          <div className="banner__right">
            <div className="banner__info">
              <div className="banner__info-content">
                <img className="banner__info-image" src={photo3} alt="" />
                <h1 className="banner__title">iPhone 14 Series</h1>
              </div>
              <h2 className="banner__subtitle">
                Up to 10% <br /> off Voucher
              </h2>
              <div className="banner__shopNow">
                <button
                  className="banner__shopNow-title"
                  onClick={() => {
                    // setData();
                    handleOpen();
                  }}
                >
                  Shop Now
                </button>
                <ArrowToRight />
              </div>
            </div>
            <img src={photo1} className="banner__image" alt="Phone" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
