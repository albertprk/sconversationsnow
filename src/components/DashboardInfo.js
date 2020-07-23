import React, {Component} from "react";
import { Button, Popup } from 'semantic-ui-react';
import Avatars from './Avatars';

export default class DashboardInfo extends Component {

    chooseAvi = () => {
        document.body.style.overflow = 'hidden';
    };

    render() {
        return (
            <div>
                <div className="dashboard-info">
                    <select className="dashboard-version">
                        <option value="mentee">MENTEE</option>
                        <option value="mentor">MENTOR</option>
                    </select>
                    <Popup
                        content={<Avatars />}
                        on='click'
                        pinned
                        className="popup"
                        trigger={<Button onClick={this.chooseAvi} content='Button' />}
                    />
                    <button className="edit-avi">
                        <img alt="Edit Avatar"
                             width="15px"
                             height="15px"
                             src={require("../images/editavi.png")}
                             onClick={this.chooseAvi}
                        />
                    </button>
                    <img alt="User Avatar" className="img"
                         src={require("../images/icons/" + localStorage.getItem("avi") + ".png")}/>
                    <table className="profile-info-table">
                        <tr>
                            <td className="profile-field">Username</td>
                            <td className="profile-field-entry">{localStorage.getItem("username")}</td>
                        </tr>
                        <tr>
                            <td className="profile-field">Email</td>
                            <td className="profile-field-entry">{localStorage.getItem("email")}</td>
                        </tr>
                    </table>
                </div>
                <div className="dashboard-xp">
                    <div className="dashboard-xp-header">You Have 10 XP Points!</div>
                </div>
            </div>
        )
    }

}