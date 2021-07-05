import React from "react";
import Tables from "../../components/tables";
import CardView, {Card} from "../../components/card-view";

class Opportunities extends React.Component {

    client = ["5D Investments",
        "JBC Banking Inc",
        "S Cane Sweeteners Ltd",
        "Smith & Sons",
        "South Sea Plumbing Products",
        "T-Squared Techs"];

    opp = ["1000 units ordered",
        "10000 units ordered",
        "4000 units ordered",
        "700 units ordered",
        "3000 units ordered",
        "4500 units ordered"]

    stat = [
        "Needs Analysis",
        "Proposal/Price Quote",
        "Perception Analysis",
        "Value Proposition",
        "Closed Won",
        "Prospecting"
    ]

    render() {
        if(this.props.viewtype === "list") {
            return (
                <Tables pageLength={6} searchTerm={this.props.searchTerm} />
            );
        }
        else {
            const cards = [];
            for (let i = 0; i < this.client.length; i++) {
                cards.push(
                    <Card tag={this.client[i]} status={this.stat[i]} >
                        {this.opp[i]}
                    </Card>
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

export default Opportunities;