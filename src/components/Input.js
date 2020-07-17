import React from 'react';

const disconnect = () => {
    localStorage.setItem("chatRoom", "false");
    window.location.reload();
};

const Input = ({ message, setMessage, sendMessage }) => (
    <form className="form">
        <input
        id = "input"
        className="input"
        type="text"
        placeholder="Type a message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
        />
        <button className="sendButton" onClick={(event) => sendMessage(event)}>Send</button>
        <button className="leaveButton" onClick={disconnect}>Leave Chat</button>
    </form>
);

export default Input;