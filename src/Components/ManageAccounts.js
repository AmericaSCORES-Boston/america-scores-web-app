import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import icon from '../Assets/Accounts-icon.png';
import Api from '../api';

/*
Gets all the Coaches and their permissions
*/
var ManageAccountsManager = React.createClass ({
  getInitialState: function() {
      return {
        coachData: []
      }
    },

  componentDidMount: function() {
      let _this = this;
      let data = [];
      //let queryParamProgramId = this.props.location.query.program;

      //add all coaches
      Api.fetchByAccountType('Coach').then(json => {
        for (let i = 0; i < json.length; i++) {
          data.push({name: (json[i].first_name + " " + json[i].last_name), type: json[i].acct_type, email: json[i].email});
        }
        _this.setState({
          coachData : data
        })
      });

      //add all volunteers
      Api.fetchByAccountType('Volunteer').then(json => {
        for (let i = 0; i < json.length; i++) {
          data.push({name: (json[i].first_name + " " + json[i].last_name), type: json[i].acct_type, email: json[i].email});
        }
        _this.setState({
          coachData : data
        })
      });
    },

    render: function() {
      let _this=this;
      function onRowSelect(row, isSelected){
        console.log(row);
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
      <div className="container-fluid coaches">
      <div className="row">
      <div className="col-xs-3"></div>
      <div className="col-xs-6 text-center">
      <img src={icon} className="img-responsive center-block" alt="logo" />
      <h1 className="Account-header"> Coaches </h1>
      <BootstrapTable data={this.state.coachData} triped={true} hover={true} condensed={true} selectRow={selectRowProp}>
      <TableHeaderColumn isKey={true} dataField="name">Name</TableHeaderColumn>
      <TableHeaderColumn dataField="type">Account Type</TableHeaderColumn>
      <TableHeaderColumn dataField="email">Email</TableHeaderColumn>
      </BootstrapTable>
      </div>
      </div>
      </div>
      );
  }
})
export  default  ManageAccountsManager;