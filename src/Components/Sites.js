import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import '../Main.css'
import icon from '../Assets/Location.png';
import Api from '../api';

/*
The page for showing which sites are available
*/
var Sites = React.createClass({

  getInitialState: function() {
    return {
      locations: [],
      selectedRowId: 0
    }
  },

  //Sets the state based on query parameters
  componentDidMount: function() {
    let _this = this;
    let data = [];
    Api.fetchSites().then(json => {
      for (let i = 0; i < json.length; i++) {
        data.push({name: json[i].site_name, id: json[i].site_id});
      }
      _this.setState({
        locations : data
      })
    });
  },

  //redirects to program page with selectedRowId from state
  seeProgramsOfSelectedSite: function() {
    window.location = '/Programs?location=' + this.state.selectedRowId;
  },

  render: function() {
    let _this=this;
    function onRowSelect(row, isSelected) {
      if (isSelected)
        _this.setState({selectedRowId:row.id});
      else
        _this.setState({selectedRowId:0});
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
            <div className="download-elements">
              <button onClick={_this.seeProgramsOfSelectedSite}>See Programs</button>
            </div>
          </div>
        </div>
      </div>
      );
  }

})

export default Sites;