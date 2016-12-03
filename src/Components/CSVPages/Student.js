import React, { Component } from 'react';
import csvLogo3 from '../../Assets/CSV-icon3.png';
import './CSVPages.css';

/*
Represents the page showing a preview of all the students for the program that
the client has chosen.
Endpoint: /CSVPage3
*/
class CSVStudent extends Component {
  render() {
    return (
      <div className="download-elements">

        <h1>CSV Data</h1>

        <br/>

        <img src={csvLogo3} alt="CSV Icon3"/>

        <br/><br/>

        Students in this Program:
        <div className="student-box">
          Percy Jackson<hr/>
          Annabeth Chase<hr/>
          Brian Smith<hr/>
          Pam Ho<hr/>
        </div>

        <br/>

        <a href='/RecordResponse'><button>Download</button></a>
        <a href='/WipeResponse'><button>Wipe Data</button></a>
      </div>
    );
  }
}

export default CSVStudent;