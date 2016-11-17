import React, { Component } from 'react';
import csvLogo from '../Assets/ApolloLocation.png'
import '../Download.css'

class Download extends Component {
  render() {
    return (
      <div className="download-elements">
        <h1>CSV Data</h1>
        <img src={csvLogo} style ={{width: 100, height: 100}}/>

        <form id="csvForm">
          Location:
          <select name="location">
            // METHOD WILL GO HERE
            <option value="location1">Location 1</option>
            <option value="location2">Location 2</option>
            <option value="location3">Location 3</option>
          </select>

          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

          Program:
          <select name="location">
            //METHOD WILL GO HERE
            <option value="prog1">Program 1</option>
            <option value="prog2">Program 2</option>
            <option value="prog3">Program 3</option>
          </select>

          <br/><br/>
          Student:
          <div className="student-box">
            Amal Nazeem<hr/>
            Amal Nazeem<hr/>
            Amal Nazeem<hr/>
            Amal Nazeem<hr/>
          </div>

          <br/> <br/>

          <button type="submit">Export</button>
        </form>
      </div>
    );
  }
}

export default Download;