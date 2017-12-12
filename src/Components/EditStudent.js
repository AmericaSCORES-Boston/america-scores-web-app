import React, { Component } from 'react';
import Api from '../api';

/*
 Represents the page that lets you add sites to through the Api
 */
class EditStudent extends Component {

    //Tells the Api to add the site based on
    constructor(props){
        super(props)
        if(typeof this.props.location.query.name === 'undefined') {
            this.props.location.query.name = "";
        }
        this.state={
            student_id:this.props.location.query.student,
            student_dob:this.props.location.query.dob,
            prog_id:this.props.location.query.program,
            firstName:this.props.location.query.name.split(' ').slice(0, -1).join(' '),
            lastName:this.props.location.query.name.split(' ').slice(-1).join(' '),
            isEnabled: false
        }
        if(this.state.prog_id=='undefined'){
            this.state.prog_id="";
        }
    }
    EditStudent(student_id) {
        let _this = this;
        let studentID= student_id;
        let studentfirstName = document.getElementById("studentfName").value;
        let studentlastName = document.getElementById("studentlName").value;
        let studentdob = document.getElementById("dob").value;
        let programID=document.getElementById("program").value;
        _this.state.isEnabled =
            studentfirstName != "" &&
            studentlastName != "" &&
            studentdob != "" &&
            programID != "";
        if (!_this.state.isEnabled) {
                alert("Please fill all fields");
                return;
            }
        Api.updateStudent(studentID,studentfirstName,studentlastName,studentdob,programID).then((data) => {
            window.location = '/Students'
        });
    }

    render() {
        let _this = this;
        return (
            <div className="container-fluid">
                <div className="row">
                    <h2>Edit Student Details:</h2>
                    <div className="col-md-6">
                        <form>
                            <div className="form-group">
                                <label htmlFor="studentfName">Student First Name</label>
                                <input type="text" className="form-control"  id="studentfName" placeholder="Enter First Name"
                                       defaultValue={this.state.firstName} required/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="studentlName">Student Last Name</label>
                                <input type="text"  required placeholder="Enter Last Name" className="form-control" id="studentlName"
                                       defaultValue={this.state.lastName}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="dob">Date of Birth (yyyy-mm-dd), e.g. (2011-01-01)</label>
                                <input type="text" placeholder="Enter Date of Birth" className="form-control" id="dob"
                                       defaultValue={this.state.student_dob} required/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="program">Program ID</label>
                                <input type="text" placeholder="Enter Program ID" className="form-control" id="program"
                                       defaultValue={this.state.prog_id} required/>
                            </div>

                            <div className="form-group">
                                <button onClick={()=>{_this.EditStudent(this.state.student_id)}}>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditStudent;