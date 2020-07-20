import React, { Component } from "react";
import "./css/Dashboard.css";


export default class DashboardHeader extends Component {
  constructor(props) {
    super(props);
  }

  logout = () => {
      console.log("Test");
      localStorage.setItem("loggedIn", "false");
      localStorage.setItem("chatRoom", "false");
      window.location.reload();
  };

  render() {
    return (
      <div className="dashboard-header">
        <button className="help-now">
          <img src={require("../images/helpicon.png")} alt="help button" />
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
      </div>
    );
  }
}
