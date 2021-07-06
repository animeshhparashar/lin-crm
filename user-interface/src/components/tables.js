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
        this.$el = $(this.el)
        this.$el.DataTable({
            dom: 't<"table-footer"p>',

        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.props.lexTerm);
        if(this.props.lexTerm != null && this.props.lexTerm !== "") {
            const table = this.$el.DataTable();
            let lexSearch = "";
            if(this.props.lexTerm === '#') {
                for (let i = 0; i < 9; i++) {
                    lexSearch+=("^" + i + "|");
                }
                lexSearch+=("^" + 9);
            }else{
                lexSearch = "^" + this.props.lexTerm;
            }

            if(this.props.searchTerm != null || this.props.searchTerm !== "") {
                const cols = Array.from(Array(this.state.headerLength).keys());
                cols.shift();
                table.columns(0)
                    .search(lexSearch, true, true, true)
                    .column(cols)
                    .search(this.props.searchTerm).draw();
            }
            else {
                table.columns(0).search(lexSearch, true, true, true).draw();
            }
        }
        else if (this.props.searchTerm != null || this.props.searchTerm !== "") {
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
                        <th>City</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>Email Address</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Christopher Beck</td>
                        <td>Jodawi</td>
                        <td>1868 Lurgu Parkway</td>
                        <td>9304725107</td>
                        <td>123@hola.com</td>
                    </tr>
                    <tr>
                        <td>AB Drivers Limited</td>
                        <td>Kansas City</td>
                        <td>USA</td>
                        <td>(157) 467-6075</td>
                        <td>bibosza@mailinator.com</td>
                    </tr>
                    <tr>
                        <td>NW Capital Corp</td>
                        <td>San Jose</td>
                        <td>USA</td>
                        <td>(678) 359-0310</td>
                        <td>dev.vegan@example.info</td>
                    </tr>
                    <tr>
                        <td>5D Investments</td>
                        <td>Persistance</td>
                        <td>USA</td>
                        <td>(893) 969-8036</td>
                        <td>vegan.info@example.it</td>
                    </tr>
                    <tr>
                        <td>JBC Banking Inc</td>
                        <td>St. Petersburg</td>
                        <td>USA</td>
                        <td>(918) 401-8639</td>
                        <td>the.beans.qa@example.tw</td>

                    </tr>
                    <tr>
                        <td>DD Furniture Inc</td>
                        <td>Sunnyvale</td>
                        <td>USA</td>
                        <td>(152) 507-0904</td>
                        <td>section.beans.kid@example.cn</td>
                    </tr>
                    <tr>
                        <td>B.H. Edwards Inc</td>
                        <td>Ohio</td>
                        <td>USA</td>
                        <td>(817) 730-8298</td>
                        <td>the60@example.net</td>
                    </tr>
                    <tr>
                        <td>S Cane Sweeteners Ltd</td>
                        <td>Salt Lake City</td>
                        <td>USA</td>
                        <td>(234) 201-9320</td>
                        <td>phone18@example.net</td>
                    </tr>
                    <tr>
                        <td>TJ O'Rourke Inc</td>
                        <td>Santa Fe</td>
                        <td>USA</td>
                        <td>(947) 833-7548</td>
                        <td>sugar.dev.support@example.tw</td>
                    </tr>
                    <tr>
                        <td>Jungle Systems Inc</td>
                        <td>Santa Fe</td>
                        <td>USA</td>
                        <td>(382) 825-2449</td>
                        <td>dev39@example.net</td>
                    </tr>
                    <tr>
                        <td>T-Squared Techs</td>
                        <td>Salt Lake City</td>
                        <td>USA</td>
                        <td>(961) 048-5621</td>
                        <td>dev.kid.im@example.com</td>
                    </tr>
                    <tr>
                        <td>Insight Marketing Inc</td>
                        <td>San Mateo</td>
                        <td>USA</td>
                        <td>(628) 416-4422</td>
                        <td>beans85@example.co.uk</td>

                    </tr>
                    <tr>
                        <td>5D Investments</td>
                        <td>Ohio</td>
                        <td>USA</td>
                        <td>(364) 610-7719</td>
                        <td>kid.sugar.vegan@example.co.jp</td>
                    </tr>
                    </tbody>
                </table>
            </div>

        );
    }

}

export default Tables;