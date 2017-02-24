import React, { Component } from 'react';
import Api from '../api';

/*
Represents the page that lets you add sites to through the Api
*/
class AddProgram extends Component {

  //Tells the Api to add the site based on
  addProgram(locId) {
    let programName = document.getElementById("programName").value;

    if (programName === "") {
      alert("one of these is empty");
      return;
    }

    Api.addProgram(locId, programName).then(() => {window.location = '/Programs?location=' +locId});
  }
  render() {
    let _this = this;
    let locId = this.props.location.query.location
    if (locId === undefined || locId < 1) {
      return (
        <div>
          <h2>Invalid Site Being added To</h2>
        </div>
      );
    }
    return (
      <div className="download-elements">
        <h2>Add a Program:</h2>
        <br/>
        Program Name: &nbsp; <input type="text" id="programName" />
        <br/>
        <button onClick={() => {_this.addProgram(locId)}}>Add Program</button>
      </div>
    );
  }
}

export default AddProgram;