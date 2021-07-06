import React from "react";

import {FaBell, IoMdSettings, MdClose,
    FaUserCircle, IoMdExit} from "react-icons/all";
import { CSSTransition } from 'react-transition-group';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";


const TitleBar = (props) => {
    return (
        <div className={"titlebar " + (props.className)}>
            <div className="titlebar-text">{props.title}</div>
            <div className="title-toolbar">
                {props.search}
                {props.children}
            </div>
        </div>
    );
}

const TitleBarCondensed = (props) => {
    return(
        <div className={"titlebar " + (props.className)}>
            <div className="titlebar-text">{props.title}</div>
            <div className="title-toolbar">
                {props.children}
            </div>
        </div>
    );
}

const Actions = {
    Notification: "Notifications",
    Settings: "Settings"
}

class TitleBarActions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
            activePane: "",
            menuHeight: null,
        }

        this.openDropdown = this.openDropdown.bind(this);
        this.closeDropdown = this.closeDropdown.bind(this);

        this.wrapperRef = React.createRef();
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
            this.closeDropdown();
        }
    }

    openDropdown(pane) {
        if(this.state.expanded) {
            this.setState({activePane: pane});
        }
        else {
            this.setState({
                expanded: true,
                activePane: pane,
            });
        }
    }

    closeDropdown() {
        if(this.state.expanded) {
            this.setState({
                expanded: false,
                activePane: "",
            });
        }
    }

    calcHeight = (height) => {
        this.setState({
            menuHeight: height,
        })
    }

    render() {
        return (
            <div className={"titlebar-actions " + (this.props.className) +
            (this.state.expanded ? " open" : "")} style={{ height: this.state.menuHeight }}
                 ref={this.wrapperRef}>
                <div className="action-header">

                    {this.state.expanded ? <DropdownTitle activeAction = {this.state.activePane}/> : null}

                    <div className="actions-wrapper">
                        {(!this.state.expanded || (this.state.expanded && this.state.activePane === Actions.Settings)) ?
                        <FaBell className="action-button" onClick={() => this.openDropdown(Actions.Notification)}/> : null}

                        {(!this.state.expanded || (this.state.expanded && this.state.activePane === Actions.Notification)) ?
                            <IoMdSettings className="action-button" onClick={() => this.openDropdown(Actions.Settings)}/> : null}
                        {(this.props.actions === null || this.props.actions === undefined) ? null :
                            <div className="extra-actions">{this.props.actions}</div>}
                    </div>
                </div>
                <ActionDropdown updateHeight={this.calcHeight}  activeMenu={this.state.activePane} />
            </div>
        );

    }
}

class DropdownTitle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hidden: "hidden",
        }
    }

    componentDidMount() {
        let that = this;
        setTimeout(function() {
            that.show();
        }, 400);
    }

    show = () => {
        this.setState({hidden : ""});
    }


    render() {
        return (
            this.props.activeAction === Actions.Settings ?
                <Link to="/profile/preferences" className={"settings-header " + (this.state.hidden)}>
                    <div className="pic-wrapper">< FaUserCircle className="user-pic"/></div>
                    <div className="profile-link">
                        <div className="user-name">Dave Smith</div>
                    </div>
                </Link>

                : <span className={"dropdown-title " +(this.state.hidden)}>{this.props.activeAction}</span>
        );
    }
}

class ActionDropdown extends React.Component{
    constructor(props) {
        super(props);
        console.log(props.activeMenu);
        this.state = {
            activeMenu: props.activeMenu,
            menuHeight: null
        }
    }


    componentWillReceiveProps(props) {
        if(this.state.activeMenu === "") {
            setTimeout(function () {
                this.setState({activeMenu: props.activeMenu});
            }.bind(this), 300);
        }
        else {
            this.setState({activeMenu: props.activeMenu});
        }
    }

    calcHeight = (el) => {
        let height = el.offsetHeight;
        this.props.updateHeight(height + 90);
    }

    changeMenu = (menu) => {
        this.setState({
            activeMenu: menu
        });
    }

    render() {
        return (
            <div className="action-dropdown">
                <CSSTransition
                    in={this.state.activeMenu === Actions.Notification}
                    timeout={400}
                    classNames="menu-primary"
                    onEnter={this.calcHeight}
                    unmountOnExit>
                    <div className="menu notifications" style={{ height: this.state.menuHeight }}>
                        <hr className="menu-divider" />
                        <NotificationItem>First Notification</NotificationItem>
                        <NotificationItem>Second Notification</NotificationItem>
                        <NotificationItem>Third Notification</NotificationItem>
                        <NotificationItem>Fourth Notification</NotificationItem>
                        <NotificationItem>Fifth Notification</NotificationItem>
                    </div>
                </CSSTransition>

                <CSSTransition
                    in={this.state.activeMenu === Actions.Settings}
                    timeout={400}
                    classNames="menu-secondary"
                    onEnter={this.calcHeight}
                    unmountOnExit>
                    <div className="menu settings">
                        <hr className="menu-divider" />
                        <DropdownItem to="/profile/security" leftIcon={<IoMdSettings className="menu-icon" />}>Settings</DropdownItem>
                        <DropdownItem to="/logout" leftIcon={<IoMdExit className="menu-icon" />}>Logout</DropdownItem>
                    </div>
                </CSSTransition>
            </div>
        );
    }
}

const DropdownItem = (props) => {
    return(
        <Link to={props.to} className="menu-item">
            <span className="menu-button">{props.leftIcon}</span>
            {props.children}
        </Link>
    );
}

const NotificationItem = (props) => {
    return(
        <a href="#" className="notification-item">
            {props.children}
        </a>
    );
}

export { TitleBarActions, TitleBar, TitleBarCondensed }