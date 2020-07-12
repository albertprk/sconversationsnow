import React, {Component} from "react";
import Sidebar from "./Sidebar";
import {Redirect} from 'react-router-dom'
import DashboardHeader from "./DashboardHeader";
import Chat from "./Chat";
import "./css/ChatRoom.css";

export default class OuterChatContainer extends Component {
    constructor(props) {
        super(props);
    }

    disconnect = () => {
        localStorage.setItem("chatroom", "none");
        window.location.reload();
    }

    logout = (e) => {
        localStorage.setItem("loggedIn", "false");
        window.location.reload();
    };

    render() {
        if (localStorage.getItem("chatroom") === "none") {
            return (
                <Redirect to={{
                    pathname: '/dashboard',
                }}/>
            )
        } else {
            return (
                <div>
                    <DashboardHeader />
                    <Sidebar />
                    <div className="outerContainer">
                        <button onClick={this.disconnect}>Disconnect</button>
                        <Chat className="chatRoom" theName={localStorage.getItem("username")} theRoom={localStorage.getItem("chatroom")} />
                    </div>
                </div>
            )
        }
    }
}