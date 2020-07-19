import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import InfoBar from "./infoBar";
import Input from "./Input";
import Messages from "./Messages";
import Message from './Message';
import './css/Chat.css';

let socket;

const Chat = ({ theName, theRoom }) => {
  const [name, setName] = useState(theName);
  const [room, setRoom] = useState(theRoom);
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState("");
  // Stores a list of Message components
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "localhost:5000";

  useEffect(() => {

    socket = io(ENDPOINT);

    socket.emit("join", { name, room }, () => {}); // same as { name: name, room: room }

    // return function for when the user disconnects from the socket
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, name, room]); 

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, <Message message={message} name={name} />]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
      console.log(users);
    });
  }, [messages, users]);


  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      {/* <TextContainer users={ users }/> */}
    </div>
  );
};

export default Chat;
