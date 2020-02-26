import React from "react";
import InfoCard from "./InfoCard.js";

const Landing = props => (
    <div className="landingbg">
        <div className="landingtext">Connect to<br/> Your campus</div>
        <div className="info">
            <p className="infotext">It's that simple</p>
            <InfoCard/> <InfoCard/>
            <br/>
            <button className="chatbutton">Let's Chat</button>
        </div>
    </div>
);

export default Landing;
