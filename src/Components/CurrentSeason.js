import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import icon from '../Assets/User.png';
import Api from '../api';

/*
Page for Rendering all the info for the season
*/
var CurrentSeason = React.createClass({

  getInitialState: function() {
    return {
      allStudentInfo: []
    }
  },

  //decides how to/ what data to get
  componentDidMount: function() {
    let _this = this;
    let concatPrograms = "";
    let finalStudentData = [];
    //these 4 are for getting the student table info
    let plainStudentData = [];
    let programsForStudent = [];
    let siteForProgram = null;

      Api.getAllStudents().then(plainStudentJson => {
        for (let i = 0; i < plainStudentJson.length; i++) {
          plainStudentData.push({id: plainStudentJson[i].student_id,
            name: (plainStudentJson[i].first_name + " " + plainStudentJson[i].last_name),
            dob: plainStudentJson[i].dob});
        }
        for (let j = 0; j < plainStudentData.length; j++) {
            Api.fetchProgramsByStudent(plainStudentData[j].student_id).then(programJson => {
                console.log(programJson);
                programsForStudent.push({id: programJson[j].program_id,
                    siteId: programJson[j].site_id,
                    name: programJson[j].program_name})
            });
            for (let k = 0; k < programsForStudent.length; k++) {

                concatPrograms += programsForStudent[k].name;
                Api.fetchSingleSite(programsForStudent[k].siteId).then(siteJson => {
                    console.log("site for student " + j + " program " + k + ": " + siteJson.site_name);
                    siteForProgram = {siteId: programsForStudent[k].site_id,
                        siteName: programsForStudent[k].site_name,
                        siteAddress: programsForStudent[k].site_address};
                });
            }
            finalStudentData.push({
                id: plainStudentData[j].id,
                name: plainStudentData[j].name,
                school: siteForProgram.siteName,
                programs: concatPrograms
                });
        }

         _this.setState({allStudentInfo : finalStudentData})
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
                <h1 className="Account-header"> Current Season </h1>
                <BootstrapTable data={this.state.allStudentInfo} triped={true} hover={true} condensed={true}
                                selectRow={selectRowProp}>
                    <TableHeaderColumn isKey={true} dataField="id">ID</TableHeaderColumn>
                    <TableHeaderColumn dataField="name">Name</TableHeaderColumn>
                    <TableHeaderColumn dataField="school">School</TableHeaderColumn>
                    <TableHeaderColumn dataField="programs">Program</TableHeaderColumn>
                    <TableHeaderColumn dataField="preHeight">Pre Height</TableHeaderColumn>
                    <TableHeaderColumn dataField="postHeight">Post Height</TableHeaderColumn>
                    <TableHeaderColumn dataField="preWeight">Pre Weight</TableHeaderColumn>
                    <TableHeaderColumn dataField="postWeight">Post Weight</TableHeaderColumn>
                    <TableHeaderColumn dataField="prePacer">Pre Pacer</TableHeaderColumn>
                    <TableHeaderColumn dataField="postPacer">Post Pacer</TableHeaderColumn>
                </BootstrapTable>
          </div>
        </div>
      </div>
      );
  }

})
export default CurrentSeason;