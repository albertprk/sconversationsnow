import React, { Component } from "react";
import "./css/Dashboard.css";
import Sidebar from "./Sidebar";
import { Redirect } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import DashboardInfo from "./DashboardInfo";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopUp: false,
    };
  }

  logout = () => {
    console.log("Test");
    localStorage.setItem("loggedIn", "false");
    this.setState(this.state);
  };

  render() {
    if (localStorage.getItem("loggedIn") === "false") {
      return (
        <Redirect
          to={{
            pathname: "/login",
          }}
        />
      );
    } else if (localStorage.getItem("chatroom") === "none") {
        return (
          <div className="dashboard">
            <DashboardHeader logout={this.logout} />
            <Sidebar data={this.props} />

            <DashboardInfo />
          </div>
        );
      } else {
        return (
          <Redirect
            to={{
              pathname: "/chatRoom",
            }}
          />
        );
      }
    }
  }

