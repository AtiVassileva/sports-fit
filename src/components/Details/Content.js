import { Link, useHistory } from 'react-router-dom';
import CommentSection from "./Comments/CommentSection";
import * as dietService from '../../services/dietService';
import * as exerciseService from '../../services/exerciseService';
import * as blogService from '../../services/blogService';

const Content = ({
    content,
    path,
    id
}) => {

    const history = useHistory();

    const pathTables = {
        '/exercises': 'exercises',
        '/diets': 'diets',
        '/blog': 'articles',
    }

    const onDeleteHandler = () => {
        const table = pathTables[path];

        // eslint-disable-next-line default-case
        switch (table) {
            case 'diets':
                dietService.deleteDiet(id);
                break;
            case 'exercises':
                exerciseService.deleteExercise(id);
                break;
            case 'articles':
                blogService.deleteArticle(id);
                break;
        }

        history.push(path);
    }
    return (
        <section className="blog-details-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 p-0 m-auto">
                        <div className="blog-details-text">
                            <div className="blog-details-title">
                                <p>{content}</p>
                                <Link to={path + '/edit/' + id}
                                    className="btn btn-outline-warning">Edit
                                </Link>
                                <button className="btn btn-outline-danger"
                                    onClick={onDeleteHandler}>
                                    Delete
                                </button>
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