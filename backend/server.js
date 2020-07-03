const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const socketio = require('socket.io');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./chatUsers');


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
    console.log('We have a new connection!!');

    socket.on('join', ({ name, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room });

        if (error) return useCallback(error);

        socket.emit('message', { user: 'admin', text: `${user.name}, welcome to the room, ${user.room}` });
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

        socket.join(user.room);

        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) })

        callback();
    })

    socket.on('disconnect', () => {
        const user = removeUser(socket.id);

        if (user) {
            io.to(user.room).emit('message', {user: 'admin', text: `${user.name} has left.`});
            io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
        }
    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', { user: user.name, text: message });
        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
        

        callback();
    })

});

app.use(chatRouter);


