import React from 'React';


const TextContainer = ({ users }) = (
    <div>
        <h1>People Currently Chatting:</h1>
        <div className="currentChatting">
            <h2>
                {user.map(({name}) => (
                    <div key={ name } className="user">
                        { name }
                    </div>
                ))}
            </h2>
        </div>
    </div>
);

export default TextContainer;