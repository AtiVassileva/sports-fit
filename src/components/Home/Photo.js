const Photo = ({
    isWide,
    imageUrl
}) => {
    return (
        <div className={`gs-item ${isWide ? 'grid-wide' : ''} set-bg`}
            style={{ backgroundImage: `url(${imageUrl})` }}>
            <a href={`${imageUrl}`} className="thumb-icon image-popup">
                <i className="fa fa-picture-o"></i>
            </a>
        </div>
    );
}

export default Photo;