import React, { Component } from 'react';
import csvLogo3 from '../../Assets/CSV-icon3.png';
import '../../Main.css';
import Api from '../../api.js';

/*
Represents the page showing a preview of all the students for the program that
the client has chosen.
Endpoint: /CSVPage3
*/
class CSVStudent extends Component {
  constructor() {
    super();
    this.state = {
      StudentsArray:[{first_name:"Loading..."}]
    }
  }

  //Makes the API call in this method because it will re-render after state changes
  componentDidMount() {
    let _this = this;

    if (this.props.location.query.program < 1) {
      _this.setState({StudentsArray:[{first_name:"Invalid Program"}]});
      return;
    }

    Api.fetchStudents(this.props.location.query.program).then(function(value) {
      if (value.length === 0) {
        _this.setState({StudentsArray:[{first_name:"No Students Here"}]});
      }
      else {
        _this.setState({StudentsArray:value});
      }
    });
  }

  //This function determines if there is no valid students available for this program
  //(i.e. either Loading... or None) and therefore if the next button should be disabled
  noValidOptions() {
    let studArray = this.state.StudentsArray;
    return (studArray.length === 1 &&
            (studArray[0].first_name === 'No Students Here' || studArray[0].first_name === 'Loading...' ));
  }

  //this function redirects to the url download page after clicking download
  downloadRedirect() {
    window.location = Api.getReportLink(this.props.location.query.program);
  }

  render() {

    return (
      <div className="download-elements">

        <img src={csvLogo3} alt="CSV Icon3"/>

        <h1>CSV Data</h1>

        <br/>

        <br/>

        Students in this Program:
        <StudentListBox students={this.state.StudentsArray}/>
        <br/>

        <button onClick={this.downloadRedirect} disabled={this.noValidOptions()}>Download</button>

        <a href='/WipeResponse'><button>Wipe Data</button></a>
        <br/>
        <a href='/CSVPage'><button>Start Over</button></a>
        <br/>
      </div>
    );
  }
}


/*
Represents a component that will show the preview of all the students associated in that program
*/
class StudentListBox extends Component {
  render() {
    return (
      <div className="student-box">
        {this.props.students.map(function(student, index) {
          return <div>{student.first_name} {student.last_name}<hr/></div>;
        })}
      </div>
    );
  }
}

export default CSVStudent;