const express = require('express');
const path = require('path');

const app = express();

// create a GET route
app.get('/express_backend', (req, res) => {
    let data = {
        "Desiree":{
            "email":"desireeexample@gmail.com",
            "password":"test",
            "mentor":"true",
            "xp":"60"
        },
        "Albert":{
            "email":"alberttpark@gmail.com",
            "password":"test",
            "mentor":"false",
            "xp":"5"
        },
        "Andy": {
            "email":"andyexample@gmail.com",
            "password":"test",
            "mentor":"false",
            "xp":"5"
        },
        "Farhud":{
            "email":"farhudexample@gmail.com",
            "password":"test",
            "mentor":"false",
            "xp":"5"
        },"Anthony":{
            "email":"anthonyexample@gmail.com",
            "password":"test",
            "mentor":"false",
            "xp":"5"
        },"Ben":{
            "email":"benexample@gmail.com",
            "test":"test",
            "mentor":"false",
            "xp":"5"}
    };
    res.send(data);
    console.log("YA!");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Example app listening on port 5000!')
});