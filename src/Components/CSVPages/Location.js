import React, { Component } from 'react';
import csvLogo from '../../Assets/CSV-icon.png';
import './CSVPages.css';

/*
Represents the page of all the America Scores locations where the admin can
select a location and then in the next page they will see all the programs
associated with that location. After they choose a program, they will see a page
with all the students in that program, where they can download the CSV.
Endpoint: /CSVPage
*/
class CSVLocation extends Component {
  render() {
    return (
      <div className="download-elements">

        <h1>CSV Data</h1>

        <br/>

        <img src={csvLogo} alt="CSV Icon"/>

        <form action="/CSVPage2" id="locationForm">
          Location:

          <br/><br/>

          <select name="location">
            // METHOD WILL GO HERE
            <option value="default" selected="selected">Select One:</option>
            <option value="location1">Location 1</option>
            <option value="location2">Location 2</option>
            <option value="location3">Location 3</option>
          </select>

          <br/><br/><br/>

          <button type="submit">Select</button>
        </form>
      </div>
    );
  }
}

export default CSVLocation;