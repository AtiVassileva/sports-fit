import Title from '../Title';
import EditArticleForm from './EditArticleForm';
import { isAuthenticated } from '../../../hoc/isAuthenticated';

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

export default isAuthenticated(EditArticle);