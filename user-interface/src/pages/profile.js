import React from "react";
import "../assets/scss/main.scss";
import "../assets/scss/pages/profile.scss";
import {Route, Switch } from "react-router-dom";

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <div className="view-wrapper">
                <div className="profile-wrapper">
                    <div className="header-content">
                        Dave Smith
                    </div>
                    <div className="content-wrapper">
                        <div className="content-links">
                            A
                            B
                            C
                        </div>
                        <div className="profile-content">
                            <Switch>
                                <Route path="/profile/overview" component={Overview} />
                                <Route path="/profile/preferences" component={Preferences} />
                                <Route path="/profile/security" component={Security} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class Overview extends React.Component {

    render() {
        return(<div>Overview</div>);
    }
}

class Security extends React.Component {

    render() {
        return(<div>Security</div>);
    }
}

class Preferences extends React.Component {

    render() {
        return(<div>Preferences</div>);
    }
}

export default Profile;