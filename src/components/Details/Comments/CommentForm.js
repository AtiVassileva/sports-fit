const CommentForm = () => {
    return (
        <div>
            <div className="leave-comment">
                <br/>
                <h5>Leave a comment</h5>
                <form action="/blog/details/:id">
                    <textarea placeholder="Add a comment..."></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default CommentForm;