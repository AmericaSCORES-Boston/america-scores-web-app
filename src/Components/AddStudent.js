import React, { Component } from 'react';
import Api from '../api';

/*
 Represents the page that lets you add sites to through the Api
 */
class AddStudent extends Component {

    //Tells the Api to add the site based on
    addStudent(prog_id) {

        let studentfirstName = document.getElementById("studentfName").value;
        let studentlastName = document.getElementById("studentlName").value;
        let studentdob = document.getElementById("dob").value;
        // let studentSite = document.getElementById("studentSite").value;
        if (studentfirstName === "" || studentdob === "" || studentlastName=="") {
            alert("You forgot to fill something");
            return;
        }
        Api.addStudent(studentfirstName, studentlastName,studentdob,prog_id).then((data) => {
            window.location = '/Students'});

    }
    // this.props.createStudent(this.props.program_id, this.state.first_name, this.state.last_name, this.state.dob);

    //
    // createStudent(user, program_id, first_name, last_name, dob) {
    //     return request(createEndpoint(`/programs/${program_id}/students`), createRequestOptions(POST, {first_name, last_name, dob}, user.idToken));
    // },

    render() {
        let progID=this.props.location.query.program;
        return (
            <div className="download-elements">
                <h2>Add a Student:</h2>
                <br/>
                Student First Name: &nbsp; <input type="text" id="studentfName" />
                <br/>
                Student Last Name:  &nbsp; <input type="text" id="studentlName" />
                <br/>
                {/*Student Site: <input type="text" id="studentSite" />*/}
                {/*<br/>*/}
                Date of Birth (yyyy-mm-dd): <input type="text" id="dob" />
                <br/>
                <button onClick={()=>{this.addStudent(progID)}}>Add Student</button>
            </div>
        );
    }
}

export default AddStudent;