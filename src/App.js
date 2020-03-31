import React, {Component} from 'react';
import './App.css';
import Landing from './components/Landing'
import Login from './components/Login'
import { Route, Switch } from 'react-router-dom';
import Choice from "./components/Choice";
import Signup from "./components/Signup";
import logInWithEmail from './components/LoginWithEmail';
import signUpWithEmail from './components/SignupWithEmail'

class App extends Component {
    state = {
        data: null
    };

    componentDidMount() {
        this.callAPI();
        console.log(this.state);
    }

    callAPI() {
        fetch("/express_backend")
            .then(res => res.text())
            .then(res => {
                this.setState({data: res});
                console.log(this.state);
            })
    }

    render() {
        const App = () => (
            <div>
                <Switch>
                    <Route path="/" exact component={Landing}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/choice" component={Choice}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/loginWithEmail" component={logInWithEmail}/>
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
