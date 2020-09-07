import React, { Component } from "react";
import "./css/Dashboard.css";
import logo from "../images/minlogo.png";


export default class DashboardHeader extends Component {
  constructor(props) {
    super(props);
  }

  logout = () => {
      console.log("Test");
      localStorage.setItem("loggedIn", "false");
      localStorage.setItem("chatRoom", "false");
      localStorage.setItem("lastUser", null);
      window.location.reload();
  };

  render() {
    return (
      <div className="dashboard-header">
        <img src={logo}
             className="minlogo"
        />
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
