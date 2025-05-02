import Slider from '../Slider/Slider';
import Title from '../Title/Title';
import ProductCard from '../ProductCard/ProductCard';
import photo1 from '../../Assets/Images/OurProducts/photo1.png'
import photo2 from '../../Assets/Images/OurProducts/photo2.png'
import photo3 from '../../Assets/Images/OurProducts/photo3.png'
import photo4 from '../../Assets/Images/OurProducts/photo4.png'
import './OurProducts.scss';
const OurProducts = () => {
    const ourProductsData = [
        {
            image: photo1,
            title: 'Breed Dry Dog Food',
            price: 100,
            isWishList: true
        },
        {
            image: photo2,
            title: 'CANON EOS DSLR Camera',
            price: 360,
            isWishList: true
        },
        {
            image: photo3,
            title: 'ASUS FHD Gaming Laptop',
            price: 220,
            isWishList: true
        },
        {
            image: photo4,
            title: 'Curology Product Set ',
            price: 500,
            isWishList: true
        },
        {
            image: photo1,
            title: 'Breed Dry Dog Food',
            price: 100,
            isWishList: true
        },
        {
            image: photo2,
            title: 'CANON EOS DSLR Camera',
            price: 360,
            isWishList: true
        },
        {
            image: photo3,
            title: 'ASUS FHD Gaming Laptop',
            price: 220,
            isWishList: true
        },
        {
            image: photo4,
            title: 'Curology Product Set ',
            price: 500,
            isWishList: true
        },
    ]
    return (
        <section className='ourProducts'>
            <div className="ourProducts__inner container">
                <div className="ourProducts__wrapper">
                    <Title textList={['Our Products', 'Explore Our Products']} subject={<Slider />} />
                    <div className="ourProducts__group">
                        {
                            ourProductsData?.map((item, index) => (
                                <ProductCard features={item} key={index} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurProducts;