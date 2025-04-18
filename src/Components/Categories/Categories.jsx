import './_categories.scss';
import CategoriesCard from './CategoriesCard/CategoriesCard';
import Button from '../Button/Button';
import photo1 from '../../Assets/Images/Categories/photo1.png';
const Categories = () => {
    return (
        <section className="categories">
            <div className="categories__inner container">
                <div className="categories__wrapper">
                    <div className="categories__left">
                        <h1 className="categories__title">Categories</h1>
                        <h2 className="categories__subtitle">
                            Enhance Your <br /> Music Experience
                        </h2>
                        <div className="categories__cards">
                            <CategoriesCard time={'23'} description={'Hours'} />
                            <CategoriesCard time={'05'} description={'Days'} />
                            <CategoriesCard time={'59'} description={'Minutes'} />
                            <CategoriesCard time={'35'} description={'Seconds'} />
                        </div>
                        <Button text={'Buy Now!'} />
                    </div>
                    <img className="categories__image" src={photo1} alt="" />
                </div>
            </div>
        </section>
    )
}
export default Categories;