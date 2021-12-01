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
                <h5><Link to="/">{article.title}</Link></h5>
                <ul>
                    <li>Author Name</li>
                    <li>02.03.2020</li>
                </ul>
                <p>{article.content}</p>
            </div>
        </div>
    );
}

export default Post;