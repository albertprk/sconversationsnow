import React, {Component} from "react";
import "./css/Avatars.css";
import axios from 'axios';

class Avatars extends Component {

    constructor(props) {
        super();
        this.state = {
            avis: []
        };
        this.onAvatarClick = this.onAvatarClick.bind(this);
    }

    componentWillMount() {
        for (let i = 1; i < 60; i++) {
            this.state.avis.push(i.toString());
        }
    }

    onAvatarClick(e, index) {
        e.preventDefault();
        console.log(localStorage.getItem("id"));
        axios.get('http://localhost:5000/users/getuser/' + localStorage.getItem('id'))
            .then(res => {
                const newUsername = res.data.username;
                const newPassword = res.data.password;
                const newUserType = res.data.usertype;
                const newEmail = res.data.email;
                const newXp = res.data.xp;
                const newStudentId = res.data.studentid;
                const newAvi = this.state.avis[index];
                const user = {
                    username: newUsername,
                    password: newPassword,
                    userType: newUserType,
                    email: newEmail,
                    xp: newXp,
                    studentid: newStudentId,
                    avi: newAvi
                };
                localStorage.setItem("avi", user.avi);
                axios.post('http://localhost:5000/users/update/' + localStorage.getItem('id'), user)
                    .then(res => {
                        console.log(res.data);
                        window.location.reload();
                    });
            });

    }

    render() {
        return (
            <div className='avatars'>
                <p className="chooseAvatar">Choose a new avatar</p>
                {this.state.avis.map((avi, i) => (
                    <img
                        height="7%"
                        width="7%"
                        src={require("../images/icons/" + avi + ".png")}
                        className="avatarImage"
                        onClick={(e) => this.onAvatarClick(e, i)}
                    />
                ))}
            </div>
        );
    }
}
export default Avatars;