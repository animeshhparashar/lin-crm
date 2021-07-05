import React from "react";
import Tables from "../../components/tables";
import CardView, {Card} from "../../components/card-view";

class LeadsContent extends React.Component {
    client = ["5D Investments",
        "JBC Banking Inc",
        "S Cane Sweeteners Ltd",
        "Smith & Sons",
        "South Sea Plumbing Products",
        "T-Squared Techs"];

    render() {
        if(this.props.viewtype === "list") {
            return (
                <Tables pageLength={6} lexTerm={this.props.lexTerm}  searchTerm={this.props.searchTerm} />
            );
        }
        else {
            const cards = [];
            for (let i = 0; i < this.client.length; i++) {
                cards.push(
                    <Card header={this.client[i]} />
                );
            }

            return (
                <CardView>
                    {cards}
                </CardView>
            );
        }
    }
}

export default LeadsContent;