import Main from '../Main';
import Title from '../Title';

const CreateDiet = () => {
    return (
        <div>
            <Title formType="New Diet"/> 
            <Main action="create-diet"/>
        </div>
    );
}

export default CreateDiet;