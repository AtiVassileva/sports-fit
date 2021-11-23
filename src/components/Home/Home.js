import MenuOverlay from '../Common/MenuOverlay';
import MenuWrapper from '../Common/MenuWrapper';
import Header from '../Common/Header';
import Carousel from './Carousel';
import Benefits from './Benefits';
import Banner from './Banner';
import Pricing from './Pricing';
import Gallery from './Gallery';
import Exercises from './Exercises';
import Contact from './Contact';
import Footer from '../Common/Footer';

const HomePage = () => {
    return (
        <div>
            <Carousel />
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