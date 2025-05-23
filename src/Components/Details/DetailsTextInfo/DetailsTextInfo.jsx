import Star from '../../../Assets/Svg/Star';
import DetailsBottom from '../DetailsBottom/DetailsBottom';
import './_detailsTextInfo.scss';
const DetailsTextInfo = (features) => {
    let { title, price } = features;
    return (
        <div className="details__right">
            <div className="details__top">
                <div className="details__top-wrapper">
                    <p className="details__top-title">{title}</p>
                    <div className="details__top-score">
                        <div className="details__stars">
                            <Star />
                            <Star />
                            <Star />
                            <Star color='rgb(191,191,191)' />
                        </div>
                        <p className="details__reviews">(150 Reviews)</p>
                        <p className="details__top-description">In Stock</p>
                    </div>
                    <p className="details__price">${price}</p>
                </div>
                <p className="details__description">{title}</p>
            </div>
            <DetailsBottom {...features} />
        </div>
    )
}
export default DetailsTextInfo