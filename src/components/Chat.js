import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Input from "./Input";
import Messages from "./Messages";
import Message from './Message';
import './css/Chat.css';
import TextContainer from './TextContainer';

let socket;

const Chat = ({ theName, theRoom, theEmail, theAvi }) => {
  const [name, setName] = useState(theName);
  const [room, setRoom] = useState(theRoom);
  const [email, setEmail] = useState(theEmail);
  const [avi, setAvi] = useState(theAvi);
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    socket = io(ENDPOINT);

    socket.emit("join", { name, room, email, avi }, () => {}); // same as { name: name, room: room }

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, name, room, email, avi]); 

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
      <TextContainer users={ users }/>
      <div className="container">
        <Messages messages={messages} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
