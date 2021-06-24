import React from "react";

import Dashboard from './pages/dashboard';
import Contact from './pages/contacts';
import Tasks from './pages/tasks';
import Calendar from './pages/calendar';
import Deals from './pages/deals';
import Login from './pages/login';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";


class Navigation extends React.Component {


    render() {
        // var login = this.props.auth.auth;
        var login = true;
        if(login){
            return(
                <Router>
                    <div className="wrapper">
                        <Sidebar />
                        <Route exact path="/" component={Dashboard}/>
                        <Route exact path="/contacts" component={Contact}/>
                        <Route exact path="/tasks" component={Tasks}/>
                        <Route exact path="/deals" component={Deals}/>
                        <Route exact path="/calendar" component={Calendar}/>
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