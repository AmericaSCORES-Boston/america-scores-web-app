import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import icon from '../Assets/User.png';

class StudentManager extends Component {
  componentDidMount() {

  }
  render() {
    function onRowSelect(row, isSelected){
    }
    var testdata = [
      {name: 'A', dob: '11/11/1111', locations: 'l1, l2, l3'},
      {name: 'B', dob: '11/11/1111', locations: 'l1, l2, l3'},
      {name: 'C', dob: '11/11/1111', locations: 'l1, l2, l3'},
      {name: 'D', dob: '11/11/1111', locations: 'l1, l2, l3'},
      {name: 'E', dob: '11/11/1111', locations: 'l1, l2, l3'}
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
      <h1 className="Student-header"> STUDENT </h1>
      <BootstrapTable data={testdata} triped={true} hover={true} condensed={true} selectRow={selectRowProp}>
      <TableHeaderColumn isKey={true} dataField="name">Name</TableHeaderColumn>
      <TableHeaderColumn dataField="locations">Locations</TableHeaderColumn>
      </BootstrapTable>
      </div>
      </div>
      </div>
      );
  }
}
export  default  StudentManager;