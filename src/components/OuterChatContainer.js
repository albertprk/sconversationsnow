import React, {Component} from "react";
import SidebarChat from "./SidebarChat";
import {Redirect} from 'react-router-dom'
import DashboardHeaderChat from "./DashboardHeaderChat";
import Chat from "./Chat";
import "./css/ChatRoom.css";
import TextContainer from "./TextContainer";

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
                <div className="outoutContainer">
                    <DashboardHeaderChat />
                    <SidebarChat />
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