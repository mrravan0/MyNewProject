import './_input.scss';
const Input = ({ text, condition }) => {
    return (
        condition !== 'textarea' ?
            <input className='input' type={condition} placeholder={text} />
            : <textarea className='textArea' placeholder={text} ></textarea>
    )
}

export default Input