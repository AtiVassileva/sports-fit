import { Link } from 'react-router-dom';

const Post = ({
    imageUrl,
    title,
    author = "me",
    content
}) => {
    return (
        <div className="blog-item">
            <div className="bi-pic">
                <img src={imageUrl} alt="" />
            </div>
            <div className="bi-text">
                <h5><Link to="/">{title}</Link></h5>
                <ul>
                    <li>{author}</li>
                    <li>02.03.2020</li>
                </ul>
                <p>{content}</p>
            </div>
        </div>
    );
}

export default Post;