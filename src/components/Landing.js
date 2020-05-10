import React from "react";
import InfoCard from "./InfoCard.js";
import SubText from "./SubText";
import choosegroup from "../images/choosegroup.png"
import talkstudents from "../images/talkstudents.png"
import laptop from "../images/laptop.png"
import check from "../images/check.png"
import mentor from "../images/mentor.png"
import plant from "../images/plant.svg"
import background from "../images/landingpagebg.png"

const Landing = props => (
    <div className="landingbody">
        <div className="landingHeader">
            <p className="App-name">STUDENT CONVERSATIONS NOW</p>
            <a href="./login">Login</a>
            <a href="./signup">Sign Up</a>
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
);

export default Landing;
