const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const socketio = require('socket.io');

const { addUser, removeUser, getUser, getUsersInRoom, getUserNamesInRoom } = require('./chatUsers');


require('dotenv').config();

const app = express();

//Run on port or on localhost 5000
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

//To run server, change directory to backend, then type nodemon server to run the server

const server = app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

// Socket implementation
const chatRouter = require('./routes/chatRoute');
const { useCallback } = require('react');
const io = socketio(server);

io.on('connection', (socket) => {

    // Will likely need to pass mongo ID for instant messaging and matching -> 
    // Can figure that out when we talk about architecture
    socket.on('join', ({ name, room, email, avi }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room, email, avi });

        if (error) return useCallback(error);

        socket.emit('message', { user: 'admin', text: `${user.name}, welcome to the room, ${user.room}` });
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

        socket.join(user.room);
        console.log("user has joined!");
        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
        io.emit('roomDataGlobal', { room: user.room, newUsers: getUsersInRoom(user.room) });

        callback();
    });
    
    socket.on('disconnect', () => {
        console.log("user disconnecting");
        const user = removeUser(socket.id);

        if (user) {
            io.to(user.room).emit('message', {user: 'admin', text: `${user.name} has left.`});
            io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
            io.emit('roomDataGlobal', { room: user.room, newUsers: getUserNamesInRoom(user.room) });
        }
    });
    

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', { user: user.name, text: message });
        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
        io.emit('roomDataGlobal', { room: user.room, newUsers: getUsersInRoom(user.room) });
        

        callback();
    });

    // Will emit a list of names indexed according to the chatRooms variable
    socket.on('getRooms', (chatRooms) => {
        let rooms = [];
        for (let i = 0; i < chatRooms.length; i++) {
            let roomName = chatRooms[i].name.trim().toLowerCase();
            console.log(roomName);
            let roomUsers = getUsersInRoom(roomName);
            rooms.push(roomUsers);
        }
        console.log(rooms);
        io.emit('allRooms', rooms);
    });
    socket.on('getRoom', (roomName) => {
        console.log(roomName);
        io.emit('roomDataGlobal', { room: roomName, newUsers: getUsersInRoom(roomName.trim().toLowerCase()) });
    })

});

app.use(chatRouter);


