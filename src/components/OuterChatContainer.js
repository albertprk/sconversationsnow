import React, {Component} from "react";
import Sidebar from "./Sidebar";
import {Redirect} from 'react-router-dom'
import DashboardHeader from "./DashboardHeader";
import Chat from "./Chat";

export default class OuterChatContainer extends Component {
    constructor(props) {
        super(props);
    }

    logout = (e) =>  {
        console.log("Test");
        localStorage.setItem("loggedIn", "false");
        this.setState(this.state);
    };

    render() {
        return (
            <div className="outerContainer">
                <Sidebar />
                <DashboardHeader logout={this.logout} />
                <Chat theName={localStorage.getItem("username")} theRoom={localStorage.getItem("chatroom")} />
            </div>
        )
    }
}