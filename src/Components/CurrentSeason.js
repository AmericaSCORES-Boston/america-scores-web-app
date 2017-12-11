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
                console.log(seasonJson);
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
            console.log(currentSeasonJson);
            for (let j = 0; j < currentSeasonJson.length; j++) {
                studentData.push({
                    // mid:currentSeasonJson[j].measurement_id,
                    key:j,
                    id: currentSeasonJson[j].student_id,
                    firstName: currentSeasonJson[j].first_name,
                    lastName:currentSeasonJson[j].last_name,
                    program: currentSeasonJson[j].program_name,
                    school: currentSeasonJson[j].site_name,
                    dob:new Date(currentSeasonJson[j].dob).toDateString(),
                    date: (currentSeasonJson[j].pre_date==null ? null : (new Date(currentSeasonJson[j].pre_date).toDateString())) || (currentSeasonJson[j].post_date==null ? null : (new Date(currentSeasonJson[j].post_date).toDateString())),
                    // preWeight: currentSeasonJson[j].pre_weight,
                    // preHeight: currentSeasonJson[j].pre_height,
                    preShuttle: currentSeasonJson[j].post_pacer,
                    postShuttle:currentSeasonJson[j].pre_pacer,
                    postDate: null,
                    // postWeight: currentSeasonJson[j].post_weight,
                    // postHeight: currentSeasonJson[j].post_height,
                    season: currentSeasonJson[j].pre_pacer===null ? 'Pre' : 'Post',
                })
            }
            _this.setState({
                data : studentData
            })
            console.log("see data");
            console.log(this.state.data);
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
            mode: "checkbox",
            clickToSelect: true,
            bgColor: "rgb(238, 193, 213)"
        };
        const options = {
            exportCSVSeparator: '##' ,
            sizePerPageList: [ {
                text: '15', value: 15
            }, {
                text: 'All', value: this.state.data.length
            } ],
            sizePerPage: 15};

        return (
            <div className="container-fluid">
                <div className="row">

                    <div className="col-md-3"></div>
                    <div className="col-xs-6 text-center">
                        <img src={icon} className="img-responsive center-block" alt="logo" />
                        <h1 className="Account-header"> Current Season </h1>

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

                    </div>

                    <BootstrapTable data={this.state.data}
                                    striped
                                    hover
                                    condensed
                                    search
                                    pagination={true} exportCSV={ true }>
                        <TableHeaderColumn isKey={true} dataSort={true} dataField="key" width='40'> S.No. </TableHeaderColumn>
                        {/*<TableHeaderColumn dataField="id"  dataSort={true} csvFieldType='number' width='70'> Student ID </TableHeaderColumn>*/}
                        <TableHeaderColumn dataField="school" dataSort={true} csvFieldType='string' width='70'> School </TableHeaderColumn>
                        <TableHeaderColumn dataField="program" dataSort={true} csvFieldType='string' width='70'>Program</TableHeaderColumn>
                        <TableHeaderColumn dataField="date" dataSort={true} csvFieldType='string' width='50'>Collection Date</TableHeaderColumn>
                        <TableHeaderColumn dataField="firstName"  dataSort={true} csvFieldType='string' width='50'> First Name </TableHeaderColumn>
                        <TableHeaderColumn dataField="lastName"  dataSort={true} csvFieldType='string' width='50'> Last Name </TableHeaderColumn>
                        <TableHeaderColumn dataField="dob"  dataSort={true} csvFieldType='string' width='50'> Date of Birth </TableHeaderColumn>
                        <TableHeaderColumn dataField="preShuttle" dataSort={true} csvFieldType='number' width='40'>Pre Pacer Score</TableHeaderColumn>
                        <TableHeaderColumn dataField="postShuttle" dataSort={true} csvFieldType='number' width='40'>Post Pacer Score</TableHeaderColumn>

                        {/*<TableHeaderColumn dataField="season" dataSort={true} csvFieldType='string' width='50'>Season</TableHeaderColumn>*/}
                    </BootstrapTable>
                    {/*<button onClick={this.generateCSV}>Generate CSV</button>*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    }
})
export default CurrentSeason;