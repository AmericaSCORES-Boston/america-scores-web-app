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

    if (this.props.location.query.program === '0') {
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

        <a href={Api.getReportLink(this.props.location.query.program)}><button>Download</button></a>
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