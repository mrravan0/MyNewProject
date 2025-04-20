import './_categoriesCard.scss';
const CategoriesCard = ({ time, description }) => {
    return (
        <div className="categories__card">
            <p className="categories__card-title">{time}</p>
            <p className="categories__card-description">{description}</p>
        </div>
    )
}
export default CategoriesCard;