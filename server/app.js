const express = require('express');
const path = require('path');

const app = express();

app.get('/profiles', (req, res) => {
    let profiles = {
        "Desiree":{
            "email":"desireeexample@gmail.com",
            "password":"test",
            "mentor":"true",
            "xp":"60",
            "studentid": 5
        },
        "Albert":{
            "email":"alberttpark@gmail.com",
            "password":"test",
            "mentor":"false",
            "xp":"5",
            "studentid": 4
        },
        "Andy": {
            "email":"andyexample@gmail.com",
            "password":"test",
            "mentor":"false",
            "xp":"5",
            "studentid": 3
        },
        "Farhud":{
            "email":"farhudexample@gmail.com",
            "password":"test",
            "mentor":"false",
            "xp":"5",
            "studentid": 2
        },"Anthony":{
            "email":"anthonyexample@gmail.com",
            "password":"test",
            "mentor":"false",
            "xp":"5",
            "studentid": 1
        },"Ben":{
            "email":"benexample@gmail.com",
            "test":"test",
            "mentor":"false",
            "xp":"5",
            "studentid": 0
        }
    };
    res.send(profiles);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Student Conversations Now is currently listening on port 5000!')
});