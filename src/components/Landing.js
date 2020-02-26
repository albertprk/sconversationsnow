import React from "react";
import InfoCard from "./InfoCard.js";
import choosegroup from "../images/choosegroup.png"
import talkstudents from "../images/talkstudents.png"
import laptop from "../images/laptop.png"
import check from "../images/check.png"
import mentor from "../images/mentor.png"
import plant from "../images/plant.png"
import person from "../images/person.png"

const Landing = props => (
    <div className="landingbg">
        <button className="helpbutton">Help Now</button>
        <div className="landingtext">Connect to<br/> Your campus</div>
        <img className="plant" src={plant} />
        <img className="person" src={person} />
        <div className="info">
            <p className="infotext">It's that simple</p>
            <InfoCard image={choosegroup}/> <InfoCard image={talkstudents} />
            <br/>
            <button className="chatbutton">Let's Chat</button>
        </div>
        <div className="info2">
            <p className="infotext">Want to become a student mentor?</p>
            <InfoCard image={laptop}/> <InfoCard image={mentor}/>
            <InfoCard image={check}/>
            <br/>
            <button className="mentorbutton">Get Started</button>
        </div>
    </div>
);

export default Landing;
