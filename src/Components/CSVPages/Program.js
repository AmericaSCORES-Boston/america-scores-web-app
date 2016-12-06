import React, { Component } from 'react';
import csvLogo2 from '../../Assets/CSV-icon2.png';
import '../../Main.css';
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

  //Makes the API call in this method because it will re-render after state changes
  componentDidMount() {
    let _this = this; //so that we can set the state inside the following function (otherwise scope messes us up)
    Api.fetchPrograms(this.props.location.query.location).then(function(value) {
      if (value.length === 0) {
        _this.setState({ProgramsArray:[{program_id:0,program_name:"None"}]});
      }
      else {
        _this.setState({ProgramsArray:value});
      }
    });
  }

  //This function determines if there is no valid programs available for this site
  //(i.e. either Loading... or None) and therefore if the next button should be disabled
  noValidOptions() {
    let progArray = this.state.ProgramsArray;
    return (progArray.length === 1 && progArray[0].program_id < 1);
  }

  render() {

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

          <button type="submit" disabled={this.noValidOptions()}>Next</button>
        </form>
        <a href='/CSVPage'><button>Back</button></a>
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