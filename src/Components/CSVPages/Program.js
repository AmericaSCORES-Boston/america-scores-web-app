import React, { Component } from 'react';
import csvLogo2 from '../../Assets/CSV-icon2.png';
import './CSVPages.css';
import Api from '../../api.js';

/*
Represents the page after the admin has chosen a locaiton that lists all the
programs that are at that location. After this page, the admin will be able to
see the students associated with the program they have chosen.
Endpoint: /CSVPage2
*/
class CSVProgram extends Component {
  constructor() {
    super();
    this.state = {
      ProgramsArray: [{program_id:0,program_name:"Loading..."}] //So it has something to show if API down
    };
  }
  render() {
    let _this = this; //so that we can set the state inside the following function (otherwise scope messes us up)
    Api.fetchPrograms(this.props.location.query.location).then(function(value) {
      _this.setState({ProgramsArray:value});
    });

    return(
      <div className="download-elements">

        <img src={csvLogo2} alt="CSV Icon2"/>

        <h1>CSV Data</h1>

        <br/>

        <form action="/CSVPage3" id="programForm">
          Program:

          <br/><br/>

          <ProgramSelect programs={this.state.ProgramsArray} />

          <br/>

          <a href='/CSVPage'><button>Start Over</button></a><button type="next">Next</button>
        </form>
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