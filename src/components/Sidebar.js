import React, {Component} from "react";
import './css/Sidebar.css';
import ChatRoomLink from "./ChatRoomLink";
import io from "socket.io-client";
import Chat from "./Chat";

let socket;

class ChatRoom {
    constructor(name) {
        this.name = name;
        this.users = [];
    }
}

export default class SideBar extends Component {

    constructor(props) {
        super(props);
        const academics = new ChatRoom("Academics");
        const timeManagement = new ChatRoom("Time Management");
        const mentalHealth = new ChatRoom("Mental Health");
        const substanceUse = new ChatRoom("Substance Use");
        const nutrition = new ChatRoom("Nutrition");
        this.state = {
            fetching: true,
            chatRooms: [academics, timeManagement, mentalHealth, substanceUse, nutrition]
            /* chatRooms: [
                "Academics": {
                    "Name": "Academics",
                    "Users": [],
                }, "Time Management": {
                    "Name": "Time Management",
                    "Users": ["Albert"],
                }, "Mental Health": {
                    "Name": "Mental Health",
                    "Users": ["Andy", "Albert", "Alex", "Anthony", "Ben"],
                }, "Substance Use": {
                    "Name": "Substance Use",
                    "Users": ["Farhud", "Desiree"]
                }, "Nutrition": {
                    "Name": "Nutrition",
                    "Users": []
                }
            ] */
        };
        socket = io("localhost:5000");
    }


    componentDidUpdate() {
        socket.on("roomData", ({ room, newUsers }) => {
            let rooms = [...this.state.chatRooms];
            const elementIndex = this.state.chatRooms.findIndex(element => element.name === room);
            if (elementIndex > -1) {
                rooms[elementIndex] = {...rooms[elementIndex], users: newUsers};
            }
            this.setState({
                chatRooms: rooms
            });
        
        });
    }

    render() {
        let chatRoomsComponents = [];
        if (typeof this.state.chatRooms !== "undefined" && this.state.chatRooms !== null) {
            chatRoomsComponents = Object.keys(this.state.chatRooms).map((room, i) =>
                <ChatRoomLink room={room} info={this.state.chatRooms} key={i}/>
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