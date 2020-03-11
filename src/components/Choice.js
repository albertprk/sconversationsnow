import React from "react";
import './css/Login.css';

const Choice = props => (
    <div className="logIn">
        <div className="rectangle">
            <a href="./login">
                <div className="welcomeBack">Chat<br></br>Now</div>
            </a>
        </div>
        <div className="rectangleChoiceRight">
            <div className="becomeMentor">Become<br></br>a Mentor</div>
        </div>
    </div>
);

export default Choice;