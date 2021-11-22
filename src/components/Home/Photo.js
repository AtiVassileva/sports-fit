const Photo = ({
    isWide, 
    imageUrl
}) => {
    const getClassesNames = () => {
        let wideClass = isWide ? 'grid-wide' : '';
        return `gs-item ${wideClass} set-bg`;
    }

    const getImageUrl = () => `url(${imageUrl})`;

    return (
        <div className={getClassesNames}
            style={{ backgroundImage: { getImageUrl } }}>
            <a href={getImageUrl} className="thumb-icon image-popup">
                <i className="fa fa-picture-o"></i>
            </a>
        </div>
    );
}

export default Photo;