import React from "react";
import "../assets/scss/main.scss";
import "../assets/scss/pages/contacts.scss";

import SearchBar from "../components/searchbar";
import {FaBell, IoMdSettings, HiFilter, IoIosListBox, AiFillAppstore} from "react-icons/all";
import {TabBar, TabView} from "../components/tab-view";
import Leads from "./snippets/leads";
import Clients from "./snippets/clients";
import BottomBar from "../components/bottom-bar";
import {TitleBar} from "../components/title-bar";

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contentStyle: "card",
            currentIndex: 0,
            searchTerm: "",
        }
    }

    handleTabChange = (value) => {
        this.setState({
            currentIndex: value
        });
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
            console.log("Value: " + val);
            this.setState({
                searchTerm: val,
            })
        }
    }

    render() {
        return (
            <div className="content-wrapper">
                <div className="contacts-wrapper">
                    <TitleBar title="Contacts" search={<SearchBar searchValue={this.filterTable} />}>
                        <HiFilter className="action-button"/>
                        {this.state.contentStyle === "card" ?
                            <AiFillAppstore className="action-button" onClick={this.setViewTypeList}/> :
                            <IoIosListBox className="action-button" onClick={this.setViewTypeCards}/>}
                        <FaBell className="action-button"/>
                        <IoMdSettings className="action-button"/>
                    </TitleBar>

                    <TabBar tabChangeNotifier={this.handleTabChange} length={2} tabs={['Leads', 'Clients']} />

                    <TabView currentIndex={this.state.currentIndex} index={0}>
                        <Leads viewtype={this.state.contentStyle} searchTerm={this.state.contentStyle ==="list" ? this.state.searchTerm : ""}/>
                    </TabView>
                    <TabView currentIndex={this.state.currentIndex} index={1}>
                        <Clients viewtype={this.state.contentStyle} searchTerm={this.state.contentStyle ==="list" ? this.state.searchTerm : ""}/>
                    </TabView>
                </div>
                <BottomBar onDataFilter={this.filterTable} />
            </div>
        );
    }
}

export default Contacts;
