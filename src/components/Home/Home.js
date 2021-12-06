import Benefits from './Benefits/Benefits';
import Banner from './Banner';
import Diets from './LatestDiets/Diets';
import Gallery from './Gallery/Gallery';
import Exercises from './LatestExercises/Exercises';
import Contact from './Contacts/Contact';

const HomePage = () => {
    return (
        <div>
            <Benefits />
            <Exercises />
            <Banner />
            <Diets />
            <Gallery />
            <Contact/>
        </div>
    );
}

export default HomePage;