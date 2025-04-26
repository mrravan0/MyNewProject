import { Fragment } from "react";
import Story from "../../Components/Story/Story";
import Activities from "../../Components/Activities/Activities";
import Customers from "../../Components/Customers/Customers";
const About = () => {
    return (
        <Fragment>
            <Story />
            <Activities />
            <Customers />
        </Fragment>
    )
}
export default About;