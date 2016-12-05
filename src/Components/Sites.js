import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import '../ManageAccounts.css'
import icon from '../Assets/Location.png';
import Api from '../api';

/*
The page for showing which sites are available
*/
var Sites = React.createClass({

  getInitialState: function() {
    return {
      locations: []
    }
  },

  componentDidMount: function() {
    let _this = this
    let data = []
    console.log("got here")
    Api.fetchSites().then(json => {
      for (let i = 0; i < json.length; i++) {
        console.log(json[i].site_name)
        data.push({name: json[i].site_name});
      }
      _this.setState({
        locations : data
      })
    });
  },

  render: function() {

    function onRowSelect(row, isSelected) {
      console.log(row)
      console.log("selected: " + isSelected)
    }

    var selectRowProp = {
      mode: "radio",
      clickToSelect: true,
      bgColor: "rgb(238, 193, 213)",
      onSelect: onRowSelect,
      hideSelectColumn: true
    }

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-3"></div>
          <div className="col-xs-6 text-center">
            <img src={icon} className="img-responsive center-block" alt="logo" />
            <h1 className="Account-header"> Sites </h1>
            <BootstrapTable data={this.state.locations} triped={true} hover={true} condensed={true} selectRow={selectRowProp}>
              <TableHeaderColumn isKey={true} dataField="name">Location Name</TableHeaderColumn>
            </BootstrapTable>
          </div>
        </div>
      </div>
      );
  }

})

export default Sites;