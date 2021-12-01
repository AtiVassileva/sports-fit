import Title from '../Title';
import CreateArticleForm from './CreateArticleForm';

const CreateArticle = () => {
    return (
        <div>
            <Title formType="New Article"/> 
            <CreateArticleForm/>
        </div>
    );
}

export default CreateArticle;