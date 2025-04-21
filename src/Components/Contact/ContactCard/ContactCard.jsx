import { Fragment } from "react";
import './_contactCard.scss';
const ContactCard = ({ svg, textList }) => {
    return (
        <Fragment>
            <div className="contact__card">
                <div className="contact__content">
                    <div className="contact__content-group">
                        {svg}
                    </div>
                    <p className="contact__title">Call To Us</p>
                </div>
                <div className="contact__texts">
                    {
                        textList?.map((item, index) => (
                            <p key={index} className="contact__description">{item}</p>
                        ))
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default ContactCard;