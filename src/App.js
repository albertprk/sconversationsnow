import React, {Component} from 'react';
import './App.css';
import Landing from './components/Landing'
import Login from './components/Login'
import { Route, Switch } from 'react-router-dom';
import Choice from "./components/Choice";
import Signup from "./components/Signup";
import LoginWithEmail from './components/LoginWithEmail';
import signUpWithEmail from './components/SignupWithEmail'
import Dashboard from "./components/Dashboard";

class App extends Component {
    state = {
        profiles: null,
        chatRooms: null
    };

    componentDidMount() {
        this.callAPI();
    }

    callAPI() {
        fetch("/chatRooms")
            .then(res => res.json())
            .then(res => {
                this.setState({chatRooms: res});
            })
    }

    render() {
        const App = () => (
            <div>
                <Switch>
                    <Route path="/" exact component={Landing}/>
                    <Route path="/login" component={Login} />
                    <Route path="/choice" component={Choice}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/loginWithEmail" component={LoginWithEmail}/>
                    <Route path="/signUpWithEmail" component={signUpWithEmail}/>
                    <Route path="/dashboard" component={Dashboard} />
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
