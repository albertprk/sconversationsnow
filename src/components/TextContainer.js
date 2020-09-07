import React from 'react';

const TextContainer = ({ users }) => {
    const usersArray = Array.from(users);
    console.log(usersArray);
    return (
        <div className="textContainer">
            <h1 className="activeList">Currently Active Users</h1>
            <div className="currentChatting">
                <h2>
                    {usersArray.map(({name}) => (
                        <div key={name} className="userName">
                            {name}
                        </div>
                    ))}
                </h2>
            </div>
        </div>
    );
};

export default TextContainer;