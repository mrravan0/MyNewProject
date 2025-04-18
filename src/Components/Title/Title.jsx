import './_title.scss';
const Title = ({ textList, subject }) => {
    return (
        <div className="title">
            <div className="title__wrapper">
                <div className="title__content">
                    <div className="title__right"></div>
                    <p className="title__title">{textList[0]}</p>
                </div>
                <div className="title__description">{textList[1]}</div>
            </div>
            {subject}
        </div>
    )
}
export default Title;