import * as blogService from '../../../services/blogService';
import * as dietService from '../../../services/dietService';
import * as exerciseService from '../../../services/exerciseService';

const Comment = ({
    id,
    parentId,
    path,
    author,
    content
}) => {

    const currentUser = localStorage.getItem('email');

    const pathTables = {
        '/exercises': 'exercises',
        '/diets': 'diets',
        '/blog': 'articles',
    };

    const onDeleteHandler = () => {
        let table = pathTables[path];
        // eslint-disable-next-line default-case
        switch (table) {
            case 'diets':
                dietService.deleteComment(parentId, id);
                break;
            case 'exercises':
                exerciseService.deleteComment(parentId, id);
                break;
            case 'articles':
                blogService.deleteComment(parentId, id);
                break;
        }
    }

    return (
        <div className="co-item">
            <div className="co-pic">
                <h5 style={{ color: "#F36100" }}>
                    {author} &nbsp;
                    {currentUser === author ?
                        <button
                            className="btn-outline-danger"
                            onClick={onDeleteHandler}>
                            <i className="fas fa-trash-alt"></i>
                        </button>
                        : <></>
                    }
                </h5>

            </div>
            <div className="co-text">
                <p>{content}</p>
            </div>
        </div>
    );
}

export default Comment;