import { Fragment } from "react";
import Categories from "../../Components/Categories/Categories";
import Hero from "../../Components/Hero/Hero";
import Featured from "../../Components/Featured/Featured";

const Home = () => {
    return (
        <Fragment>
            <Hero />
            <main>
                <Categories />
                <Featured />
            </main>
        </Fragment>
    )
}
export default Home;