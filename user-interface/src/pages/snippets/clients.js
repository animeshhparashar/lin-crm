import React from "react";
import Tables from "../../components/tables";
import CardView from "../../components/card-view";

class Clients extends React.Component {
    render() {
        if(this.props.viewtype === "list") {
            return (
                <Tables pageLength={5} searchTerm={this.props.searchTerm} />
            );
        }
        else {
            return (
                <div>
                    < CardView length={10} />
                </div>
            );
        }
    }
}

export default Clients;