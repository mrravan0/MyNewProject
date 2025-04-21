import { Link } from 'react-router-dom';
import './_button.scss';
import photo1 from '../../Assets/Images/google.svg';
const Button = ({ text, status = true }) => {
    return (
        status ? <Link className='mainButton button'>{text}</Link>
            : <Link className='secondaryButton button'>
                <img src={photo1} alt="" />
                {text}
            </Link>
    )
}
export default Button; 