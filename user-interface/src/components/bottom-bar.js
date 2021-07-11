import React from "react";

import '../assets/scss/main.scss';
import {MdAdjust, MdBlurOn} from "react-icons/all";

class BottomBar extends React.Component {

    constructor(props) {
        super(props);
    }

    onFilterChange = (value) => {
        this.props.onDataFilter(value);
        var element = document.querySelector(".filter-button.active");
        if(element != null) element.classList.remove("active");

        if(value === '#') document.getElementById('num').classList.add("active");
        else document.getElementById(value).classList.add("active");
    }

    clearLexTerm = () => {
        this.props.clear();
    }

    render() {
        const filterButtons = [];
        filterButtons.push(
            <div className="filter-button" id="clear" onClick={() => this.clearLexTerm()}>
                <MdAdjust className="clear-icon" />
            </div>
        );
        filterButtons.push(
            <div className="filter-button" id={"num"} onClick={() =>
                this.onFilterChange('#')}>{'#'}</div>
        );
        for(let i=1; i <= 26; i++) {
            filterButtons.push(
                <div className="filter-button" id={String.fromCharCode((i+64))} onClick={() =>
                    this.onFilterChange(String.fromCharCode((i+64)))}>{String.fromCharCode((i+64))}</div>
            );
        }
        return(
            <div className="bottom-bar">
                <div className="filter-box">
                    {filterButtons}
                </div>

                <button className="manage-button">Manage</button>

            </div>
        );
    }

}
export default BottomBar;