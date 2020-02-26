import React from "react";
import InfoCard from "./InfoCard.js";

const Landing = props => (
    <div className="landingbg">
        <div className="landingtext">Connect to<br/> Your campus</div>
        <div className="info">
            <InfoCard/> <InfoCard/>
        </div>
    </div>
);

export default Landing;
