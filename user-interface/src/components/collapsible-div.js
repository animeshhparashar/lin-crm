import React from "react";
import '../assets/scss/main.scss';

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/all';

class CollapsibleDiv extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
        }
    }

    render() {
        return(
            <div className="collapsible-div">
                    <div className="panel-group">
                        <div className="panel panel-default">
                            <div className="panel-heading" onClick={function(){this.setState(
                                {open:!this.state.open})}.bind(this)}>
                                <div className="panel-title">
                                    {this.props.header}
                                </div>
                                <div className="vertical-rule" />
                                {this.state.open ? <MdKeyboardArrowDown className="panel-icon" /> : <MdKeyboardArrowUp className="panel-icon" />}
                            </div>
                            <div className={this.state.open? "panel-collapse": "panel-collapse panel-close"}>
                                {this.props.children}
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}


export default CollapsibleDiv;