import React from "react";

import '../assets/scss/main.scss';

class BottomBar extends React.Component {

    constructor(props) {
        super(props);
    }

    onFilterChange = (value) => {
        this.props.onDataFilter(value);

        var element = document.querySelector(".filter-button.active");
        if(element != null) element.classList.remove("active");
        document.getElementById(value).classList.add("active");
    }

    render() {
        const filterButtons = [];
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