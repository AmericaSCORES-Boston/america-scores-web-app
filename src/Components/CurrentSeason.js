import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import {FormControl, FormGroup, ControlLabel} from 'react-bootstrap'
import icon from '../Assets/User.png';
import Api from '../api';


/*
Page for Rendering all the info for the season
*/
var CurrentSeason = React.createClass({

  getInitialState: function() {
    return {
      data: [],
      seasons: [],
      currentSeasonSelection: null
    }
  },

  //decides how to/ what data to get
  componentDidMount: function() {
    let _this = this;
    let seasonData  = [];

    Api.fetchSeasons().then(seasonJson => {
        if (seasonJson != null) {
            for (let i = seasonJson.length - 1; i >= 0; i--) {
                seasonData.push({
                    id: seasonJson[i].season_id,
                    year: seasonJson[i].year,
                    semester: seasonJson[i].season
                })
            }
            _this.setState({
                seasons : seasonData,
                currentSeasonSelection : seasonData[0]
            })
        } else {
            console.log("error getting seasons data");
        }
    }).then(function() {
        _this.populateStudentTable(_this.state.currentSeasonSelection.year, _this.state.currentSeasonSelection.semester);
      })
    },

    populateStudentTable : function(year, semester) {
        let studentData = [];
        let _this = this;
        Api.fetchCurrentSeasonData(year, semester).then(currentSeasonJson => {
            for (let j = 0; j < currentSeasonJson.length; j++) {
                studentData.push({
                    id: currentSeasonJson[j].student_id,
                    name: currentSeasonJson[j].first_name + " " + currentSeasonJson[j].last_name,
                    program: currentSeasonJson[j].program_name,
                    school: currentSeasonJson[j].site_name,
                    preWeight: currentSeasonJson[j].pre_weight,
                    preHeight: currentSeasonJson[j].pre_height,
                    prePacer: currentSeasonJson[j].pre_pacer,
                    postWeight: currentSeasonJson[j].post_weight,
                    postHeight: currentSeasonJson[j].post_height,
                    postPacer: currentSeasonJson[j].post_pacer
                })
            }
            _this.setState({
                data : studentData
            })
        })
    },

    selectionChangeHandler: function (event){
      let _this = this;
      let splitVals = event.target.value.split(" ");
      let seasonObj = {id: splitVals[0], year: splitVals[1], semester: splitVals[2]}
      _this.setState({
        currentSeasonSelection : seasonObj
      })
      _this.populateStudentTable(seasonObj.year, seasonObj.semester);
    },

    checkData: function () {
        let _this = this;
        return _this.state.data.length === 0;
    },

    generateCSV: function() {
        let _this = this;
        let lines = [];
        _this.state.data.forEach(function (studentObject, index) {
            let studentArray = [studentObject.id, studentObject.name, studentObject.school, studentObject.program,
                               studentObject.preWeight, studentObject.preHeight, studentObject.prePacer, studentObject.postWeight,
                               studentObject.postHeight, studentObject.postPacer];
            let singleLine = studentArray.join(",");
            lines.push(index === 0 ? "data:text/csv;charset=utf-8," + singleLine : singleLine);
        });
        var csvContent = lines.join("\n");
        console.log(csvContent);
        var encodedUri = encodeURI(csvContent);
        window.open(encodedUri);
    },

    render: function() {
        function onRowSelect(row, isSelected) {
        console.log(row);
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
                <FormGroup controlId="formControlsSelect">
                      <ControlLabel></ControlLabel>
                      <FormControl componentClass="select" placeholder="No Seasons Found" ref="seasonSelection"
                        onChange={this.selectionChangeHandler}>
                        {
                            this.state.seasons.map(function(season) {
                                return <option key={season.id} value={season.id + " " + season.year + " " + season.semester}>
                                            {season.semester + " " + season.year}
                                       </option>;
                            })
                        }
                      </FormControl>
                </FormGroup>
                <h1 className="Account-header"> Current Season </h1>
                <BootstrapTable data={this.state.data} triped={true} hover={true} condensed={true}
                                selectRow={selectRowProp}>
                    <TableHeaderColumn isKey={true} dataField="id">ID</TableHeaderColumn>
                    <TableHeaderColumn dataField="name">Name</TableHeaderColumn>
                    <TableHeaderColumn dataField="school">School</TableHeaderColumn>
                    <TableHeaderColumn dataField="program">Program</TableHeaderColumn>
                    <TableHeaderColumn dataField="preHeight">Pre Height</TableHeaderColumn>
                    <TableHeaderColumn dataField="postHeight">Post Height</TableHeaderColumn>
                    <TableHeaderColumn dataField="preWeight">Pre Weight</TableHeaderColumn>
                    <TableHeaderColumn dataField="postWeight">Post Weight</TableHeaderColumn>
                    <TableHeaderColumn dataField="prePacer">Pre Pacer</TableHeaderColumn>
                    <TableHeaderColumn dataField="postPacer">Post Pacer</TableHeaderColumn>
                </BootstrapTable>
                <button onClick={this.generateCSV}>Generate CSV</button>

          </div>
        </div>
      </div>
      );
  }

})
export default CurrentSeason;