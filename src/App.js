import HomePage from './components/Home/HomePage';
import BlogPage from './components/Blog/BlogPage';
import CreateArticle from './components/Forms/CreateArticle'
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/create-article" component={CreateArticle} />
      </Switch>
    </div>
  );
}

export default App;