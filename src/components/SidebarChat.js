import React, { useState, useEffect } from "react";
import './css/Sidebar.css';
import ChatRoomLink from "./ChatRoomLink";
import io from "socket.io-client";

class ChatRoom {
    constructor(name) {
        this.name = name;
        this.users = [];
    }
}



let socket;

const SideBarChat = (props) => {
    const academics = new ChatRoom("Academics");
    const timeManagement = new ChatRoom("Time Management");
    const mentalHealth = new ChatRoom("Mental Health");
    const substanceUse = new ChatRoom("Substance Use");
    const nutrition = new ChatRoom("Nutrition");
    const [chatRooms, setChatRooms]
        = useState([academics, timeManagement, mentalHealth, substanceUse, nutrition]);
    const ENDPOINT = "localhost:5000";

    useEffect(() => {
        socket = io(ENDPOINT);
        socket.emit("getRooms", [...chatRooms]);

        // chatRooms.forEach((chat) => {
        //   socket.emit("getRoom", chat.name);
        // })
    }, [ENDPOINT]);

    useEffect(() => {

        socket.on("roomDataGlobal", ({ room, newUsers }) => {
            {console.log("these are the new " + room + " users: ")}
            {console.log(newUsers)};
            let rooms = [...chatRooms];
            const elementIndex = chatRooms.findIndex(element => element.name.trim().toLowerCase() == room);
            {console.log(elementIndex)};
            if (elementIndex > -1) {
                rooms[elementIndex] = { ...rooms[elementIndex], users: newUsers };
                setChatRooms(rooms);
            }
        });
    }, [chatRooms]);

    useEffect(() => {

        socket.on("allRooms", ( rooms ) => {
            {console.log(rooms)}
            const theRooms = [ ...chatRooms ];
            for (let i = 0; i < theRooms.length; i++) {
                theRooms[i] = { ...theRooms[i], users: rooms[i] };
            }
            setChatRooms(theRooms);
        });

    }, [chatRooms]);




    let chatRoomsComponents = [];
    if (typeof chatRooms !== "undefined" && chatRooms !== null) {
        chatRoomsComponents = chatRooms.map((room, i) =>
            <ChatRoomLink roomName={room.name} users={room.users} key={i} />
        );
    }

    return (
        <div className="sidebar-body">
            <p className="sidebar-title">Chat Rooms</p>
            <div className="chat-room-panel">{chatRoomsComponents}</div>
        </div>
    );
};

export default SideBarChat;
