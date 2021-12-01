import { Link } from 'react-router-dom';

const Pagination = ({
    appSection
}) => {
    return (
        <div className="blog-pagination">
            <Link to={`${appSection}/1`}>1</Link>
            <Link to={`${appSection}/2`}>2</Link>
            <Link to={`${appSection}/3`}>3</Link>
            <Link to={`${appSection}/next`}>Next</Link>
        </div>
    );
}

export default Pagination;