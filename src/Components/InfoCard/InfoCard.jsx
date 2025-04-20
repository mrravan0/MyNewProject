import './_infoCard.scss';
const InfoCard = ({ textList, svg }) => {
    return (
        <div className="infoCard">
            <div className="infoCard__wrapper">
                <div className="infoCard__content">
                    <div className="infoCard__inner">
                        {svg}
                    </div>
                </div>
                <div className="infoCard__texts">
                    <p className="infoCard__title">{textList[0]}</p>
                    <p className="infoCard__subtitle">{textList[1]}</p>
                </div>
            </div>
        </div>
    )
}

export default InfoCard