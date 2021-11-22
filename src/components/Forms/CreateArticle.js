import Header from '../Common/Header';
import Footer from '../Common/Footer';
import Main from './Main';
import Title from './Title';

const CreateArticle = () => {
    return (
        <div>
            <Header/>
            <Title formType="Article"/> 
            <Main/>
            <Footer/>
        </div>
    );
}

export default CreateArticle;