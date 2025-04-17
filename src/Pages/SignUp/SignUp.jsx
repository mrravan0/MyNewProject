import Sign from "../../Components/Sign/Sign";
import SignCard from "../../Components/Sign/SignCard/SignCard";
const SignUp = () => {
    return <Sign
        card={
            <SignCard
                texts={['Create an account', 'Enter your details below']}
                textList={
                    [
                        { name: 'Name', info: 'text' },
                        { name: 'Email or Phone Number', info: 'email' },
                        { name: 'Password', info: 'password' }
                    ]} />} />
}
export default SignUp;