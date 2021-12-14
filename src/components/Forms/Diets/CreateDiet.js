import Title from '../Title';
import CreateDietForm from './CreateDietForm';
import { isAuthenticated } from '../../../hoc/isAuthenticated';

const CreateDiet = () => {
    return (
        <div>
            <Title formType="New Diet"/> 
            <CreateDietForm/>
        </div>
    );
}

export default isAuthenticated(CreateDiet);