import React from "react";

import "../assets/scss/main.scss";
import "../assets/scss/pages/dashboard.scss";
import {TitleBar, TitleBarActions, TitleBarCondensed} from "../components/title-bar";
import SearchBar from "../components/searchbar";
import {Route, Switch} from "react-router-dom";
import {AiFillAppstore, IoIosListBox} from "react-icons/all";

class Dashboard extends React.Component {

    render() {
        return (
            <div className="view-wrapper">
                <Switch>
                    <Route path="/dashboard/operational" component={Operational} />
                    <Route path="/dashboard/analytics" component={Analytical} />
                </Switch>
            </div>
        );

    }
}

class Operational extends React.Component {

    render() {
        return(
            <div className="dashboard-wrapper">

                <div className="details-pane">
                    <TitleBarCondensed title={"Dashboard"}>
                        <SearchBar className={"light"}/>
                    </TitleBarCondensed>

                    <div className="action-cards">
                        <div className="card">
                            <div className="card-icon"></div>
                            <div className="card-text"></div>
                        </div>

                        <div className="card">
                            <div className="card-icon"></div>
                            <div className="card-text"></div>
                        </div>

                        <div className="card">
                            <div className="card-icon"></div>
                            <div className="card-text"></div>
                        </div>
                    </div>

                    <div className="list-cards">
                        <div className="card"></div>
                        <div className="card"></div>
                    </div>

                </div>

                <DashboardOverview />
            </div>
        );
    }
}

class Analytical extends React.Component {

    render() {
        return(
            <div className="dashboard-wrapper">

                <div className="details-pane">
                    <TitleBar title="Dashboard"
                              search={<SearchBar className={"light"} />}>
                        <TitleBarActions className={"light"} />
                    </TitleBar>

                    <div className="chart-overview-cards">
                        <div className="chart-card"></div>
                        <div className="overview-card"></div>
                    </div>

                    <div className="list-cards">
                        <div className="card"></div>
                        <div className="card"></div>
                    </div>

                </div>
            </div>
        );
    }
}

const DashboardOverview = (props) => {
    return(
        <div className="dashboard-overview">
            <div className="operational-details">
                <div className="title-toolbar">
                    <TitleBarActions/>
                </div>
            </div>
            <div className="analytical-details">

            </div>

        </div>
    );
}

export default Dashboard;