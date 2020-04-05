import React, {Component} from "react";
import "./css/Dashboard.css";
import Sidebar from "./Sidebar";

export default class App extends Component {

    render() {
        return (
            <div className="dashboard">
                <div className="dashboard-header">
                    <button className="help-now"><img src={require("../images/helpicon.png")} alt="help button"/>
                    HELP NOW
                    </button>
                </div>
                <Sidebar data={this.props}/>

                <div className="dashboard-info">
                </div>
            </div>
        )
    }
}