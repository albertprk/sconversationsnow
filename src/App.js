import React, {Component} from 'react';
import './App.css';
import Landing from './components/Landing'
import Login from './components/Login'
import { Route, Switch } from 'react-router-dom';
import Choice from "./components/Choice";
import Signup from "./components/Signup";
import logInWithEmail from './components/LoginWithEmail';

class App extends Component {
  render() {
    const App = () => (
        <div>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/choice" component={Choice} />
            <Route path="/signup" component={Signup} />
            <Route path="/loginWithEmail" component={logInWithEmail} />
          </Switch>
        </div>
    );
    return (
        <Switch>
          <App/>
        </Switch>
    );
  }
}

export default App;
