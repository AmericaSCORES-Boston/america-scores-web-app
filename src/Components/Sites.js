import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import '../ManageAccounts.css'
import icon from '../Assets/Location.png';

class Sites extends Component {
  render() {

    /*function onRowSelect(row, isSelected){
      console.log(row);
      console.log("selected: " + isSelected)
    }*/

    var testdata = [
      {name: 'Location1'},
      {name: 'Location2'},
      {name: 'Location3'},
      {name: 'Location4'},
      {name: 'Location5'}
    ];

    var selectRowProp = {
      mode: "radio",
      clickToSelect: true,
      bgColor: "rgb(238, 193, 213)",
      onSelect: onRowSelect,
      hideSelectColumn: true
    };

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-3"></div>
          <div className="col-xs-6 text-center">
            <img src={icon} className="img-responsive center-block" alt="logo" />
            <h1 className="Account-header"> Manage Accounts </h1>
            <BootstrapTable data={testdata} triped={true} hover={true} condensed={true} selectRow={selectRowProp}>
              <TableHeaderColumn isKey={true} dataField="name">Location Name</TableHeaderColumn>
            </BootstrapTable>
          </div>
        </div>
      </div>
      );
  }

}
export default Sites;