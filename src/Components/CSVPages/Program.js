import React, { Component } from 'react';
import csvLogo2 from '../../Assets/CSV-icon2.png';
import './CSVPages.css';

/*
Represents the page after the admin has chosen a locaiton that lists all the
programs that are at that location. After this page, the admin will be able to
see the students associated with the program they have chosen.
Endpoint: /CSVPage2
*/
class CSVProgram extends Component {
  render() {
    return(
      <div className="download-elements">

        <h1>CSV Data</h1>

        <br/>

        <img src={csvLogo2} alt="CSV Icon2"/>

        <form action="/CSVPage3" id="programForm">
          Program:

          <br/><br/>

          <select name="program">
            //METHOD WILL GO HERE
            <option value="default" selected="selected">Select One:</option>
            <option value="prog1">Program 1</option>
            <option value="prog2">Program 2</option>
            <option value="prog3">Program 3</option>
          </select>

          <br/><br/><br/>

          <button type="submit">Select</button>
        </form>
      </div>
    );
  }
}

export default CSVProgram;