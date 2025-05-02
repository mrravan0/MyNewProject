import './_detailsImgInfo.scss';
const DetailsImgInfo = ({ image }) => {
    const imgList = [];
    for (let i = 0; i < 4; i++) {
        imgList.push(image)
    }
    return (
        <div className="details__left">
            <div className="details__left-side">
                {
                    imgList?.map((item, index) => (
                        index < 4 &&
                        <div key={index + 'details'} className="details__left-side--image">
                            <img src={item} alt="" />
                        </div>
                    ))
                }
            </div>
            <div className="details__left-main">
                <img src={imgList?.[imgList?.length - 1]} alt="" />
            </div>
        </div>
    )
}
export default DetailsImgInfo;