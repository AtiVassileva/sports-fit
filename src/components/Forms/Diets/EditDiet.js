import Title from '../Title';
import EditDietForm from './EditDietForm';
import { isAuthenticated } from '../../../hoc/isAuthenticated';

const EditDiet = ({
    match
}) => {
    return (
        <div>
            <Title formType="Edit Diet"/> 
            <EditDietForm id={match.params.id}/>
        </div>
    );
}

export default isAuthenticated(EditDiet);