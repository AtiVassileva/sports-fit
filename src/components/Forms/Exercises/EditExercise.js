import Title from '../Title';
import EditExerciseForm from './EditExerciseForm';
import { isAuthenticated } from '../../../hoc/isAuthenticated';

const EditExercise = ({
    match
}) => {
    return (
        <div>
            <Title formType="Edit Exercise"/> 
            <EditExerciseForm id={match.params.id}/>
        </div>
    );
}

export default isAuthenticated(EditExercise);