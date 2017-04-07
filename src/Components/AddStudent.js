import React, { Component } from 'react';
import Api from '../api';

/*
 Represents the page that lets you add sites to through the Api
 */
class AddStudent extends Component {

    //Tells the Api to add the site based on
    addStudent() {
        let studentName = document.getElementById("studentName").value;
        let studentSite = document.getElementById("studentSite").value;
        if (studentName === "" || studentSite === "") {
            alert("one of these is empty");
            return;
        }
        Api.addStudent(studentName, studentSite).then(() => {window.location = '/Students'});

    }
    render() {
        return (
            <div className="download-elements">
                <h2>Add a Student:</h2>
                <br/>
                Student Name: &nbsp; <input type="text" id="studentName" />
                <br/>
                Student Site: <input type="text" id="studentSite" />
                <br/>
                <button onClick={this.addStudent}>Add Student</button>
            </div>
        );
    }
}

export default AddStudent;