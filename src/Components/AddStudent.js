import React, { Component } from 'react';
import Api from '../api';

/*
 Represents the page that lets you add sites to through the Api
 */
class AddStudent extends Component {

    //Tells the Api to add the site based on
    addStudent() {
        let studentFname = document.getElementById("studentFname").value;
        let studentLname = document.getElementById("studentLname").value;
        let studentDOB = document.getElementById("studentDOB").value;
        let programID = 1;

        if (studentDOB === "" || studentFname === "" || studentLname === "") {
            alert("one of these is empty");
            return;
        }
        Api.addStudent(studentFname, studentLname, studentDOB, programID).then(() => {window.location = '/students'});

    }
    render() {
        return (
            <div className="download-elements">
                <h2>Add a Student:</h2>
                <br/>
                Student First Name: &nbsp; <input type="text" id="studentFname" />
                <br/>
                Student Last Name: <input type="text" id="studentLname" />
                <br/>
                Student DOB: <input type="text" id="studentDOB" />
                <button onClick={this.addStudent}>Add Student</button>
            </div>
        );
    }
}

export default AddStudent;