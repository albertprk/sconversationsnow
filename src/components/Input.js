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
            autoComplete="off"
        />
        <button className="sendButton" onClick={(event) => sendMessage(event)} alt="Send your message">↑</button>
        <button className="leaveButton" onClick={disconnect} alt="Leave this Chat">x</button>
    </form>
);

export default Input;