import { Link } from 'react-router-dom';

const Photo = ({
    isWide,
    imageUrl
}) => {
    return (
        <div className={`gs-item ${isWide ? 'grid-wide' : ''} set-bg`}
            style={{ backgroundImage: `url(${imageUrl})` }}>
            <Link to={`${imageUrl}`} className="thumb-icon image-popup">
                <i className="fa fa-picture-o"></i>
            </Link>
        </div>
    );
}

export default Photo;