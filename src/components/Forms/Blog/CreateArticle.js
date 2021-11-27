import Title from '../Title';
import CreateArticleForm from './CreateArticleForm';
import * as blogService from '../../../services/blogService';

const CreateArticle = () => {
    return (
        <div>
            <Title formType="New Article"/> 
            <CreateArticleForm categories={blogService.getCategories}/>
        </div>
    );
}

export default CreateArticle;