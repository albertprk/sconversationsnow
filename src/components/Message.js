import React from 'react';

const Message = ({ message: { user, text }, name }) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if(user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser
        ? (
            <div className="messageContainer">
                <p className="sentText">{trimmedName}</p>
                <div className="messageBox background">
                    <p className="messageText">{text}</p>
                </div>
            </div>
        )
        : (
            <div className="messageContainer justifyEnd">
                <p className="sentText pr-10">{trimmedName}</p>
                <div className="messageBox backgroundLight">
                    <p className="messageText pl-10">{text}</p>
                </div>
            </div>
        )
    )
}

export default Message;