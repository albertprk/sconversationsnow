const chatUsers = [];

const addUser = ({ id, name, room, email, avi }) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    // checks to see if the user is already present in the room
    // TODO: I actually don't think we need this. Need to handle double accounts on the
    // server side when accounts are created
    // TODO: Need to refactor this so it uses the user's email address
    const existingUser = chatUsers.find((User) => User.room === room && User.name === name); 

    if (existingUser) {
        return { error: 'Username is taken' };
    }

    const user = { id, name, room, email, avi };

    chatUsers.push(user);
    return { user };
}

const removeUser = (id) => {
    const index = chatUsers.findIndex((user) => user.id === id);
    if (index !== -1) {
        return chatUsers.splice(index, 1)[0];
    }
}


const getUser = (id) => chatUsers.find((user) => user.id === id);

const getUsersInRoom = (room) => chatUsers.filter((user) => user.room === room);

const getUserNamesInRoom = (room) => {
    let temp = getUsersInRoom(room);
    return temp.map((user) => user.name);
}

module.exports = { addUser, removeUser, getUser, getUsersInRoom, getUserNamesInRoom };