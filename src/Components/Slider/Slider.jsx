import ArrowLeftSlider from '../../Assets/Svg/ArrowLeftSlider'
import ArrowRightSlider from '../../Assets/Svg/ArrowRightSlider'
import './Slider.scss';
const Slider = () => {
    return (
        <div className="slider">
            <div className="slider__button">
                <ArrowLeftSlider />
            </div>
            <div className="slider__button">
                <ArrowRightSlider />
            </div>
        </div>
    )
}

export default Slider;