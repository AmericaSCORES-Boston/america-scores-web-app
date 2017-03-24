import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import icon from '../Assets/User.png';
import Api from '../api';

/*
Page for Rendering all the students
*/
var Students = React.createClass({

  getInitialState: function() {
    return {
      allStudent: []
    }
  },

  //decides how to/ what data to get
  componentDidMount: function() {
    let _this = this;
    let data = [];
    let queryParamProgramId = this.props.location.query.program;

    //if there is no parameter, it
    if (queryParamProgramId === undefined) {
      Api.getAllStudents().then(json => {
        for (let i = 0; i < json.length; i++) {
          data.push({name: (json[i].student_name + " " +
                           json[i].student_site)});
        }
        _this.setState({
          allStudent : data
        })
      });
    }
    else if (queryParamProgramId < 1) {
      _this.setState({
        allStudent : [{name: "Error: No Program Chosen"}]
      })
    }
    else {
      Api.fetchStudents(queryParamProgramId).then(json => {
        for (let i = 0; i < json.length; i++) {
          data.push({name: (json[i].student_name + " " +
                           json[i].student_site)});
        }
        _this.setState({
          allStudent : data
        })
      });
    }
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
                <h1 className="Account-header"> Students </h1>
                <BootstrapTable data={this.state.allStudent} triped={true} hover={true} condensed={true}
                                selectRow={selectRowProp}>
                    <TableHeaderColumn isKey={true} dataField="name">Name</TableHeaderColumn>
                    <TableHeaderColumn dataField="DateofBirth">Date Of Birth(yyyy-mm-dd)</TableHeaderColumn>
                </BootstrapTable>
                <div className="download-elements">
                    <a href='/addStudent'><button>Add student</button></a>
                </div>

          </div>
        </div>
      </div>
      );
  }

})
export default Students;