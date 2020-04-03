import React, {Component} from 'react';
import './App.css';
import Landing from './components/Landing'
import Login from './components/Login'
import { Route, Switch } from 'react-router-dom';
import Choice from "./components/Choice";
import Signup from "./components/Signup";
import LoginWithEmail from './components/LoginWithEmail';
import signUpWithEmail from './components/SignupWithEmail'

class App extends Component {
    state = {
        profiles: null,
        userInfo: null
    };

    componentDidMount() {
        this.callAPI();
        this.matchUserInfo();
    }

    callAPI() {
        fetch("/profiles")
            .then(res => res.json())
            .then(res => {
                this.setState({profiles: res});
            })
    }

    matchUserInfo() { //get the authentication data from the server
        fetch("/example")
            .then(res =>  {
                this.setState({userInfo: res});
        })
    }

    

    

    render() {
        const App = () => (
            <div>
                <Switch>
                    <Route path="/" exact component={Landing}/>
                    <Route path="/login" render={() => <Login profiles={this.state.profiles} />}/>
                    <Route path="/choice" render={() => <Choice profiles={this.state.profiles} />}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/loginWithEmail" render={() => <LoginWithEmail profiles={this.state.profiles} />}/>
                    <Route path="/signUpWithEmail" component={signUpWithEmail}/>
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
