import React from "react";

import "../assets/scss/main.scss";
import "../assets/scss/pages/dashboard.scss";
import {TitleBar, TitleBarActions, TitleBarCondensed} from "../components/title-bar";
import SearchBar from "../components/searchbar";
import {Route, Switch} from "react-router-dom";
import {
    AiFillAppstore,
    IoIosListBox,
    MdDonutLarge,
    MdTimeline,
    RiContactsBook2Line,
    RiFileListLine
} from "react-icons/all";
import {Bar} from "react-chartjs-2";

class Dashboard extends React.Component {

    render() {
        return (
            <div className="view-wrapper dashboard">
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

                <div className="details-pane operational">
                    <TitleBarCondensed className={"header"} title={"Dashboard"}>
                        <SearchBar className={"light"}/>
                    </TitleBarCondensed>
                    <div className="action-cards">
                        <div className="card">
                            <div className="card-title"><span className="card-heading">Tasks</span></div>
                            <div className="card-body">
                                <span className="card-subtitle">9</span>
                                <div className="card-icon"><RiFileListLine className="item-icon"/></div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-title"><span className="card-heading">Deals</span></div>
                            <div className="card-body">
                                <span className="card-subtitle">12</span>
                                <div className="card-icon"><MdDonutLarge className="item-icon"/></div>
                            </div>

                        </div>

                        <div className="card">
                            <card class="card-title"><span className="card-heading">Leads</span></card>
                            <div className="card-body">

                                <span className="card-subtitle">21</span>
                                <div className="card-icon"><MdTimeline className="item-icon" /></div>
                            </div>

                        </div>
                        <div className="card">
                            <card class="card-title"><span className="card-heading">Accounts</span></card>
                            <div className="card-body">
                                <span className="card-subtitle">92</span>
                                <div className="card-icon"><RiContactsBook2Line className="item-icon"/></div>
                            </div>
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

                <div className="details-pane analytics">
                    <TitleBar className={"header"} title="Dashboard"
                              search={<SearchBar className={"light"} />}>
                        <TitleBarActions className={"light"} />
                    </TitleBar>

                    <div className="stats-cards">
                        <div className="card"></div>
                        <div className="card"></div>
                    </div>

                    <div className="list-cards">
                        <div className="card"></div>
                        <div className="card"></div>
                        <div className="card"></div>
                    </div>

                </div>
            </div>
        );
    }
}

const DashboardOverview = (props) => {
    const labels = ["JAN", "FEB", "MAR", "APR", "MAY"];

    const data = {
        labels: labels,
        datesets: [
            {
                data: labels.map(() => {
                    return [Math.floor(Math.random() * (85 - 50) ) + 25, Math.floor(Math.random() * (50 - 25) ) + 25,]
                })
            }
        ]
    }
    const options={
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Monthly Stats'
                }
            }
        }
    }
    return(
        <div className="dashboard-overview">
            <div className="operational-details">
                <div className="title-toolbar">
                    <TitleBarActions/>
                </div>
            </div>
            <div className="analytical-details">
                <Bar data={data} options={options} />
            </div>

        </div>
    );
}

export default Dashboard;