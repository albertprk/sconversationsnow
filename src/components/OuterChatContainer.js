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

    logout = (e) => {
        localStorage.setItem("loggedIn", "false");
        localStorage.setItem("chatroom", "none");
        window.location.reload();
    };

    render() {
        if (localStorage.getItem("chatRoom") === "false") {
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
                        <br />
                        <Chat className="chatRoom" theName={localStorage.getItem("username")} theRoom={localStorage.getItem("chatRoom")} 
                        theEmail={localStorage.getItem("email")} theAvi={localStorage.getItem("avi")} />
                    </div>
                </div>
            )
        }
    }
}