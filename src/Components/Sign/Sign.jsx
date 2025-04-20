import { Fragment, memo } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import phono1 from '../../Assets/Images/bgPhone.png';
import './_sign.scss';
const Sign = memo(({ card, status = true }) => {
    return (
        <section className="signUp">
            <div className="signUp__wrapper">
                <img className="signUp__image" src={phono1} alt="" />
                <div className="signUp__inner">
                    {card}
                    {status ?
                        <Fragment>
                            <div className="signUp__buttons">
                                <Button text={'Create Account'} />
                                <Button status={false} text={'Sign up with Google'} />
                            </div>
                            <p className="signUp__login">
                                Already have account?
                                <Link className="signUp__login-subtitle" to={'/login'}>Log in</Link>
                            </p>
                        </Fragment> :
                        <div className="signUp__login-secondary">
                            <Button text={'Log In'} />
                            <p className="signUp__login-forget">Forget Password ?</p>
                        </div>
                    }
                </div>
            </div>
        </section>
    )
})
export default Sign;