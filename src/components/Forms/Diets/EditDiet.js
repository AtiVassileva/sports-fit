import Title from '../Title';
import EditDietForm from './EditDietForm';

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

export default EditDiet;