import React from "react";
import "../assets/scss/main.scss";

import {FaSearch} from "react-icons/all";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    search = (event) => {
        this.props.searchValue(event.target.value);
    }

    render() {
        return(
            <div className={"search-box " + (this.props.className)}>
                <input className="search-txt"
                       onChange={(event) => this.search(event)} placeholder="Search"/>
                <span className="search-btn">
                    <FaSearch className="search-ico" />
                </span>
            </div>
        );
    }
}

export default SearchBar;