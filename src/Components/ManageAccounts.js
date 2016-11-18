import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import '../ManageAccounts.css'
import icon from '../Assets/Accounts-icon.png';

class ManageAccountsManager extends Component {
  render() {
    function onRowSelect(row, isSelected){
      console.log(row);
      console.log("selected: " + isSelected)
    }
    var testdata = [
    {name: 'Guy 1', type: 'Coach', permissions: 'Program 1, Program 2'},
    {name: 'Guy 2', type: 'Volunteer', permissions: 'Program 3'},
    {name: 'Guy 3', type: 'Coach', permissions: 'Program 4'},
    {name: 'Girl 1', type: 'Volunteer', permissions: 'Program 2'},
    {name: 'Girl 2', type: 'Coach', permissions: 'Program 4'},
    {name: 'Girl 3', type: 'Coach', permissions: 'Program 5'},
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
      <TableHeaderColumn isKey={true} dataField="name">Name</TableHeaderColumn>
      <TableHeaderColumn dataField="type">Account Type</TableHeaderColumn>
      <TableHeaderColumn dataField="permissions">Program Permissions</TableHeaderColumn>
      </BootstrapTable>
      </div>
      </div>
      </div>
      );
  }
}
export  default  ManageAccountsManager;