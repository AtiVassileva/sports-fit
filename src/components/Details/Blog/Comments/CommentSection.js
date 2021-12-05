import CommentForm from "./CommentForm";
import Comment from './Comment';

const CommentSection = () => {
    return (
        <div>
            <div className="comment-option">
                <h2 className="co-title" style={{color:"white"}}>Comments</h2>
                <br/>
                <Comment />
                <Comment />
            </div>
            <CommentForm />
        </div>

    );
}

export default CommentSection;