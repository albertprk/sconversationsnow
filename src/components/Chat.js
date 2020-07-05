import React, { useState, useEffect } from "react";
//import queryString from "query-string";
import io from "socket.io-client";
import InfoBar from "./infoBar";
import Input from "./Input";
import Messages from "./Messages";
import './css/Chat.css';

let socket;

const Chat = ({ theName, theRoom }) => {
  const [name, setName] = useState(theName);
  const [room, setRoom] = useState(theRoom);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    //const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    //setName(name);
    //setRoom(room);

    socket.emit("join", { name, room }, () => {}); // same as { name: name, room: room }

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, name, room]); // use effect will only change if the values in the list change

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  console.log(message, messages);

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name}/>
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
