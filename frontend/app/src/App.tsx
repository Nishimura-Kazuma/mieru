import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostDtail from './pages/PostDetailPage';
import EditPostPage from './pages/EditPostPage';
import AccountSettings from './pages/AccountSettings';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/posts" component={HomePage} />
          <Route exact path="/post/:id" component={PostDtail} />
          <Route exact path="/post/:id/edit" component={EditPostPage} />
          <Route exact path="/" component={AccountSettings} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
