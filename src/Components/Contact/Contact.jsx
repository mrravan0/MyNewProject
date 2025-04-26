import './_contact.scss';
import PageInfo from '../PageInfo/PageInfo'
import Input from '../Input/Input';
import Button from '../Button/Button';
import ContactCard from './ContactCard/ContactCard';
import PhoneIcon from '../../Assets/Svg/PhoneIcon';
import EmailIcon from '../../Assets/Svg/EmailIcon';
const Contact = () => {
    return (
        <section className="contact">
            <div className="contact__inner container">
                <div className="contact__wrapper">
                    <PageInfo textList={['Home', 'Contact']} />
                    <div className="contact__group">
                        <div className="contact__left">
                            <ContactCard
                                svg={<PhoneIcon />}
                                textList={
                                    ['We are available 24/7, 7 days a week.',
                                        'Phone: +8801611112222'
                                    ]
                                }
                            />
                            <ContactCard
                                svg={<EmailIcon />}
                                textList={
                                    ['Fill out our form and we will contact you within 24 hours.',
                                        'Emails: customer@exclusive.com',
                                        'Emails: support@exclusive.com'
                                    ]
                                }
                            />
                        </div>
                        <div className="contact__right">
                            <div className="contact__right-content">
                                <Input
                                    text={'Your Name *'}
                                    condition={'text'} />
                                <Input
                                    text={'Your Email *'}
                                    condition={'email'} />
                                <Input
                                    text={'Your Phone *'}
                                    condition={'tel'} />
                            </div>
                            <Input text={'Your Massage'} condition={'textarea'} />
                            <Button text={'Send Massage'} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact;