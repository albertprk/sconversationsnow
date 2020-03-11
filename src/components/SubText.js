import React from "react";

const divStyle = {
    fontSize: "20px",
    marginBottom: "-15px"
};

const SubText = props => (
    <div className="infocardtext">
        <div style={divStyle}><b>{props.headertext}</b></div><br/>
        {props.subtext}
    </div>
);

export default SubText