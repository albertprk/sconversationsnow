import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';
import './css/Messages.css';

const Messages = ({ messages }) => (
    <ScrollToBottom className="messages">
        {messages.map((message, i) => <div key={i}>{ message }</div>)}
    </ScrollToBottom>
)

export default Messages;