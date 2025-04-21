import './_customersCard.scss';
const CustomersCard = ({ textList, image, svgList }) => {
    return (
        <div className="customers__card">
            <div className="customers__card-top">
                <img className='customers__image' src={image} alt="" />
            </div>
            <div className="customers__content">
                <div className="customers__texts">
                    <p className="customers__title">{textList[0]}</p>
                    <p className="customers__subtitle">{textList[1]}</p>
                </div>
                <div className="customers__soc1als">
                    {
                        svgList.map((item, index) => (
                            <div className='customers__soc1als-content' key={index}>{item}</div>)
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default CustomersCard