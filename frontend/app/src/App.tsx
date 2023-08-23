import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { homePage } from './pages/HomePage';
import { postDtail } from './pages/PostDetailPage';
import { editPostPage } from './pages/EditPostPage';
import AccountSettings from './pages/AccountSettings';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/posts" component={homePage} />
          <Route exact path="/post/:id" component={postDtail} />
          <Route exact path="/post/:id/edit" component={editPostPage} />
          <Route exact path="/" component={AccountSettings} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
