const Post = ({
    imageUrl,
    title,
    author,
    date,
    content
}) => {
    return (
        <div class="blog-item">
            <div class="bi-pic">
                <img src={imageUrl} alt="" />
            </div>
            <div class="bi-text">
                <h5><a href="/">{title}</a></h5>
                <ul>
                    <li>{author}</li>
                    <li>{date}</li>
                </ul>
                <p>{content}</p>
            </div>
        </div>
    );
}

export default Post;