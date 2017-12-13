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
      allStudent: [],
        selectedRowId: 0,
        name:' ',
        dob:' '
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
          data.push({id:(json[i].student_id),name: (json[i].first_name + " " + json[i].last_name), dob: this.formatDate(json[i].dob)});
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
          data.push({id:(json[i].student_id),name: (json[i].first_name + " " + json[i].last_name), dob: this.formatDate(json[i].dob)});
        }
        _this.setState({
          allStudent : data
        })

      });
    }
  },

    isNoRowSelected: function() {
        return this.state.selectedRowId === 0;
    },

    deleteSelectedStudent() {
        var confirmed = confirm('Are you sure you want to delete this Student?');
        if (confirmed) {
            Api.deleteStudent(this.state.selectedRowId).then(() => {window.location.reload()});
        }
        return;
    },

    goEditSelectedStudent: function(programId,name,dob) {
        window.location = '/EditStudent?student='+this.state.selectedRowId+'&program='+programId+'&name='+name+'&dob='+dob;
    },

    formatDate(date) {
    var d = new Date(date+':00:00:00'),
        month = '' + (d.getMonth() + 1), day = '' + d.getDate(),year = d.getFullYear();
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        return [year, month, day].join('-');
    },

    render: function() {
      let _this=this;
      let programId=this.props.location.query.program;

      var path ='/addStudent?program='+programId;
        function onRowSelect(row, isSelected){
            if(isSelected){
                _this.setState({
                    selectedRowId:row.id,
                    name:row.name,
                    dob:row.dob
                });

            }
            else
                _this.setState({selectedRowId:0});
        }

        function onSelectAll(isSelected, rows) {
            alert(`is select all: ${isSelected}`);
            if (isSelected) {
                alert('Current display and selected data: ');
            } else {
                alert('unselect rows: ');
            }
            for (let i = 0; i < rows.length; i++) {
                alert(rows[i].id);
            }
        }

    var selectRowProp = {
      mode: "radio",
      clickToSelect: true,
      bgColor: "rgb(238, 193, 213)",
      onSelect: onRowSelect,
      hideSelectColumn: true,
        onSelectAll: onSelectAll

    }

    return (
      <div className="container-fluid">
        <div className="row">
            <div className="col-md-3"></div>

            <div className="col-xs-6 text-center">
                <img src={icon} className="img-responsive center-block" alt="logo" />
                <h1 className="Account-header"> Students </h1>
            </div>
                <BootstrapTable data={this.state.allStudent}
                                striped
                                hover
                                condensed
                                pagination
                                search
                                selectRow={selectRowProp}>
                    <TableHeaderColumn isKey={true} dataField="id" width='100'>Student ID</TableHeaderColumn>
                    <TableHeaderColumn dataField="name">Name</TableHeaderColumn>
                    <TableHeaderColumn dataField="dob">Date Of Birth</TableHeaderColumn>
                </BootstrapTable>

            <div className="col-xs-12 text-center">
                <div className="download-elements">
                    <a href={path}><button>Add student</button></a>
                    <button onClick={()=>_this.goEditSelectedStudent(programId,this.state.name,this.state.dob)} disabled={_this.isNoRowSelected()}>Edit Student</button> <br/>
                    <button onClick={_this.deleteSelectedStudent} disabled={_this.isNoRowSelected()}>Delete Student</button>
                </div>
            </div>

          </div>
        </div>
      // </div>
      );
  }

})
export default Students;