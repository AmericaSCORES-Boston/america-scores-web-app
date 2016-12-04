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
    var tempJSONArray=[{"student_id":2,"first_name":"Annabeth","last_name":"Chase","dob":"1993-07-12T00:00:00.000Z"},{"student_id":5,"first_name":"Newt","last_name":"Scamanader","dob":"2001-11-09T00:00:00.000Z"},{"student_id":7,"first_name":"Francis","last_name":"Underwood","dob":"1959-11-05T00:00:00.000Z"},{"student_id":8,"first_name":"Sharon","last_name":"Holster","dob":"2001-11-09T00:00:00.000Z"},{"student_id":9,"first_name":"Harry","last_name":"Potter","dob":"2000-01-01T00:00:00.000Z"},{"student_id":11,"first_name":"Ron","last_name":"Weasley","dob":"1998-03-15T00:00:00.000Z"}];
    return (
      <div className="download-elements">

        <h1>CSV Data</h1>

        <br/>

        <img src={csvLogo3} alt="CSV Icon3"/>

        <br/><br/>

        Students in this Program:
        <StudentListBox students={tempJSONArray}/>
        <br/>

        <a href='/RecordResponse'><button>Download</button></a>
        <a href='/WipeResponse'><button>Wipe Data</button></a>

        <br/>
        <a href='/CSVPage'><button>Start Over</button></a>

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