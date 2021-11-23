import { Link } from 'react-router-dom';

const Pagination = () => {
    return (
        <div class="blog-pagination">
            <Link to="/blog/1">1</Link>
            <Link to="/blog/2">2</Link>
            <Link to="/blog/3">3</Link>
            <Link to="/blog/next">Next</Link>
        </div>
    );
}

export default Pagination;