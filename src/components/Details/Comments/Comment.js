const Comment = ({
    author,
    content
}) => {
    return (
        <div className="co-item">
            <div className="co-pic">
                <h5 style={{ color: "#F36100" }}>{author}</h5>
                
            </div>
            <div className="co-text">
                <p>{content}</p>
            </div>
        </div>
    );
}

export default Comment;