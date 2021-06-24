import React from "react";
import '../assets/scss/components/_card-view.scss'

import { FaTag } from "react-icons/all";

class CardView extends React.Component {
    constructor(props) {
        super(props);
    }
    client = ["5D Investments",
        "JBC Banking Inc",
        "S Cane Sweeteners Ltd",
        "Smith & Sons",
        "South Sea Plumbing Products",
        "T-Squared Techs"];

    opp = ["5D Investments - 1000 units",
        "JBC Banking Inc - 1000 units",
        "S Cane Sweeteners Ltd - 1000 units",
        "Smith & Sons - 1000 units",
        "South Sea Plumbing Products - 1000 units",
        "T-Squared Techs - 1000 units"]

    stat = [
        "Needs Analysis",
        "Proposal/Price Quote",
        "Perception Analysis",
        "Value Proposition",
        "Closed Won",
        "Prospecting"
    ]

    render() {
        return (
            <div className="card-view">
                {this.props.children}
            </div>
        );
    }
}

export default CardView;

export const Card = (props) => {
    return(
        <div className="card">
            {props.header != null ?
                <div className="card-header">
                    {props.header}
                </div>
                : null}
            <div className="card-body">
                <div className="body-text">
                    {props.children}
                </div>
                {props.tag != null ?
                    <div className="tag">
                        <FaTag className="tag-icon"/>
                        {props.tag}
                    </div>
                    : null}
            </div>
            <div className="card-footer">
                <div className="card-actions">
                    <button className="card-button">View</button>
                </div>
            </div>
        </div>
    );
}