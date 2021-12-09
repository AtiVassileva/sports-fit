import Title from '../Title';
import EditArticleForm from './EditArticleForm';

const EditArticle = ({
    match
}) => {
    return (
        <div>
            <Title formType="Edit Article"/> 
            <EditArticleForm id={match.params.id}/>
        </div>
    );
}

export default EditArticle;