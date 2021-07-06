import React from "react";

import Dashboard from './pages/dashboard';
import Contact from './pages/accounts';
import Tasks from './pages/tasks';
import Calendar from './pages/calendar';
import Deals from './pages/deals';
import Login from './pages/login';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Clients from "./pages/clients";
import Leads from "./pages/leads";
import Accounts from "./pages/accounts";
import Profile from "./pages/profile";


class Navigation extends React.Component {


    render() {
        // var login = this.props.auth.auth;
        var login = true;
        if(login){
            return(
                <Router>
                    <div className="wrapper">
                        <Sidebar />
                        <Redirect strict from="/" to="/dashboard/operational" />
                        <Route path="/dashboard">
                            <Dashboard />
                        </Route>
                        <Route exact path="/tasks" component={Tasks}/>
                        <Route exact path="/deals" component={Deals}/>
                        <Route exact path="/calendar" component={Calendar}/>
                        <Route exact path="/leads" component={Leads} />
                        <Route exact path="/clients" component={Clients} />
                        <Route exact path="/accounts" component={Accounts} />
                        <Route path="/profile">
                            <Profile />
                        </Route>
                    </div>
                </Router>
            );
        }else {
            return(
                <Router>
                    <Route exact path="/" component={Login}/>
                </Router>);
        }
    }

}


const mapStateToProps = state => {
    return {
        auth:state.authReducer
    }
}

export default connect(mapStateToProps,null)(Navigation);