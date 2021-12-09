import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import About from './components/Common/About/About';
import Preloader from './components/Common/Preloader';
import MenuOverlay from './components/Common/MenuOverlay';
import MenuWrapper from './components/Common/MenuWrapper';
import Home from './components/Home/Home';
import Blog from './components/Catalogs/Blog/Blog';
import CreateArticle from './components/Forms/Blog/CreateArticle'
import { Route, Switch } from 'react-router-dom';
import Register from './components/Forms/Authentication/Register/Register';
import Login from './components/Forms/Authentication/Login/Login';
import Diets from './components/Catalogs/Diets/Diets';
import CreateDiet from './components/Forms/Diets/CreateDiet';
import CreateExercise from './components/Forms/Exercises/CreateExercise';
import Exercises from './components/Catalogs/Exercises/Exercises';
import ArticleDetails from './components/Details/Blog/ArticleDetails';
import DietDetails from './components/Details/Diets/DietDetails';
import ExerciseDetails from './components/Details/Exercises/ExerciseDetails';
import EditDiet from './components/Forms/Diets/EditDiet';
import EditExercise from './components/Forms/Exercises/EditExercise';
import EditArticle from './components/Forms/Blog/EditArticle';

function App() {
  return (
    <div>
      <Preloader/>
      <MenuOverlay />
      <MenuWrapper />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/create-article" component={CreateArticle} />
        <Route path="/create-diet" component={CreateDiet}/>
        <Route path="/create-exercise" component={CreateExercise}/>
        <Route path="/diets" exact component={Diets} />
        <Route path="/exercises" exact component={Exercises} />
        <Route path="/blog/details/:id" component={ArticleDetails} />
        <Route path="/diets/details/:id" component={DietDetails} />
        <Route path="/exercises/details/:id" component={ExerciseDetails} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/diets/edit/:id" component={EditDiet}/>
        <Route path="/exercises/edit/:id" component={EditExercise}/>
        <Route path="/blog/edit/:id" component={EditArticle}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;