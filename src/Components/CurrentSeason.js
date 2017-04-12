import React from 'react';
import {BootstrapTable, TableHeaderColumn, DropdownButton} from 'react-bootstrap-table'
import icon from '../Assets/User.png';
import Api from '../api';

/*
Page for Rendering all the info for the season
*/
var CurrentSeason = React.createClass({

  getInitialState: function() {
    return {
      data: [],
      seasons: []
    }
  },

  //decides how to/ what data to get
  componentDidMount: function() {
    console.log("made it here");
    let _this = this;
    let seasonData  = [];
    let studentData = [];
    //let defaultSeason = null;
    /*
    Api.fetchSeasons().then(seasonJson => {
        for (let i = 0; i < seasonJson.length; i++) {
            seasonData.push({
                year: seasonJson[i].year,
                semester: seasonJson[i].semester
            })
        }
        console.log(seasonData[seasonData.length - 1]);
        _this.setState({
            seasons : seasonData,
            defaultSeason : seasonData[seasonData.length - 1]
        })
    })/*.then(function() {
        Api.fetchCurrentSeasonData(seasonData[seasonData.length - 1]).then(currentSeasonJson => {
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
/*
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
                */
          </div>
        </div>
      </div>
      );
  }

})
export default CurrentSeason;