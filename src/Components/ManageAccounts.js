import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import icon from '../Assets/Accounts-icon.png';
import Api from '../api';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

/*
Gets all the Coaches and their permissions
Currently the API endpoint for coaches is unimplented so it is running on test data
*/
var ManageAccountsManager = React.createClass ({
  getInitialState: function() {
      return {
        coachData: [],
          selectedRowId: 0
      }
    },

  componentDidMount: function() {
      let _this = this;
      //TODO stub data
      let data=[];

      //add all coaches
      Api.fetchByAccountType('Coach').then(json => {
        for (let i = 0; i < json.length; i++) {
          data.push({id:json[i].acct_id, name:(json[i].first_name + " " + json[i].last_name), type: json[i].acct_type, email: json[i].email});
        }
        _this.setState({
            //TODO giving the stub data to the state
          coachData : data
        })
      });

      Api.fetchByAccountType('Staff').then(json => {
          for (let i = 0; i < json.length; i++) {
              data.push({id:json[i].acct_id,name: (json[i].first_name + " " + json[i].last_name), type: json[i].acct_type, email: json[i].email});
          }
          _this.setState({
              //TODO giving the stub data to the state
              coachData : data
          })
      });

      //add all volunteers
      Api.fetchByAccountType('Volunteer').then(json => {
        for (let i = 0; i < json.length; i++) {
          data.push({id:json[i].acct_id,name: (json[i].first_name + " " + json[i].last_name), type: json[i].acct_type, email: json[i].email});
        }
        _this.setState({
            //TODO giving the stub data to the state
          coachData : data
        })
      });
    },

    isNoRowSelected: function() {
        return this.state.selectedRowId === 0;
    },

    deleteSelectedAccount() {
        var confirmed = confirm('Are you sure you want to delete this Account?');
        if (confirmed) {
            Api.deleteAccount(this.state.selectedRowId).then(() => {window.location.reload()});
        }
        return;
    },


    render: function() {
      let _this=this;
      function onRowSelect(row, isSelected){
          if(isSelected){
              _this.setState({selectedRowId:row.id});
          }
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
      {/*<div className="col-xs-3"></div>*/}
      {/*<div className="col-xs-6 text-center">*/}
      <div className="col-md-3"></div>
          <div className="col-xs-6 text-center">
      <img src={icon} className="img-responsive center-block" alt="logo" />
      <h1 className="Account-header"> Coaches </h1>
          </div>
      <BootstrapTable data={this.state.coachData}
                      striped
                      hover
                      pagination
                      search
                      selectRow={selectRowProp}>
      <TableHeaderColumn isKey={true} dataField="id">Account Id</TableHeaderColumn>
      <TableHeaderColumn dataField="name">Name</TableHeaderColumn>
      <TableHeaderColumn dataField="type">Account Type</TableHeaderColumn>
      <TableHeaderColumn dataField="email">Email</TableHeaderColumn>
      </BootstrapTable>

          <div className="col-xs-12 text-center">
          <div className="download-elements">
              <a href={'/addAccount'}><button>Create Account</button></a>
              <button onClick={_this.deleteSelectedAccount}
                      disabled={_this.isNoRowSelected()}>Delete Account</button>
          </div>
          </div>
      </div>
      </div>
      );
  }
})
export  default  ManageAccountsManager;