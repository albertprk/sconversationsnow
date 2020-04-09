const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI; //This is the credentials to connect to the database
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

//Checks if server is connected
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


const usersRouter = require('./routes/users');
app.use('/users', usersRouter);



//To run server, change directory to backend, then type nodemon server to run the server

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});