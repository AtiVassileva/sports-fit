import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Link, useHistory } from 'react-router-dom';

import ConfirmDialog from '../Common/ConfirmDialog/';
import CommentSection from "./Comments/CommentSection";

import * as dietService from '../../services/dietService';
import * as exerciseService from '../../services/exerciseService';
import * as blogService from '../../services/blogService';

import { useNotificationContext, types } from '../../contexts/NotificationContext';
import { deletedArticleMessage, deletedDietMessage, deletedExerciseMessage, invalidRequestMessage } from '../../utils/notificationConstants';

const Content = ({
    author,
    content,
    path,
    id
}) => {
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    const { addNotification } = useNotificationContext();

    const currentUser = useAuth();
    const history = useHistory();

    const pathTables = {
        '/exercises': 'exercises',
        '/diets': 'diets',
        '/blog': 'articles',
    }

    const onDeleteClickHandler = (e) => {
        e.preventDefault();
        setShowDeleteDialog(true);
    }

    const onDeleteHandler = () => {
        const table = pathTables[path];

        // eslint-disable-next-line default-case
        switch (table) {
            case 'diets':
                dietService.deleteDiet(id)
                    .then(res => {
                        addNotification(deletedDietMessage, types.primary);
                        history.push(path);
                    })
                    .catch(error => addNotification(invalidRequestMessage));
                break;
            case 'exercises':
                exerciseService.deleteExercise(id)
                    .then(res => {
                        addNotification(deletedExerciseMessage, types.primary);
                        history.push(path);
                    })
                    .catch(error => addNotification(invalidRequestMessage));
                break;
            case 'articles':
                blogService.deleteArticle(id)
                    .then(res => {
                        history.push(path);
                        addNotification(deletedArticleMessage, types.primary);
                    })
                    .catch(error => addNotification(invalidRequestMessage));
                break;
        }
    }
    return (
        <>
            <ConfirmDialog
                title={"Delete item"}
                text={"Are you sure you want to permenently delete this item?"}
                show={showDeleteDialog}
                onClose={() => setShowDeleteDialog(false)}
                onSave={onDeleteHandler}
                saveButtonClass={"danger"}
                saveButtonText={"Delete"}
            />
            <section className="blog-details-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 p-0 m-auto">
                            <div className="blog-details-text">
                                <div className="blog-details-title">
                                    <p>{content}</p>
                                    {
                                        currentUser?.email === author ?
                                            <>
                                                <Link to={path + '/edit/' + id}
                                                    className="btn btn-outline-warning">Edit
                                                </Link>
                                                <button className="btn btn-outline-danger"
                                                    onClick={onDeleteClickHandler}>
                                                    Delete
                                                </button>
                                            </>
                                            : <></>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <CommentSection
                            path={path}
                            id={id}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Content;