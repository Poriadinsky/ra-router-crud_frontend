import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './react-component/MainPage/MainPage';
import AddPost from './react-component/AddPost/AddPost';
import PostView from './react-component/PostView/PostView';

function App() {
  return (
    <Router>
      <div className="page">
        <Switch>
          <Route path="/posts/new" component={AddPost} />
          <Route path="/posts/:id" component={PostView} />
          <Route path="/" component={MainPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
