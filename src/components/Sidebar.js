import React, {Component} from "react";
import './css/Sidebar.css';
import ChatRoomLink from "./ChatRoomLink";

export default class SideBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fetching: true,
            chatRooms: {}
        };
    }

    componentDidMount() {
        this.callAPI();
    }

    callAPI() {
        fetch("/chatRooms")
            .then(res => res.json())
            .then(res => {
                console.log(res);
                this.setState({
                    fetching: false,
                    chatRooms: res
                });
            })
    }

    render() {
        let chatRoomsComponents = [];
        if (typeof this.state.chatRooms !== "undefined" && this.state.chatRooms !== null) {
            chatRoomsComponents = Object.keys(this.state.chatRooms).map((room, i) =>
                <ChatRoomLink room={room} info={this.state.chatRooms.data} key={i}/>
            );
        }
        return (
            <div className="sidebar-body">
                <p className="sidebar-title">Chat Rooms</p>
                <div className="chat-room-panel">{chatRoomsComponents}</div>
            </div>
        )
    }
};