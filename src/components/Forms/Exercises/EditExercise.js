import Title from '../Title';
import EditExerciseForm from './EditExerciseForm';

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

export default EditExercise;