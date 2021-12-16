import { useState } from 'react';
import { Alert } from 'react-bootstrap';

import { useAuth } from '../../../hooks/useAuth';
import * as validator from '../../../utils/validator';

import * as dietService from '../../../services/dietService';
import * as exerciseService from '../../../services/exerciseService';
import * as blogService from '../../../services/blogService';

const CommentForm = ({
    path,
    id
}) => {
    const [errors, setErrors] = useState({});

    const currentUser = useAuth();

    const pathTables = {
        '/exercises': 'exercises',
        '/diets': 'diets',
        '/blog': 'articles',
    }

    const onContentChangeHandler = (e) => {
        let error = validator.validateCommentContent(e.target.value);

        error !== null ?
            setErrors(state => ({ ...state, content: error }))
            : setErrors(state => ({ ...state, content: false }));
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { content } = Object.fromEntries(formData);

        if (!content) {
            return;
        }

        const table = pathTables[path];
        let author = currentUser.email;

        // eslint-disable-next-line default-case
        switch (table) {
            case 'diets':
                dietService.addCommentToDiet(id, author, content);
                break;
            case 'exercises':
                exerciseService.addCommentToExercise(id, author, content);
                break;
            case 'articles':
                blogService.addCommentToArticle(id, author, content);
                break;
        }

        e.currentTarget['content'].value = '';
    }

    return (
        <div>
            <div className="leave-comment">
                <br />
                <h5>Leave a comment</h5>
                <form onSubmit={onSubmitHandler}>
                    <textarea
                        name="content"
                        placeholder="Add a comment..."
                        onChange={onContentChangeHandler}
                    >
                    </textarea>
                    <Alert variant="danger"
                        show={Boolean(errors.content)}>
                        {errors.content}
                    </Alert>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default CommentForm;