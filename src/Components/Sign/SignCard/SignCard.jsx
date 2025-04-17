import './_signCard.scss';
const SignCard = ({ texts, textList }) => {
    return (
        <div className='signUp__content'>
            <div className="signUp__text">
                <h1 className="signUp__title">{texts[0]}</h1>
                <p className="signUp__description">{texts[1]}</p>
            </div>
            <div className="signUp__sign">
                {
                    textList.map((item, index) => (
                        <input className='signUp__input' key={index + 'sign'} type={item.info} placeholder={item.name} />
                    ))
                }
            </div>
        </div>
    )
}
export default SignCard;