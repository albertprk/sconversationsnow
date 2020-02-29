import React, {Component} from 'react';
import './App.css';
import Landing from './components/Landing'
import Login from './components/Login'
import './Login.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
        <Landing/>
        //<Login/>
    )
  }
}

export default App;
