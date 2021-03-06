import React from 'react';
import './css/Message.css';
import Avatar from '../images/icons/11.png';
import ReactEmoji from 'react-emoji';

// User Properties: name, room, email, avi
const Message = ({ message: { user, text }, name }) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if(user.name === trimmedName) {
        isSentByCurrentUser = true;
    }

    /*if (localStorage.getItem("lastUser") === "admin" || localStorage.getItem("lastUser") === null ||
        localStorage.getItem("lastUser") !== user) {
        localStorage.setItem("lastUser", user);*/
        return (
            isSentByCurrentUser
                ? (
                    <div className="messageContainer">
                        <div className="identifier">
                            <img className="avatar" src={require("../images/icons/" + user.avi + ".png")}/>
                            <p className="sentText">{user.name}</p>
                        </div>
                        <div className="messageBox">
                            <p className="messageText">{ReactEmoji.emojify(text)}</p>
                        </div>
                    </div>
                )
                : (
                    <div className="recievingMessageContainer">
                        <div className="identifier">
                            <img className="avatar" src={require("../images/icons/" + user.avi + ".png")} />
                            <p className="sentText">{user.name}</p>
                        </div>
                        <div className="messageBox">
                            <p className="messageText">{ReactEmoji.emojify(text)}</p>
                        </div>
                    </div>
                )
        );
    /*} else {
        localStorage.setItem("lastUser", user);
        return (
            isSentByCurrentUser
                ? (
                    <div className="messageContainerSame">
                        <div className="messageBox">
                            <p className="messageText">{ ReactEmoji.emojify(text) }</p>
                        </div>
                    </div>
                )
                : (
                    <div className="receivingMessageContainerSame">
                        <div className="messageBox">
                            <p className="messageText">{ ReactEmoji.emojify(text) }</p>
                        </div>
                    </div>
                )
        );
    }*/
};

export default Message;