import React, {Component} from 'react';
import './App.css';
import Landing from './components/Landing'
import Login from './components/Login'
import './Login.css';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    const App = () => (
        <div>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/login" component={Login} />
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
