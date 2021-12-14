import Title from '../Title';
import CreateArticleForm from './CreateArticleForm';
import { isAuthenticated } from '../../../hoc/isAuthenticated';

const CreateArticle = () => {
    return (
        <div>
            <Title formType="New Article" />
            <CreateArticleForm />
        </div>
    );
}

export default isAuthenticated(CreateArticle);