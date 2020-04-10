const express = require('express');
const path = require('path');

const app = express();

app.get('/profiles', (req, res) => {
    let profiles = {
        "Desiree":{
            "name": "Desiree",
            "email":"desireeexample@gmail.com",
            "password":"test",
            "mentor":"true",
            "xp":"60",
            "studentid": 5
        },
        "Albert":{
            "name": "Albert",
            "email":"alberttpark@gmail.com",
            "password":"test",
            "mentor":"false",
            "xp":"5",
            "studentid": 4
        },
        "Andy": {
            "name": "Andy",
            "email":"andyexample@gmail.com",
            "password":"test",
            "mentor":"false",
            "xp":"5",
            "studentid": 3
        },
        "Farhud":{
            "name": "Farhud",
            "email":"farhudexample@gmail.com",
            "password":"test",
            "mentor":"false",
            "xp":"5",
            "studentid": 2
        },"Anthony":{
            "name": "Anthony",
            "email":"anthonyexample@gmail.com",
            "password":"test",
            "mentor":"false",
            "xp":"5",
            "studentid": 1
        },"Ben":{
            "name": "Ben",
            "email":"benexample@gmail.com",
            "password":"test",
            "mentor":"false",
            "xp":"5",
            "studentid": 0
        }
    };
    res.send(profiles);
});

app.get("/chatRooms", (req, res) => {
    let chatRooms = {
        "Academics": {
            "Name": "Academics",
            "Users": [],
        }, "Time Management": {
            "Name": "Time Management",
            "Users": ["Albert"],
        }, "Mental Health": {
            "Name": "Mental Health",
            "Users": ["Andy", "Albert", "Alex", "Anthony", "Ben", "Another", "Me"],
        }, "Substance Use": {
            "Name": "Substance Use",
            "Users": ["Farhud", "Desiree"]
        }, "Nutrition": {
            "Name": "Nutrition",
            "Users": []
        }
    }
    res.send(chatRooms);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Student Conversations Now is currently listening on port 5000!')
});