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
        };
        
    }

    componentWillMount() {
        socket = io("localhost:5000");

        socket.emit("getRooms", { ...this.state.chatRooms });
    }

    componentWillReceiveProps() {
        {console.log("its props")}
    }

    componentDidUpdate() {
        {console.log("its updating")}
        socket.on("roomDataGlobal", ({ room, newUsers }) => {
            let rooms = [...this.state.chatRooms];
            const elementIndex = this.state.chatRooms.findIndex(element => element.name === room);
            if (elementIndex > -1) {
                rooms[elementIndex] = {...rooms[elementIndex], users: newUsers};
                this.setState({
                    chatRooms: rooms
                });
            }
        });

        socket.on("allRooms", ({ rooms }) => {
            const theRooms = {...this.state.chatRooms};
            for (let i = 0; i < theRooms.length; i++) {
                theRooms[i] = {...theRooms[i], users: rooms[i]};                
            }
            this.setState({
                chatRooms: theRooms
            });
        })
    }

    render() {
        let chatRoomsComponents = [];
        if (typeof this.state.chatRooms !== "undefined" && this.state.chatRooms !== null) {
            chatRoomsComponents = this.state.chatRooms.map((room, i) =>
                <ChatRoomLink roomName={room.name} users={room.users} key={i}/>
            );
        }
        return (
            <div className="sidebar-body">
                <p className="sidebar-title">Chat Rooms</p>
                {console.log(chatRoomsComponents)}
                <div className="chat-room-panel">{chatRoomsComponents}</div>
            </div>
        )
    }
};