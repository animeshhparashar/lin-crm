import React from "react";
import "../assets/scss/main.scss";
import "../assets/scss/pages/profile.scss";
import {Link, Route, Switch, withRouter} from "react-router-dom";
import {TitleBarActions} from "../components/title-bar";
import {FaUserCircle} from "react-icons/all";
import {TextField} from "@material-ui/core";
import {Form, FormColumn, FormRow} from "../components/forms";

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: !(props.location.pathname.replace("/profile/", "") === "") ?
                props.location.pathname.replace("/profile/", "").toLowerCase() : "overview"
        }

        this.handleNavigation = this.handleNavigation.bind(this);
    }

    handleNavigation = (title) => {
        this.setState({
            active: title,
        })
    }


    render() {
        return (
            <div className="view-wrapper profile">
                <div className="profile-wrapper">
                    <div className="details-wrapper">
                        <div className="content-links">
                            <ContentLink onClick={this.handleNavigation}
                                         to={"/profile/preferences"}
                                         className={this.state.active === 'preferences' ? "active" : ""}>
                                Preferences
                            </ContentLink>
                            <ContentLink onClick={this.handleNavigation}
                                         to={"/profile/security"}
                                         className={this.state.active === 'security' ? "active" : ""}>
                                Security
                            </ContentLink>
                        </div>
                        <div className="profile-content">
                            <Switch>
                                <Route path="/profile/preferences" component={Preferences}/>
                                <Route path="/profile/security" component={Security}/>
                            </Switch>
                        </div>
                    </div>

                    <ProfileOverview/>
                </div>
            </div>
        );
    }
}

const ProfileOverview = (props) => {
    return (
        <div className="profile-overview">
            <div className="title-toolbar">
                <TitleBarActions className={"light"}/>
            </div>
            <div className="profile-data-wrapper">
                <div className="pic-wrapper">< FaUserCircle className="user-pic"/></div>
                <div className="profile-data">
                    <div className="user-name">Dave Smith</div>
                    <div className="user-email">dave@lin.com</div>
                </div>
            </div>
            <div className="user-data">
                <table className="info">
                    <tr>
                        <td className="heading">Department</td>
                        <td className="data">Sales</td>
                    </tr>
                    <tr>
                        <td className="heading">Title</td>
                        <td className="data">Manager</td>
                    </tr>
                    <tr>
                        <td className="heading">Role</td>
                        <td className="data">Admin</td>
                    </tr>
                    <tr>
                        <td className="heading">Gender</td>
                        <td className="data">Male</td>
                    </tr>
                    <tr>
                        <td className="heading">Birthday</td>
                        <td className="data">21st March 1986</td>
                    </tr>
                    <tr>
                        <td className="heading">Phone</td>
                        <td className="data">+91 98765 43210</td>
                    </tr>

                </table>
            </div>

        </div>
    );
}

const ContentLink = (props) => {
    return (
        <Link onClick={() => props.onClick(props.children.toLowerCase())} className={"link " + props.className}
              to={props.to}>{props.children}</Link>
    );
}

class Security extends React.Component {

    render() {
        return (<div className="content">

            <div className="section">
                <div className="section-header">
                    <span className="header-title">Change Password</span>
                </div>

                <div className="section-body">
                    <span>Fill in the details to update the password.</span>
                    <Form style={{marginTop: '12px'}}>
                        <FormRow>
                            <FormColumn>
                                <TextField fullWidth margin="normal"
                                           id="current-password" type="password"
                                           label="Current Password" variant="outlined"/>
                            </FormColumn>
                        </FormRow>

                        <FormRow>
                            <FormColumn>
                                <TextField fullWidth margin="normal"
                                           id="new-password" type="password"
                                           label="New Password" variant="outlined"/>
                            </FormColumn>

                            <FormColumn>
                                <TextField fullWidth margin="normal"
                                           id="confirm-password" type="password"
                                           label="Confirm Password" variant="outlined"/>
                            </FormColumn>
                        </FormRow>
                    </Form>
                </div>
            </div>
        </div>);
    }
}

class Preferences extends React.Component {

    render() {
        return (
            <div className="content">

            </div>
        );
    }
}

export default withRouter(Profile);