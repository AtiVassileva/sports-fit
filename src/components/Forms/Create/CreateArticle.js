import Main from '../Main';
import Title from '../Title';

const CreateArticle = () => {
    return (
        <div>
            <Title formType="New Article"/> 
            <Main action="create-article"/>
        </div>
    );
}

export default CreateArticle;