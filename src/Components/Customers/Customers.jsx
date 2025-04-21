import CustomersCard from './CustomersCard/CustomersCard';
import Info from '../Info/Info';
import photo2 from '../../Assets/Images/About/photo2.png';
import photo3 from '../../Assets/Images/About/photo3.png';
import photo4 from '../../Assets/Images/About/photo4.png';
import FacebookIcon from '../../Assets/Svg/FacebookIcon';
import InstagramIcon from '../../Assets/Svg/InstagramIcon';
import LinkedinIcon from '../../Assets/Svg/LinkedinIcon';
import './_customers.scss';
const Customers = () => {
    return (
        <section className="customers">
            <div className="customers__inner container">
                <div className="customers__wrapper">
                    <div className="customers__group">
                        <CustomersCard
                            textList={['Tom Cruise', 'Founder & Chairman']}
                            image={photo2}
                            svgList={
                                [<FacebookIcon color={'black'} />,
                                <InstagramIcon color={'black'} />,
                                < LinkedinIcon color={'black'} />]
                            } />
                        <CustomersCard
                            textList={['Emma Watson', 'Managing Director']}
                            image={photo3}
                            svgList={
                                [<FacebookIcon color={'black'} />,
                                <InstagramIcon color={'black'} />,
                                < LinkedinIcon color={'black'} />]
                            } />
                        <CustomersCard
                            textList={['Will Smith', 'Product Designer']}
                            image={photo4}
                            svgList={
                                [<FacebookIcon color={'black'} />,
                                <InstagramIcon color={'black'} />,
                                < LinkedinIcon color={'black'} />]
                            } />
                    </div>
                    <Info />
                </div>
            </div>
        </section>
    )
}

export default Customers;