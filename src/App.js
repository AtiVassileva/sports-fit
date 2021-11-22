import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import CreateArticle from './components/Forms/CreateArticle'
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/create-article" component={CreateArticle} />
      </Switch>
    </div>
  );
}

export default App;