import React, {Component} from "react";
import "./css/Dashboard.css";
import Sidebar from "./Sidebar";

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            profile: {
                username: "Desiree",
                email: "example@mail.com",
                avi: "019"
            }
        };
    }

    render() {
        return (
            <div className="dashboard">
                <div className="dashboard-header">
                    <button className="help-now"><img src={require("../images/helpicon.png")} alt="help button"/>
                    HELP NOW
                    </button>
                    <img className="header-avi" src={require("../images/icons/" + this.state.profile.avi + ".png")} />
                </div>
                <Sidebar data={this.props}/>

                <div className="dashboard-info">
                    <select className="dashboard-version">
                        <option value="mentee">MENTEE</option>
                        <option value="mentor">MENTOR</option>
                    </select>
                    <button className="edit-avi">
                        <img width="15px" height="15px" src={require("../images/editavi.png")}/>
                    </button>
                    <img className="img" src={require("../images/icons/" + this.state.profile.avi + ".png")} />
                    <table className="profile-info-table">
                        <tr>
                            <td className="profile-field">Username</td>
                            <td className="profile-field-entry">{this.state.profile.username}</td>
                        </tr>
                        <tr>
                            <td className="profile-field">Email</td>
                            <td className="profile-field-entry">{this.state.profile.email}</td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}