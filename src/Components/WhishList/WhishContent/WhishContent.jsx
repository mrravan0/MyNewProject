import Button from '../../Button/Button';
import Title from '../../Title/Title';
import ProductCard from '../../ProductCard/ProductCard';
import './WhishContent.scss';
const WhishContent = ({ info, features }) => {
    return (
        <div className="whishList__content">
            <Title
                isActive={info.isActive}
                subject={<Button text={info.title} />}
                textList={[info.text]} />
            <div className="whishList__group">
                {
                    features?.map((item, index) => (
                        <ProductCard key={index} features={item} rating={info.rating} />
                    ))
                }
            </div>
        </div>
    )
}

export default WhishContent;