import React, {Component} from "react";
import InfoCard from "./InfoCard.js";
import SubText from "./SubText";
import choosegroup from "../images/choosegroup.png"
import talkstudents from "../images/talkstudents.png"
import laptop from "../images/laptop.png"
import check from "../images/check.png"
import mentor from "../images/mentor.png"
import plant from "../images/plant.svg"
import background from "../images/landingpagebg.png"
import {Redirect} from 'react-router-dom'
import logo from "../images/bblogo.png"

export default class Landing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "holder": 2
        };
    }

    logout = (e) =>  {
        console.log("Test");
        localStorage.setItem("loggedIn", "false");
        this.setState(this.state);
    };

    render() {
        if (localStorage.getItem("loggedIn") === null || localStorage.getItem("loggedIn") === "false") {
            return (
                <div className="landingbody">
                    <div className="landingHeader">
                        <img className="logo"
                             src={logo}
                             alt="Welcome to Building Blocks!"
                        />
                        <a className="loginSignin" href="./login">Login</a>
                        <a className="loginSignin" href="./signup">Sign Up</a>
                    </div>
                    <div className="introGraphic">
                        <div className="slogan">
                            Connect to <br/> your campus <br/>
                            <div className="slogansub">Online peer mentoring for university students</div>
                            <a href="./signup">
                                <button className="getStarted">
                                    Get Started
                                </button>
                            </a>
                        </div>
                        <img className="backgroundimg" src={background} alt="Welcome to Student Conversations Now"/>
                    </div>
                </div>
            )
        } else {
            return (
                <Redirect to={{
                    pathname: '/dashboard',
                    state: this.state.profile
                }}/>
            )
            /*
            return (
                <div className="landingbody">
                    <div className="landingHeader">
                        <p className="App-name">STUDENT CONVERSATIONS NOW</p>
                        <p className="welcome">Welcome, {localStorage.getItem("username")}!</p> <button className="logout" onClick={this.logout}>(Logout)</button>
                    </div>
                    <img className="backgroundimg" src={background} alt="Welcome to Student Conversations Now"/>
                    <div className="landingbg">
                        <div className="info">
                            <p className="infotext">It's that simple</p>
                            <InfoCard image={choosegroup}/> <InfoCard image={talkstudents}/>
                            <br/>
                            <SubText headertext={"Choose a group to join\n"}
                                     subtext={"Each group talks about different subjects like " +
                                     "mental health, physical health and academics"}/>
                            <SubText headertext={"Talk with other students \n" +
                            "\n"} subtext={"Each group has mentors who are trained to provide support"}/>
                            <br/>
                            <a href="./login">
                                <button className="chatbutton">Let's Chat</button>
                            </a>
                        </div>
                        <div className="info2">
                            <p className="infotext">Want to become a student mentor?</p>
                            <InfoCard image={laptop}/> <InfoCard image={mentor}/>
                            <InfoCard image={check}/>
                            <br/>
                            <SubText headertext={"Complete the training"}/>
                            <SubText headertext={"Support your peers"}/>
                            <SubText headertext={"Collect volunteer hours"}/>
                            <br/>
                            <button className="mentorbutton">Get Started</button>
                        </div>
                    </div>
                </div>
                )
                */
        }
    }
}
