import React from "react";
import "../assets/scss/main.css";

import SidebarToggle from "../assets/icons/SidebarToggle";
import {Link, withRouter} from 'react-router-dom';

import {RiHome6Line, RiContactsBook2Line, RiFileListLine, CgCalendar, MdDonutLarge} from "react-icons/all";

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: true,
            active: !(this.props.location.pathname.replace("/", "") === "") ?
                this.props.location.pathname.replace("/", "").toLowerCase() : "dashboard"
        }
    }

    toggleSidebar() {
        const currentState = this.state.expanded;
        window.dispatchEvent(new Event('resize'));
        this.setState({expanded: !currentState});

    }

    handleNavChange(e) {
        this.setState({active: e.currentTarget.id.toLowerCase()});
    }

    render() {

        return (
            <div className={"sidebar " + (this.state.expanded ? "expanded" : "collapsed")}>
                <div className="nav-content">
                    <div className="logo-container">
                        <div className="logo-text">
                            <span className="logo-text-primary">Lin</span>
                            <span className="logo-text-secondary">CRM</span>
                        </div>
                    </div>
                    <div className="nav-links">
                        <NavItem className={this.state.active === "dashboard" ? 'active' : ''} title="Dashboard" onClick={this.handleNavChange.bind(this)}
                                 to="/" icon={<RiHome6Line className="item-icon"/>}/>
                        <NavItem className={this.state.active === "contacts" ? 'active' : ''} title="Contacts" onClick={this.handleNavChange.bind(this)}
                                 to="/contacts" icon={<RiContactsBook2Line className="item-icon"/>}/>
                        <NavItem className={this.state.active === "tasks" ? 'active' : ''} title="Tasks" onClick={this.handleNavChange.bind(this)}
                                 to="/tasks" icon={<RiFileListLine className="item-icon"/>}/>
                        <NavItem className={this.state.active === "deals" ? 'active' : ''} title="Deals" onClick={this.handleNavChange.bind(this)}
                                 to="/deals" icon={<MdDonutLarge className="item-icon"/>}/>
                        <NavItem className={this.state.active === "calendar" ? 'active' : ''} title="Calendar" onClick={this.handleNavChange.bind(this)}
                                 to="/calendar" icon={<CgCalendar className="item-icon"/>}/>
                    </div>
                </div>
                <div className="profile-data">
                    <div className="data-content">
                        <div className="profile-pic">D</div>
                        <div className="profile-text">Dave Smith</div>
                    </div>
                    <div className="toggle-button">
                        <SidebarToggle onClick={this.toggleSidebar.bind(this)}
                                       className={this.state.expanded ? "expanded" : "collapsed"}/>
                    </div>
                </div>
            </div>
        );

    }
}

const NavItem = props => {
    return (
        <Link id={props.title} to={props.to} onClick={props.onClick} className={"nav-item " + props.className}>
            {props.icon}
            <span className="item-link">{props.title}</span>
        </Link>
    );
}

export default withRouter(Sidebar);