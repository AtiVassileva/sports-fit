import { useState, useEffect } from 'react';
import CommentForm from "./CommentForm";
import Comment from './Comment';
import * as dietService from '../../../services/dietService';
import * as exerciseService from '../../../services/exerciseService';
import * as blogService from '../../../services/blogService';

const CommentSection = ({
    path,
    id
}) => {

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
                //dietService.deleteDiet(id);
                break;
            case 'exercises':
                //exerciseService.deleteExercise(id);
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
                <h2 className="co-title" style={{ color: "white" }}>Comments</h2>
                <br />
                {
                    comments.map(x =>
                        <Comment
                            //key ={x.id}
                            author={x.author}
                            content={x.content}
                        />
                    )
                }
            </div>
            <CommentForm
                path={path}
                id={id}
            />
        </div>
    );
}

export default CommentSection;