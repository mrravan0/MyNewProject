import Slider from '../../Slider/Slider';
import './SalesTime.scss';

const SalesTime = () => {
    const times = [
        {
            title: 'Days',
            time: '03'
        },
        {
            title: 'Hours',
            time: '23'
        },
        {
            title: 'Minutes',
            time: '19'
        },
        {
            title: 'Seconds',
            time: '56'
        }
    ]
    return (
        <div className="sales__title-wrapper">
            <div className="sales__times">
                {
                    times?.map((item, index) => (
                        <div className="sales__time" key={index}>
                            <div className="sales__time-wrapper">
                                <p className="sales__time-title">{item.title}</p>
                                <p className="sales__time-description">{item.time}</p>
                            </div>
                            {
                                index < times.length - 1 &&
                                <div className="sales__dots">
                                    <div className="sales__dot"></div>
                                    <div className="sales__dot"></div>
                                </div>}
                        </div>
                    ))
                }
            </div>
            <Slider />
        </div>
    )
}

export default SalesTime;