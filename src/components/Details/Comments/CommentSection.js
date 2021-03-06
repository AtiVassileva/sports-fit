import { useState, useEffect } from 'react';
import { useAuth } from '../../../hooks/useAuth';

import CommentForm from "./CommentForm";
import Comment from './Comment';

import * as dietService from '../../../services/dietService';
import * as exerciseService from '../../../services/exerciseService';
import * as blogService from '../../../services/blogService';


const CommentSection = ({
    path,
    id
}) => {
    const currentUser = useAuth();
    const [comments, setComments] = useState([]);

    const pathTables = {
        '/exercises': 'exercises',
        '/diets': 'diets',
        '/blog': 'articles',
    };

    useEffect(() => {

        const table = pathTables[path];
        // eslint-disable-next-line default-case
        switch (table) {
            case 'diets':
                dietService.extractComments(id)
                    .then(comments => setComments(comments));
                break;
            case 'exercises':
                exerciseService.extractComments(id)
                    .then(comments => setComments(comments));
                break;
            case 'articles':
                blogService.extractComments(id)
                    .then(comments => setComments(comments));
                break;
        }

    }, [id, path, pathTables]);

    return (
        <div>
            <div className="comment-option">
                <h3 className="co-title"
                    style={{ color: "white" }}>
                    {comments.length > 0
                        ? `Comments (${comments.length})`
                        : 'No comments yet.'
                    }
                </h3>
                <br />
                {
                    comments.map(x =>
                        <Comment
                            key={x.id}
                            id={x.id}
                            parentId={id}
                            path={path}
                            author={x.author}
                            content={x.content}
                        />
                    )
                }
            </div>
            {currentUser ?
                <CommentForm
                    path={path}
                    id={id}
                />
                : <></>
            }
        </div>
    );
}

export default CommentSection;