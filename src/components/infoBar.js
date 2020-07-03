import React from 'react';
import './css/InfoBar.css';

const InfoBar = ({ room }) => (
        <div className="infoBar">
        <div className="leftInnerContainer">
            <h3 className="heading">{ room }</h3>
        </div>
    </div>
)

export default InfoBar;