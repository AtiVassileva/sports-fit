import Header from './Header'
import HamburgerBar from './HamburgerBar';
import Menu from './Menu';
import Home from './Home';
import Boxes from './Boxes';
import About from './About';
import Exercises from './Exercises';
import RecentArticles from './RecentArticles';
import Footer from './Footer';

const HomePage = () => {
    return (
        <div>
            <Header />
            <Menu />
            <Home />
            <Boxes />
            <About />
            <Exercises />
            <RecentArticles />
            <Footer />
        </div>
    );
}

export default HomePage;