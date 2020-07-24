import React, {Component} from "react";
import "./css/Sidebar.css";

export default class ChatRoomLink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
    }

    joinChat = () => {
        localStorage.setItem("chatRoom", this.props.roomName);
        window.location.reload();
    };

    handleClick = () => {
        if (this.state.clicked) {
            this.setState({clicked: false});
        } else {
            this.setState({clicked: true});
        }
    }

    render() {
        {console.log(this.props)}
        if (this.state.clicked === false) {
            return (
                <div className="chat-room-link" onClick={this.handleClick}>
                    {this.props.roomName}
                    <button className="chat-join-button" onClick={this.joinChat}>JOIN</button>
                </div>
            );
        } else {
            let chatRoomUsers = this.props.users.map((user, i) => {
                if (i !== 2) {
                    return (<div key={i} className="chat-room-link-user">{user.name}</div>)
                } else {
                    return (<div className="chat-room-link-user">{user.name} +
                         {this.props.users.length - 3} others</div>)
                }
            });
            if (chatRoomUsers.length === 0) {
                return (
                    <div className="chat-room-link-clicked" onClick={this.handleClick}>
                        {console.log(this.props.roomName)}
                        {this.props.roomName}
                        <button className="chat-join-button">JOIN</button>
                        <br/>
                        <div className="chat-users-panel">
                            <div className="chat-room-link-user-none">No active users</div>
                        </div>
                    </div>
                )
            } else if (chatRoomUsers.length < 3) {
                return (
                    <div className="chat-room-link-clicked" onClick={this.handleClick}>
                        {this.props.roomName}
                        <button className="chat-join-button">JOIN</button>
                        <br/>
                        <div className="chat-users-panel">{chatRoomUsers}</div>
                    </div>
                )
            } else {
                return (
                    <div className="chat-room-link-clicked" onClick={this.handleClick}>
                        {this.props.roomName}
                        <button className="chat-join-button">JOIN</button>
                        <br/>
                        <div className="chat-users-panel">{chatRoomUsers[0]}</div>
                        <div className="chat-users-panel">{chatRoomUsers[1]}</div>
                        <div className="chat-users-panel">{chatRoomUsers[2]}</div>
                    </div>
                )
            }
        }
    }
}