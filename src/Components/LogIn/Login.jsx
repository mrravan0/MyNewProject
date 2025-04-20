import SignCard from '../Sign/SignCard/SignCard';
import Sign from '../Sign/Sign';
const Login = () => {
    return (
        <Sign
            status={false}
            card={
                <SignCard
                    texts={['Log in to Exclusive', 'Enter your details below']}
                    textList={
                        [
                            { name: 'Email or Phone Number', info: 'email' },
                            { name: 'Password', info: 'password' }
                        ]} />} />
    )
}
export default Login;