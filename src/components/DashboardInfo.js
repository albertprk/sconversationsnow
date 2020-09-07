import React, {Component} from "react";
import { Popup } from 'semantic-ui-react';
import Avatars from './Avatars';
import edit from "../images/edit.png";
import { Redirect } from "react-router-dom";

export default class DashboardInfo extends Component {

    constructor() {
        super();
        this.state = {
            editProfile: false,
        }
    }

    _chooseAvi = () => {
        document.body.style.overflow = 'hidden';
    };

    _editProfile = () => {
        this.setState({
            editProfile: true,
        });
    };

    render() {
        if (this.state.editProfile === false) {
            return (
                <div>
                    <div className="dashboard-info">
                        <button type="button"
                                className="editProfile"
                                onClick={this._editProfile}
                        >
                            <img className="editImage"
                                 src={edit}
                                 height="11px"
                                 width="13px"
                            />
                            Edit
                        </button>
                        <Popup
                            content={<Avatars/>}
                            on='click'
                            pinned
                            className="popup"
                            trigger={
                                <button className="edit-avi">
                                    <img alt="Edit Avatar"
                                         width="15px"
                                         height="15px"
                                         src={require("../images/editavi.png")}
                                         onClick={this._chooseAvi}
                                    />
                                </button>
                            }
                        />

                        <img alt="User Avatar" className="img"
                             src={require("../images/icons/" + localStorage.getItem("avi") + ".png")}
                        />
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
                        <table className="profile-info-table">
                            <tr>
                                <td className="profile-field-entry">{localStorage.getItem("bio")}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            )
        } else {
            return (
                <Redirect to={{
                    pathname: '/editProfile',
                }}/>
            )
        }
    }

}