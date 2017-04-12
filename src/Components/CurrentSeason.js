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
    //console.log("made it here");
    let _this = this;

    let seasonData  = [];
    let studentData = [];
    let defaultSeason = null;

    Api.fetchSeasons().then(seasonJson => {
        if (seasonJson != null) {
            for (let i = 0; i < seasonJson.length; i++) {
                seasonData.push({
                    id: seasonJson[i].season_id,
                    year: seasonJson[i].year,
                    semester: seasonJson[i].season
                })
            }
            console.log("last season: " + seasonData[seasonData.length - 1]);
            _this.setState({
                seasons : seasonData,
                currentSeasonSelection : seasonData[seasonData.length - 1]
            })
        }
    }).then(function() {
          Api.fetchCurrentSeasonData(currentSeasonSelection.year, currentSeasonSelection.semester).then(currentSeasonJson => {
              for (let j = 0; j < currentSeasonJson.length; j++) {
                  studentData.push({
                      id: currentSeasonJson[j].student_id,
                      name: currentSeasonJson[j].student_name,
                      program: currentSeasonJson[j].program,
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
                  date : studentData
              })
          })
      })
    },

    selectionChangeHandler: function (event){
      //TODO make this actually good...
      let splitVals = event.target.value.split(" ");
      let seasonObj = {id: splitVals[0], year: splitVals[1], semester: splitVals[2]}
      this.setState({
        currentSeasonSelection : seasonObj
      })
    },

    render: function() {
        function onRowSelect(row, isSelected) {
        //console.log(row)
        //console.log("selected: " + isSelected)
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

          </div>
        </div>
      </div>
      );
  }

})
export default CurrentSeason;