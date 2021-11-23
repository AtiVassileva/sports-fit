import MenuOverlay from '../Common/MenuOverlay';
import MenuWrapper from '../Common/MenuWrapper';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import Title from './Title';
import Main from './Main';

const BlogPage = () => {
    return (
        <div>
            <MenuOverlay />
            <MenuWrapper/>
            <Header />
            <Title />
            <Main />
            <Footer />
        </div>
    );
}

export default BlogPage;