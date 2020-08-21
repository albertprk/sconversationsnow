import React, { Component } from "react";
import "./css/Dashboard.css";
import "./css/Chat.css";


export default class DashboardHeaderChat extends Component {
  constructor(props) {
    super(props);
  }

  logout = () => {
      console.log("Test");
      localStorage.setItem("loggedIn", "false");
      window.location.reload();
  };

    render() {
        return (
            <div className="dashboard-header">
                <button className="help-now">
                    <img src={require("../images/helpicon.png")} alt="help button"/>
                    HELP NOW
                </button>
                <img
                    alt="User Avatar"
                    className="header-avi"
                    src={require("../images/icons/" + localStorage.getItem("avi") + ".png")}
                />
                <button className="logoutDashboard" onClick={this.logout}>
                    Logout
                </button>
                <p className="chatRoomName">{localStorage.getItem("chatRoom")}</p>
            </div>
    );
  }
}
