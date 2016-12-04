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
    var tempJSONArray = [{"program_id":1,"site_id":1,"program_name":"LMElementaryBoys"},{"program_id":5,"site_id":1,"program_name":"Www"},{"program_id":6,"site_id":1,"program_name":"Another one"},{"program_id":7,"site_id":1,"program_name":"Another one"},{"program_id":8,"site_id":1,"program_name":"Wwww"},{"program_id":9,"site_id":1,"program_name":"Test1234"},{"program_id":10,"site_id":1,"program_name":"Eeee"},{"program_id":11,"site_id":1,"program_name":"Another"},{"program_id":12,"site_id":1,"program_name":"Again"},{"program_id":13,"site_id":1,"program_name":"Eeeeee"},{"program_id":14,"site_id":1,"program_name":"1234"},{"program_id":15,"site_id":1,"program_name":"Test"},{"program_id":16,"site_id":1,"program_name":"Rrrr"},{"program_id":17,"site_id":1,"program_name":"Rrrrrr"},{"program_id":18,"site_id":1,"program_name":"Test"},{"program_id":27,"site_id":1,"program_name":"new program"},{"program_id":29,"site_id":1,"program_name":"Test"},{"program_id":30,"site_id":1,"program_name":"Bggg"},{"program_id":31,"site_id":1,"program_name":""},{"program_id":32,"site_id":1,"program_name":"Testing123"},{"program_id":33,"site_id":1,"program_name":""},{"program_id":34,"site_id":1,"program_name":"1234"},{"program_id":35,"site_id":1,"program_name":"Tes4gnkjrnejrgkn"}];
    return(
      <div className="download-elements">

        <h1>CSV Data</h1>

        <br/>

        <img src={csvLogo2} alt="CSV Icon2"/>

        <form action="/CSVPage3" id="programForm">
          Program:

          <br/><br/>

          <ProgramSelect programs={tempJSONArray} />

          <br/>

          <button type="next">Select</button>
        </form>

        <a href='/CSVPage'><button>Start Over</button></a>
      </div>
    );
  }
}

/*
Represents a component that holds all the values of the List of programs we get
*/
class ProgramSelect extends Component {
  render() {
    return (
      <div>
        <select name="program">
          {this.props.programs.map(function(prog, index) {
            return <option key={index} value={prog.program_id}>{prog.program_name}</option>;
          })}
        </select>
      </div>
    );
  }
}

export default CSVProgram;