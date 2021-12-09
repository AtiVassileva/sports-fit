import {Link} from 'react-router-dom';
import CommentSection from "./Comments/CommentSection";

const Content = ({
    content,
    path,
    id
}) => {
    return (
        <section className="blog-details-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 p-0 m-auto">
                        <div className="blog-details-text">
                            <div className="blog-details-title">
                                <p>{content}</p>
                                <Link to={path + '/edit/' + id} 
                                class="btn btn-outline-warning">Edit
                                </Link>
                                <Link to={path + '/delete/' + id} class="btn btn-outline-danger">Delete
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <CommentSection />
                </div>
            </div>
        </section>
    );
}

export default Content;