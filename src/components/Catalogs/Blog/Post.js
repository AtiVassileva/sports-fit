import { Link } from 'react-router-dom';

const Post = ({
    article
}) => {
    return (
        <div className="blog-item">
            <div className="bi-pic">
                <img src={article.imageUrl} alt="" />
            </div>
            <div className="bi-text">
                <h5>
                    <Link to={`/blog/details/${article.id}`}>
                        {article.title}</Link>
                </h5>
                <ul>
                    <li>{article.author}</li>
                    <li>{article.date}</li>
                </ul>
                <p>{article.content.substring(0, 500) + '... '}
                    <Link to={`/blog/details/${article.id}`}>Read more...
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Post;