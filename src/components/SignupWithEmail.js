import React, {Component} from "react";
import './css/SignupWithEmail.css';
import './css/Signup.css';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import {useAlert} from 'react-alert';


export default class SignupWithEmail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            email: '',
            avi: '01',
            bio: '',
        };

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeStudentid = this.onChangeStudentid.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            avi: this.state.avi,
            bio: this.state.bio
        };
        console.log(newUser);
        console.log(newUser.password);
        this.setState({
            username: '',
            password: '',
            email: '',
            avi: '01',
            bio: '',
        });
        axios.post('http://localhost:5000/users/add', newUser)
            .then(res => {
                if (res.data === 'User added!') {
                    console.log(res.data);
                } else {
                    useAlert("Sorry, can you please try again?");
                    console.log(res.data);
                }
            });
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeStudentid(e) {
        this.setState({
            studentid: e.target.value
        });
    }

    render() {
        if (localStorage.getItem("loggedIn") === null || localStorage.getItem("loggedIn") === "false") {
            return (
                <div className="signUp">
                    <div className="rectangleSignUp">
                        <a href="/" className="App-name-login">⬅ STUDENT CONVERSATIONS NOW</a>
                        <div className="niceToMeetYou">Nice to<br></br>Meet You</div>
                    </div>
                    <div className="rectangleRight">

                        <form onSubmit={this.onSubmit}>
                            <div className="nickInput">
                                <input className="nickInputForm"
                                       type="text"
                                       placeholder="Nickname"
                                       name="Nickname"
                                       required onChange={this.onChangeUsername}
                                       value={this.state.username}
                                />
                            </div>
                            <div className="nickLine"/>
                            <div className="emailInput">
                                <input className="emailInputForm"
                                       type="email"
                                       placeholder="Email"
                                       name="email"
                                       required onChange={this.onChangeEmail}
                                       value={this.state.email}
                                />
                            </div>
                            <div className="emailLine"/>
                            <div className="passwordInput">
                                <input className="passInputForm"
                                       type="password"
                                       placeholder="Password"
                                       name="passcode"
                                       required onChange={this.onChangePassword}
                                       value={this.state.password}
                                />
                            </div>
                            <div className="passwordLine"/>
                            <input type="submit" className="signupButton" value="Sign up"/>
                        </form>

                        <div className="alreadyHaveAnAccount">
                            Already have an account? <a href="./login"><span
                            className="sign-in-button">Log In</span></a>
                        </div>
                    </div>


                </div>
            );
        } else {
            return (
                <Redirect to={{
                    pathname: '/dashboard',
                }}/>
            )
        }

    }
}
