import { Fragment, memo } from "react";
import Categories from "../../Components/Categories/Categories";
import Hero from "../../Components/Hero/Hero";
import Featured from "../../Components/Featured/Featured";
import Sales from "../../Components/Sales/Sales";
import Selling from "../../Components/Selling/Selling";
import OurProducts from "../../Components/OurProducts/OurProducts";

const Home = memo(() => {
    return (
        <Fragment>
            <Hero />
            <main>
                <Sales />
                <Selling />
                <Categories />
                <OurProducts />
                <Featured />
            </main>
        </Fragment>
    )
})
export default Home;