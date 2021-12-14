import Title from '../Title';
import CreateExerciseForm from './CreateExerciseForm';
import { isAuthenticated } from '../../../hoc/isAuthenticated';

const CreateExercise = () => {
    return (
        <div>
            <Title formType="New Exercise"/> 
            <CreateExerciseForm/>
        </div>
    );
}

export default isAuthenticated(CreateExercise);