import React, { Component } from 'react';
import Api from '../api';

/*
 Represents the page that lets you add sites to through the Api
 */
class AddStudent extends Component {

    constructor(props){
        super(props)
        this.state={
            prog_id:this.props.location.query.program,
        }
        if(this.state.prog_id=='undefined'){
            this.state.prog_id="";
        }
    }

    //Tells the Api to add the site based on
    addStudent(prog_id) {
            let studentfirstName = document.getElementById("studentfName").value;
            let studentlastName = document.getElementById("studentlName").value;
            let studentdob = document.getElementById("dob").value;
            let programID=document.getElementById("program").value;
            // if (studentfirstName === "" || studentdob === "" || studentlastName=="") {
            //     alert("You forgot to fill something");
            //     return;
            // }
            Api.addStudent(studentfirstName, studentlastName,studentdob,programID).then((data) => {
                window.location = '/Students'});
        }
    render() {
        // let progID=this.props.location.query.program;
        return (
            <div className="container-fluid">
                <div className="row">
                    <h2>Add a Student:</h2>
                    <div className="col-md-6">
                        <form>
                            <div className="form-group">
                                <label for="studentfName">Student First Name</label>
                                <input type="text" className="form-control"  id="studentfName" placeholder="Enter First Name" required/>
                            </div>

                            <div className="form-group">
                                <label for="studentlName">Student Last Name</label>
                                <input type="text" placeholder="Enter Last Name" className="form-control" id="studentlName" required/>
                            </div>

                            <div className="form-group">
                                <label for="dob">Date of Birth (yyyy-mm-dd)</label>
                                <input type="text" placeholder="Enter Date of Birth" className="form-control" id="dob" required/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="program">Program ID</label>
                                <input type="text" placeholder="Enter Program ID" className="form-control" id="program"
                                       defaultValue={this.state.prog_id} required/>
                            </div>

                            <div className="form-group">
                                <button onClick={()=>{this.addStudent(this.state.prog_id)}}>Add Student</button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        );
    }
}

export default AddStudent;