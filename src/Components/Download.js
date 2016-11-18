import React, { Component } from 'react';
import csvLogo from '../Assets/ApolloLocation.png'
import '../Download.css'

class Download extends Component {
  render() {
    return (
      <div className="download-elements">
        <h1>CSV Data</h1>
        <img src={csvLogo} style ={{width: 100, height: 100}}/>

        <form action="/record" id="csvForm">
          Location:
          &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;
          Program:
          <br/>

          <select name="location">
            // METHOD WILL GO HERE
            <option value="default" selected="selected">Select One:</option>
            <option value="location1">Location 1</option>
            <option value="location2">Location 2</option>
            <option value="location3">Location 3</option>
          </select>

          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;

          <select name="location">
            //METHOD WILL GO HERE
            <option value="default" selected="selected">Select One:</option>
            <option value="prog1">Program 1</option>
            <option value="prog2">Program 2</option>
            <option value="prog3">Program 3</option>
          </select>

          <br/><br/>
          Student:
          <div className="student-box">
            Amal Nazeem<hr/>
            Charlie Baker<hr/>
            Hillary Clinton<hr/>
            Donald Trump<hr/>
          </div>

          <br/>

          <button type="submit">Export</button>
        </form>
      </div>
    );
  }
}

export default Download;