import React from "react";
// import 'datatables.net-dt/css/jquery.dataTables.css';
import '../assets/scss/main.scss';

const $ = require('jquery');
$.DataTable = require('datatables.net');

class Tables extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            headerLength: 5,
        }
    }

    componentDidMount() {
        this.$el = $(this.el);
        let length = Array.from(document.getElementsByClassName("table-view"))[0].clientHeight - 60;
        length /= 62;
        length = Math.trunc(length);
        this.$el.DataTable({
            dom: 't<"table-footer"p>',
            pageLength: length,
        });
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.lexTerm != null && this.props.lexTerm !== "") {
            const table = this.$el.DataTable();
            let lexSearch = "";
            if (this.props.lexTerm === '#') {
                for (let i = 0; i < 9; i++) {
                    lexSearch += ("^" + i + "|");
                }
                lexSearch += ("^" + 9);
            } else {
                lexSearch = "^" + this.props.lexTerm;
            }

            if (this.props.searchTerm != null || this.props.searchTerm !== "") {
                const cols = Array.from(Array(this.state.headerLength).keys());
                cols.shift();
                table.columns(0)
                    .search(lexSearch, true, true, true)
                    .column(cols)
                    .search(this.props.searchTerm).draw();
            } else {
                table.columns(0).search(lexSearch, true, true, true).draw();
            }
        }
        else if ((this.props.searchTerm != null || this.props.searchTerm !== "")
            && (this.props.lexTerm)) {
            const table = this.$el.DataTable();
            table.search(this.props.searchTerm).draw();
        }
    }

    componentWillUnmount() {
        this.$el.DataTable().destroy(true);
    }

    render() {
        return (
            <div className="table-view">
                <table className="display pageResize" ref={el => this.el = el}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Domain</th>
                        <th>Assigned To</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>IBM</td>
                        <td>www.ibm.com</td>
                        <td>oderham0@lin.com</td>
                    </tr>
                    <tr>
                        <td>US ARMY</td>
                        <td>www.goarmy.com</td>
                        <td>kvickress1@lin.com</td>
                    </tr>
                    <tr>
                        <td>HEWLETT-PACKARD</td>
                        <td>www.hpe.com</td>
                        <td>jhrishchenko2@lin.com</td>
                    </tr>
                    <tr>
                        <td>COGNIZANT TECHNOLOGY SOLUTIONS</td>
                        <td>www.cognizant.com</td>
                        <td>tbeacock3@lin.com</td>
                    </tr>
                    <tr>
                        <td>WALMART</td>
                        <td>www.walmartcareers.com</td>
                        <td>sstockell4@lin.com</td>
                    </tr>
                    <tr>
                        <td>MICROSOFT</td>
                        <td>www.microsoft.com</td>
                        <td>jhackly5@lin.com</td>
                    </tr>
                    <tr>
                        <td>AT&T</td>
                        <td>www.att.com</td>
                        <td>lnorgan6@lin.com</td>
                    </tr>
                    <tr>
                        <td>UNITED STATES AIR FORCE</td>
                        <td>www.airforce.com</td>
                        <td>lcholwell7@lin.com</td>
                    </tr>
                    <tr>
                        <td>PWC</td>
                        <td>www.pwc.com</td>
                        <td>broyan8@lin.com</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }

}

export default Tables;