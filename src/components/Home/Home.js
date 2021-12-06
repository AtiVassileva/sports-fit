import Benefits from './Benefits/Benefits';
import Banner from './Banner';
import Pricing from './Pricing';
import Gallery from './Gallery/Gallery';
import Exercises from './LatestExercises/Exercises';
import Contact from './Contacts/Contact';

const HomePage = () => {
    return (
        <div>
            <Benefits />
            <Exercises />
            <Banner />
            <Pricing />
            <Gallery />
            <Contact/>
        </div>
    );
}

export default HomePage;