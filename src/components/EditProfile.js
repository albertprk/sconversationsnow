import React, {Component} from "react";
import "./css/Dashboard.css";
import axios from 'axios';
import DashboardHeaderEdit from "./DashboardHeaderEdit";
import { Redirect } from "react-router-dom";

export default class EditProfile extends Component {

    constructor(props) {
        super();
        this.state = {
            returnToDashboard: false,
        };
        this.onAvatarClick = this.onAvatarClick.bind(this);
    }

    onAvatarClick(e, index) {
        e.preventDefault();
        console.log(localStorage.getItem("_id"));
        axios.get('http://localhost:5000/users/getuser/' + localStorage.getItem('_id'))
            .then(res => {
                const newUsername = res.data.username;
                const newPassword = res.data.password;
                const newEmail = res.data.email;
                const newAvi = this.state.avis[index];
                const newBio = res.data.bio;
                const user = {
                    username: newUsername,
                    password: newPassword,
                    email: newEmail,
                    avi: newAvi,
                    bio: newBio,
                };
                localStorage.setItem("avi", user.avi);
                axios.post('http://localhost:5000/users/update/' + localStorage.getItem('_id'), user)
                    .then(res => {
                        console.log(res.data);
                        window.location.reload();
                    });
            });

    }

    _returnToDashboard = () => {
        this.setState({
            returnToDashboard: true,
        });
    };

    render() {
        if (this.state.returnToDashboard === false) {
            return (
                <div>
                    <DashboardHeaderEdit/>
                    <div className='avatars'>
                        <div className='editsFrame'>
                            <p className="changeLabelInstructions">What would you like to modify?</p>
                            <br/>
                            <div className="modifySelection">
                                <b>Change Username</b><br/><br/>
                                Your name that will be shown to others on BuildingBlocks
                            </div>
                            <br/>
                            <div className="modifySelection">
                                <b>Change Email</b><br/><br/>
                                The email associated with your BuildingBlocks account
                            </div>
                            <br/>
                            <div className="modifySelection">
                                <b>Change Password</b><br/><br/>
                                The password you use to log-in to your BuildingBlocks account
                            </div>
                            <br/>
                            <div className="modifySelection">
                                <b>Change Bio</b><br/><br/>
                                A summary of yourself that will help others get to know you on BuildingBlocks
                            </div>
                            <br/>
                            <span className="buttonContainer">
                            <button className="returnButton"
                                    onClick={this._returnToDashboard}>
                                Cancel
                            </button>
                        </span>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <Redirect to={{
                    pathname: '/dashboard',
                }}/>
            )
        }
    }
}