import React from "react";
import "../assets/scss/main.scss";
import '../assets/scss/pages/contacts.scss'

import SearchBar from "../components/searchbar";
import { IoIosListBox, AiFillAppstore} from "react-icons/all";
import BottomBar from "../components/bottom-bar";

import {TitleBar, TitleBarActions} from "../components/title-bar";
import ClientsContent from "./snippets/clients-content";

class Clients extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contentStyle: "list",
            currentIndex: 0,
            searchTerm: "",
            lexTerm: "",
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

    alphabeticFilter = (val) => {
        if(this.state.contentStyle === "list") {
            this.setState({
                lexTerm: val,
            })
        }
    }

    clear = () => {
        if(this.state.lexTerm !== "") {
            this.setState({
                lexTerm: "",
            });
        }
    }

    render() {
        return (
            <div className="view-wrapper contacts">
                <div className="contacts-wrapper">
                    <TitleBar title="Clients" search={<SearchBar searchValue={this.filterTable} />}>
                        <TitleBarActions actions = {
                            this.state.contentStyle === "card" ?
                                <AiFillAppstore className="action-button" onClick={this.setViewTypeList}/> :
                                <IoIosListBox className="action-button" onClick={this.setViewTypeCards}/>
                        } />
                    </TitleBar>
                    <ClientsContent
                        lexTerm={this.state.contentStyle ==="list" ? this.state.lexTerm : ""}
                        searchTerm={this.state.contentStyle ==="list" ? this.state.searchTerm : ""}
                        viewtype={this.state.contentStyle} />
                </div>
                <BottomBar clear={this.clear} onDataFilter={this.filterTable} />
            </div>
        );

    }
}

export default Clients;