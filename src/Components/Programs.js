import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import icon from '../Assets/Location2.png';
import Api from '../api';

/*
The page for showing which sites are available
*/
var Programs = React.createClass({

  getInitialState: function() {
    return {
      programs: [],
      selectedRowId: 0
    }
  },

  //Sets the state based on query parameters
  componentDidMount: function() {
    let _this = this;
    let data = [];
    let queryParamLocationId = this.props.location.query.location;
    if (queryParamLocationId === undefined || queryParamLocationId==='0') {
      _this.setState({programs:[{name:"Error: No Site Chosen"}]});
    }
    else {
      Api.fetchPrograms(queryParamLocationId).then(json => {
        for (let i = 0; i < json.length; i++) {
          data.push({name: json[i].program_name, id: json[i].program_id});
        }
        _this.setState({
          programs : data
        })
      });
    }
  },

  //This function returns whether selectedRowId is 0 and therefore button should be disabled
  isNoRowSelected: function() {
    return this.state.selectedRowId === 0;
  },

  //this function sends the user back to the Sites page
  goBack: function() {
    window.location = '/Sites';
  },

  //sends the user to the Students page with the currently selectedRowId
  goSeeStudentsOfSelectedProgram: function() {
    window.location = '/Students?program=' + this.state.selectedRowId;
  },

  goToAddProgramPage: function() {
    window.location = '/AddProgram?location=' + this.props.location.query.location;
  },

  //deletes the selected Program
  deleteSelectedProgram() {
    var confirmed = confirm('Are you sure you want to delete this site?');
    if (confirmed) {
      Api.deleteProgram(this.state.selectedRowId).then(() => {window.location.reload()});
    }
    return;
  },

  render: function() {
    let _this = this;
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
            <h1 className="Account-header"> Programs </h1>
            <BootstrapTable data={this.state.programs} triped={true} hover={true} condensed={true} selectRow={selectRowProp}>
              <TableHeaderColumn isKey={true} dataField="name">Program Name(s)</TableHeaderColumn>
            </BootstrapTable>
            <div className="download-elements">
              <button onClick={_this.goBack}>Back</button>
              <button onClick={_this.goSeeStudentsOfSelectedProgram}
                disabled={_this.isNoRowSelected()}>See Students</button> <br/>
              <button onClick={_this.deleteSelectedProgram} disabled={_this.isNoRowSelected()}>Delete Program</button>
              <button onClick={_this.goToAddProgramPage}>Add Program</button>
            </div>
          </div>
        </div>
      </div>
      );
  }

})

export default Programs;