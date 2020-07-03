import React, {Component} from "react";
import "./css/Dashboard.css";
import Sidebar from "./Sidebar";
import {Redirect} from 'react-router-dom'


export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showPopUp: false
        };
    }

    logout = (e) =>  {
        console.log("Test");
        localStorage.setItem("loggedIn", "false");
        this.setState(this.state);
    };

    render() {
        if (localStorage.getItem("loggedIn") === "false") {
            return (
                <Redirect to={{
                    pathname: '/login',
                }}/>
            )
        } else {
            return (
                <div className="dashboard">
                    <div className="dashboard-header">
                        <button className="help-now"><img src={require("../images/helpicon.png")} alt="help button"
                        />
                            HELP NOW
                        </button>
                        <img alt="User Avatar" className="header-avi"
                             src={require("../images/icons/" + localStorage.getItem("avi") + ".png")}/>
                        <button className="logoutDashboard" onClick={this.logout}>Logout</button>
                    </div>
                    <Sidebar data={this.props}/>

                    <div className="dashboard-info">
                        <select className="dashboard-version">
                            <option value="mentee">MENTEE</option>
                            <option value="mentor">MENTOR</option>
                        </select>
                        <button className="edit-avi">
                            <img alt="Edit Avatar" width="15px" height="15px" src={require("../images/editavi.png")}/>
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
}