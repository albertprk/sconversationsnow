const Bcrypt = require('bcryptjs');
const router = require('express').Router();
let User = require('../models/users.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post(async (req, res) => {
    console.log('test');
    const salt = 10;
    const username = req.body.username;
    const password = await Bcrypt.hash(req.body.password, salt);
    const userType = req.body.userType;
    const email = req.body.email;
    const xp = Number(req.body.xp);
    const studentid = Number(req.body.studentid);
    const avi = Number(req.body.avi);

    const newUser = new User({
        username,
        password,
        userType,
        email,
        xp,
        studentid,
        avi
    });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/login').post(async (req, res) => {
    const obj = await User.findOne({email: req.body.email});
    Bcrypt.compare(req.body.password, obj.password , function (err, result) {
        if (result) {
            console.log("logged in ");
            res.json(obj);
        } else {
            res.json("invalid password");
        }
    })
});

router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.username = req.body.username;
            user.password = req.body.password;
            user.userType = req.body.userType;
            user.email = req.body.email;
            user.xp = Number(req.body.xp);
            user.studentid = Number(req.body.studentid);
            user.avi = Number(req.body.avi);

            user.save()
                .then(() => res.json('User updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/getuser/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))  //then return as json ; else return error
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;