const Photo = ({
    isWide,
    imageUrl
}) => {
    return (
        <div className={`gs-item ${isWide ? 'grid-wide' : ''} set-bg`}
            style={{ backgroundImage: `url(${imageUrl})` }}>
        </div>
    );
}

export default Photo;