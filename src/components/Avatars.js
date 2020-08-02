import React, {Component} from "react";
import "./css/Avatars.css";
import axios from 'axios';

class Avatars extends Component {

    constructor(props) {
        super();
        this.state = {
            avis: []
        }
    }

    componentWillMount() {
        for (let i = 1; i < 60; i++) {
            this.state.avis.push(i.toString());
        }
    }

    render() {
        return (
            <div className='avatars'>
                <p className="chooseAvatar">Choose a new avatar</p>
                {this.state.avis.map((avi) => (
                    <img
                        height="7%"
                        width="7%"
                        src={require("../images/icons/" + avi + ".png")}
                        className="avatarImage"
                    />
                ))}
            </div>
        );
    }
}
export default Avatars;