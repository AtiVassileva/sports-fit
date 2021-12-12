import Diets from './LatestDiets/Diets';
import Gallery from './Gallery/Gallery';
import Exercises from './LatestExercises/Exercises';
import Contact from './Contacts/Contact';

const HomePage = () => {
    return (
        <div>
            <Exercises />
            <Diets />
            <Gallery />
            <Contact/>
        </div>
    );
}

export default HomePage;