import './_pageInfo.scss';
const PageInfo = ({ textList }) => {
    return (
        <div className="pageInfo">
            {
                textList?.map((item, index, arr) => (
                    index !== arr.length - 1 ?
                        <p key={index + 'product'} className='pageInfo__description'>
                            {item}
                            <span className='pageInfo__description-dash'>/</span>
                        </p>
                        :
                        <p key={index + 'product'} className='pageInfo__description'>{item}</p>
                ))
            }
        </div>
    )
}

export default PageInfo;