import { useAuth } from '../../../hooks/useAuth';
import * as dietService from '../../../services/dietService';
import * as exerciseService from '../../../services/exerciseService';
import * as blogService from '../../../services/blogService';

const CommentForm = ({
    path,
    id
}) => {
    const currentUser = useAuth();

    const pathTables = {
        '/exercises': 'exercises',
        '/diets': 'diets',
        '/blog': 'articles',
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const table = pathTables[path];
        let author = currentUser.email;

        let formData = new FormData(e.currentTarget);
        let { content } = Object.fromEntries(formData);

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
                    placeholder="Add a comment..."></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default CommentForm;