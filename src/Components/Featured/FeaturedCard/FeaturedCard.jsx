import './_featuredCard.scss';
const FeaturedCard = ({ textList }) => {
    return (
        <div className="featured__card">
            {
                textList.map((item, index) => (
                    <p key={index + 'card'} className="featured__title ">{item}</p>
                ))
            }
        </div >
    )
}
export default FeaturedCard;