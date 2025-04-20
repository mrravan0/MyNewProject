import { Link } from 'react-router-dom';
import './_button.scss';
import photo1 from '../../Assets/Images/google.svg';
const Button = ({ text, status = true }) => {
    return (
        status ? <Link className='mainButton'>{text}</Link>
            : <Link className='secondaryButton'>
                <img src={photo1} alt="" />
                {text}
            </Link>
    )
}
export default Button; 