import React from "react";
import InfoCard from "./InfoCard.js";
import SubText from "./SubText";
import choosegroup from "../images/choosegroup.png"
import talkstudents from "../images/talkstudents.png"
import laptop from "../images/laptop.png"
import check from "../images/check.png"
import mentor from "../images/mentor.png"
import plant from "../images/plant.svg"
import person from "../images/person.svg"

const Landing = props => (
    <div className="landingbody">
        <div className="landingbg">
            <button className="helpbutton">Help Now</button>
            <div className="landingtext">Connect to<br/> Your campus</div>
            <img className="plant" src={plant} alt="Plant"/>
            <img className="person" src={person} alt="Person on Computer"/>
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
                <a href="./choice">
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
