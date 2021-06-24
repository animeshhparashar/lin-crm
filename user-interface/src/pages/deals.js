import React from "react";
import "../assets/scss/main.scss";
import '../assets/scss/pages/opportunities.scss'

import SearchBar from "../components/searchbar";
import {FaBell, IoMdSettings, IoIosListBox, AiFillAppstore} from "react-icons/all";
import BottomBar from "../components/bottom-bar";

import Opportunities from "./snippets/opportunities";
import {TitleBar} from "../components/title-bar";

class Deals extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contentStyle: "card",
            currentIndex: 0,
            searchTerm: "",
        }
    }

    setViewTypeList = () => {
        this.setState({
            contentStyle: "list",
        });
    }
    setViewTypeCards = () => {
        this.setState({
            contentStyle: "card",
        });
    }

    filterTable = (val) => {
        if(this.state.contentStyle === "list") {
            this.setState({
                searchTerm: val,
            })
        }
    }

    render() {
        return (
            <div className="content-wrapper">
                <div className="deals-wrapper">
                    <TitleBar title="Deals" search={<SearchBar searchValue={this.filterTable} />}>
                        <FaBell className="action-button"/>
                        <IoMdSettings className="action-button"/>
                        {this.state.contentStyle === "card" ?
                            <AiFillAppstore className="action-button" onClick={this.setViewTypeList}/> :
                            <IoIosListBox className="action-button" onClick={this.setViewTypeCards}/>}
                    </TitleBar>
                    <Opportunities
                        searchTerm={this.state.contentStyle ==="list" ? this.state.searchTerm : ""}
                        viewtype={this.state.contentStyle} />
                </div>
                <BottomBar onDataFilter={this.filterTable} />
            </div>
        );

    }
}

export default Deals;