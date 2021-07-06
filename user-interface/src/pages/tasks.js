import React from "react";

import "../assets/scss/main.scss";
import '../assets/scss/pages/tasks.scss';
import {
    AiOutlinePlus,
    IoCheckmarkDoneCircle,
    MdDoneAll,
} from "react-icons/all";
import SearchBar from "../components/searchbar";
import {TabBar, TabView} from "../components/tab-view";
import CollapsibleDiv from "../components/collapsible-div";
import {TitleBarActions, TitleBarCondensed} from "../components/title-bar";

class Tasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
        }
    }

    handleTabChange = (value) => {
        this.setState({
            currentIndex: value
        });
    }

    render() {

        return (
            <div className="view-wrapper">
                <div className="tasks-wrapper">
                    <div className="tasks-pane">
                        <TitleBarCondensed title="Tasks">
                            <SearchBar className={"light"}/>
                            <div className="add-button">
                                <AiOutlinePlus className="action-button"/>
                            </div>
                        </TitleBarCondensed>
                        <TabBar tabChangeNotifier={this.handleTabChange}
                                length={2} tabs={["Today's Tasks", 'All Tasks']}/>
                        <TabView currentIndex={this.state.currentIndex} index={0}>
                            <div className="scroller">
                                <CollapsibleDiv header={"Ongoing"}>
                                    <table className="tasks">
                                        <thead>
                                        <tr className="task-list-header">
                                            <th></th>
                                            <th>Title</th>
                                            <th>Process</th>
                                            <th>Client</th>
                                            <th>Deadline</th>
                                            <th></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <Task header={"High Priority Task"} client={"South Sea Plumbing Products"}
                                              deadline={"17:00"} priority={"high"} tag={"Dummy Tag"}/>
                                        <Task header={"High Priority Task"} client={"South Sea Plumbing Products"}
                                              deadline={"17:00"} priority={"high"} tag={"Dummy Tag"}/>
                                        <Task header={"Normal Priority Task"} client={"South Sea Plumbing Products"}
                                              deadline={"17:00"} priority={"normal"} tag={"Dummy Tag"}/>
                                        <Task header={"Low Priority Task"} client={"South Sea Plumbing Products"}
                                              deadline={"17:00"} priority={"low"} tag={"Dummy Tag"}/>
                                        <Task header={"Low Priority Task"} client={"South Sea Plumbing Products"}
                                              deadline={"17:00"} priority={"low"} tag={"Dummy Tag"}/>
                                        </tbody>
                                    </table>
                                </CollapsibleDiv>
                                <CollapsibleDiv header={"Completed"}>
                                    <table className="tasks">
                                        <tbody>
                                        <Task completed={true} header={"Low Priority Task"} client={"South Sea Plumbing Products"}
                                              deadline={"17:00"} priority={"low"} tag={"Dummy Tag"}/>
                                        <Task completed={true} header={"Low Priority Task"} client={"South Sea Plumbing Products"}
                                              deadline={"17:00"} priority={"low"} tag={"Dummy Tag"}/>
                                        </tbody>
                                    </table>
                                </CollapsibleDiv>
                            </div>
                        </TabView>
                        <TabView currentIndex={this.state.currentIndex} index={1}>
                            All Tasks
                        </TabView>
                    </div>
                    <div className="calendar-preview">
                        <div className="title-toolbar">
                            <TitleBarActions />
                        </div>
                        <div className="plan-button">Week Plan</div>
                        <div className="hourly-tasks scroller">

                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

const Task = (props) => {
    return (
        <tr className="task">
            <td className="priority" >
                <div className={"priority-indicator " + (props.priority)} />
            </td>
            <td className={"task-header" + (props.completed ? " completed" : "")}>{props.header}</td>
            <td className="task-tag">{props.tag}</td>
            <td className="client-details">{props.client}</td>
            <td className="deadline-details">{"Until " + (props.deadline)}</td>
            <td className="status">{props.completed ? <IoCheckmarkDoneCircle className="status-complete-icon"/> :
                <MdDoneAll className="status-ongoing-icon"/>}</td>
        </tr>
    );

}

export default Tasks;