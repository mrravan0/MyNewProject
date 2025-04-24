import './_headerSelected.scss';
const HeaderSelected = ({ features }) => {
    return (
        <div className="header__selected-content">
            {features.svg}
            <p className="header__selected-title">
                {features.text}
            </p>
        </div>
    )
}

export default HeaderSelected;