import Title from '../Title';
import CreateDietForm from './CreateDietForm';

const CreateDiet = () => {
    return (
        <div>
            <Title formType="New Diet"/> 
            <CreateDietForm/>
        </div>
    );
}

export default CreateDiet;