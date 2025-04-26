import { Fragment } from "react";
import Categories from "../../Components/Categories/Categories";
import Hero from "../../Components/Hero/Hero";
import Featured from "../../Components/Featured/Featured";
import Sales from "../../Components/Sales/Sales";

const Home = () => {
    return (
        <Fragment>
            <Hero />
            <main>
                <Sales />
                <Categories />
                <Featured />
            </main>
        </Fragment>
    )
}
export default Home;