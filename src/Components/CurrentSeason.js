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
    console.log("made it here");
    let _this = this;
    //let concatPrograms = "";
    let finalStudentData = [];
    //these 4 are for getting the student table info
    let studentData = [];
    let statData = [];
    let siteData = [];
    let programData = [];
    let eventData = [];
    let studentProgramDict = {};


    Api.getAllStudents().then(plainStudentJson => {
        console.log("getting students");
        for (let i = 0; i < plainStudentJson.length; i++) {
            studentData.push({id: plainStudentJson[i].student_id,
            name: (plainStudentJson[i].first_name + " " + plainStudentJson[i].last_name),
            dob: plainStudentJson[i].dob});
        }
    }).then(function() {
        console.log("getting programs");
        Api.fetchAllPrograms().then(programJson => {
            for (let j = 0; j < programJson.length; j++) {
                programData.push({
                    id: programJson[j].program_id,
                    siteId: programJson[j].site_id,
                    name: programJson[j].program_name
                })
            }
        })
    }).then(function() {
        console.log("getting sites");
        Api.fetchSites().then(siteJson => {
            for (let j = 0; j < siteJson.length; j++) {
                siteData.push({
                    id: siteJson[j].site_id,
                    name: siteJson[j].site_name,
                    address: siteJson[j].site_address
                })
            }
        })
    }).then(function() {
        console.log("getting events");
        Api.fetchEvents().then(eventJson => {
            for (let i = 0; i < eventJson.length; i++) {
                eventData.push({
                    id: eventJson[i].event_id,
                    programId: eventJson[i].program_id,
                    date: eventJson[i].event_date
                })
            }
        })
    }).then(function() {
        console.log("getting stats");
        Api.fetchAllStats().then(statJson => {
            for (let i =0; i < statJson.length; i++) {
                statData.push({
                    id: statJson[i].measurement_id,
                    studentId: statJson[i].student_id,
                    eventId: statJson[i].event_id,
                    height: statJson[i].height,
                    weight: statJson[i].weight,
                    pacer: statJson[i].pacer,
                })
            }
        })
    }).then(function() {
        console.log("creating table");
        console.log("students" + studentData.length);
        console.log("programs" + programData.length);
        console.log("events" + eventData.length);
        console.log("events" + eventData.length);
        console.log("stats" + statData.length);
        for (let i = 0; i < studentData.length; i++) {
            let measurements = [];
            let site = "error";
            let progs = [];
            let concatPrograms = "error";
            for (let j = 0; j < statData.length; j++) {
                for (let k = 0; k < eventData.length; k++) {
                    if (studentData[i].id === statData[j].studentId &&
                        statData[j].eventId === eventData[k].id
                        /*&& eventData[k].date != check against global variable later*/) {

                        measurements.push(statData[j]);

                        }
                    for (let m = 0; m < programData.length; m++) {
                        if (programData[m].id === eventData[k].programId) {
                            progs.push(programData[m]);
                        }
                    }
                    for (let n = 0; n < siteData.length; n++) {
                    /*just get a single site for a student*/
                        if (progs[0].siteId === siteData[n].id) {
                            site = siteData[n].siteName;
                        }
                    }
                }
            }
            for (let j = 0; j < progs.length; j++) {
                concatPrograms += progs[j].name;
            }
            finalStudentData.push({
                id: studentData[i].id,
                name: studentData[i].name,
                school: site,
                programs: concatPrograms,
                preHeight: measurements[0].height,
                preWeight: measurements[0].weight,
                postHeight: measurements[1].height,
                postWeight: measurements[1].weight,
                prePacer: measurements[0].pacer,
                postPacer: measurements[1].pacer
            })
        }


    })

/*
      Api.getAllStudents().then(plainStudentJson => {
        for (let i = 0; i < plainStudentJson.length; i++) {
          plainStudentData.push({id: plainStudentJson[i].student_id,
            name: (plainStudentJson[i].first_name + " " + plainStudentJson[i].last_name),
            dob: plainStudentJson[i].dob});
        }
      }).then(function() {
        for (let j = 0; j < plainStudentData.length; j++) {
            Api.fetchProgramsByStudent(plainStudentData[j].student_id).then(programJson => {
                for (let m = 0; m < programJson.length; m++) {
                    programsForStudent.push({
                                        id: programJson[m].program_id,
                                        siteId: programJson[m].site_id,
                                        name: programJson[m].program_name
                    });
                }
            }).then(function() {
                for (let k = 0; k < programsForStudent.length; k++) {
                    concatPrograms += programsForStudent[k].name;
                    console.log(programsForStudent[k].siteId);
                    Api.fetchSingleSite(programsForStudent[k].siteId).then(siteJson => {
                        sitesForStudent.push({siteId: programsForStudent[k].site_id,
                            siteName: programsForStudent[k].site_name,
                            siteAddress: programsForStudent[k].site_address});
                    })
                }
            }).then(function() {
                finalStudentData.push({
                    id: plainStudentData[j].id,
                    name: plainStudentData[j].name,
                    school: sitesForStudent[0].siteName,
                    programs: concatPrograms
                });

            });
        }
      }).then(function() {
        _this.setState({allStudentInfo : finalStudentData});
      });
*/
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