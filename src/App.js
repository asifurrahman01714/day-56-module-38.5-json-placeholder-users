import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import FriendDetail from './components/FriendDetail/FriendDetail';


function App() {
 
  return (
    <Router>
      <Switch>

        <Route path="/home">
          <Home/>
        </Route>

        <Route exact path="/">
            <Home />
        </Route>

        <Route path="/friend/:FriendId">
          <FriendDetail/>
        </Route>
        
        <Route path="*">
            <NoMatch />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
