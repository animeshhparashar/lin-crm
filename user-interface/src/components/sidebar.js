import React from "react";
import "../assets/scss/main.scss";

import {Link, withRouter} from 'react-router-dom';

import {
    RiHome6Line,
    RiContactsBook2Line,
    RiFileListLine,
    CgCalendar,
    MdDonutLarge,
    MdKeyboardArrowRight, MdKeyboardArrowUp, GiHamburgerMenu
} from "react-icons/all";

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        if(this.props.location.pathname.startsWith("/dashboard/")){
            const loc = this.props.location.pathname.replace("/dashboard/", "").toLowerCase();
            this.state = {
                expanded: true,
                active: loc,
            }
        }
        else {
            this.state = {
                expanded: true,
                active: this.props.location.pathname.replace("/", "").toLowerCase(),
            }
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
                        <GiHamburgerMenu className="sidebar-toggle" onClick={this.toggleSidebar.bind(this)} />
                        <div className="logo-text">
                            <span className="logo-text-primary">Lin</span>
                            <span className="logo-text-secondary">CRM</span>
                        </div>
                    </div>
                    <div className="nav-links">
                        <CollapsibleNavSection title="Dashboard"
                                               className={["operational", "analytics"].includes(this.state.active) ? 'active' : ''}
                                               icon={<RiHome6Line className="item-icon"/>}>
                            <CollapsibleItem title="Operational" to="/dashboard/operational" onClick={this.handleNavChange.bind(this)}/>
                            <CollapsibleItem title="Analytics" to="/dashboard/analytics" onClick={this.handleNavChange.bind(this)}/>
                        </CollapsibleNavSection>

                        <CollapsibleNavSection title="Customers"
                                            className={["leads", "clients", "accounts"].includes(this.state.active) ? 'active' : ''}
                                            icon={<RiContactsBook2Line className="item-icon"/>}>
                            <CollapsibleItem title="Leads" to="/leads" onClick={this.handleNavChange.bind(this)}/>
                            <CollapsibleItem title="Clients" to="/clients" onClick={this.handleNavChange.bind(this)}/>
                            <CollapsibleItem title="Accounts" to="/accounts" onClick={this.handleNavChange.bind(this)}/>
                        </CollapsibleNavSection>

                        <NavItem className={this.state.active === "tasks" ? 'active' : ''} title="Tasks"
                                 onClick={this.handleNavChange.bind(this)}
                                 to="/tasks" icon={<RiFileListLine className="item-icon"/>}/>

                        <NavItem className={this.state.active === "deals" ? 'active' : ''} title="Deals"
                                 onClick={this.handleNavChange.bind(this)}
                                 to="/deals" icon={<MdDonutLarge className="item-icon"/>}/>

                        <NavItem className={this.state.active === "calendar" ? 'active' : ''} title="Calendar"
                                 onClick={this.handleNavChange.bind(this)}
                                 to="/calendar" icon={<CgCalendar className="item-icon"/>}/>
                    </div>
                </div>
            </div>
        );

    }
}

const CollapsibleItem = (props) => {
    return (
        <Link id={props.title}
              to={props.to}
              onClick={props.onClick}
              className={"item"}>
            <span className="item-link">{props.title}</span>
        </Link>
    );
}

class CollapsibleNavSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }

        this.wrapperRef = React.createRef();
        // this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);

    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            this.collapseDiv();
        }
    }

    collapseDiv() {
        this.setState({
            open: false,
        })
    }

    render() {

        return (
            <div
                className={(this.state.open ? "nav-item collapsible " : "nav-item collapsible closed ") + this.props.className} ref={this.wrapperRef}>
                <div className="collapsible-wrapper">
                    <div className="item-heading" onClick={function () {
                        this.setState(
                            {open: !this.state.open})
                    }.bind(this)}>
                        <div className="heading-wrapper">
                            {this.props.icon}
                            <span className="item-title">{this.props.title}</span>
                        </div>
                        {!this.state.open ? <MdKeyboardArrowRight className="control-icon"/> :
                            <MdKeyboardArrowUp className="control-icon"/>}
                    </div>
                    <div className={"collapsible-items " + this.props.className}>
                        <div className="items-wrapper">
                            {this.props.children}
                        </div>
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