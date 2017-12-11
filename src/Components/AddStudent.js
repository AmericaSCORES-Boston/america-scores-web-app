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
    render() {
        let progID=this.props.location.query.program;
        return (

            <div className="container-fluid">
                <div className="row">
                    <h2>Add a Student:</h2>
                    <div className="col-md-6">
                        <form>
                            <div className="form-group">
                                <label for="studentfName">Student First Name</label>
                                <input type="text" className="form-control"  id="studentfName" placeholder="Enter First Name"/>
                            </div>

                            <div className="form-group">
                                <label for="studentlName">Student Last Name</label>
                                <input type="text" placeholder="Enter Last Name" className="form-control" id="studentlName"/>
                            </div>

                            <div className="form-group">
                                <label for="studentSite">Student Site</label>
                                <input type="text" placeholder="Enter Student Site" className="form-control" id="studentSite"/>
                            </div>

                            <div className="form-group">
                                <label for="dob">Date of Birth (yyyy-mm-dd)</label>
                                <input type="text" placeholder="Enter Date of Birth" className="form-control" id="dob"/>
                            </div>

                            <div className="form-group">
                                <button onClick={()=>{this.addStudent(progID)}}>Add Student</button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
            // {/*<div className="download-elements">*/}
            //     {/*<h2>Add a Student:</h2>*/}
            //     {/*<br/>*/}
            //     {/*Student First Name: &nbsp; <input type="text" id="studentfName" />*/}
            //     {/*<br/>*/}
            //     {/*Student Last Name:  &nbsp; <input type="text" id="studentlName" />*/}
            //     {/*<br/>*/}
            //     {/*/!*Student Site: <input type="text" id="studentSite" />*!/*/}
            //     {/*/!*<br/>*!/*/}
            //     {/*Date of Birth (yyyy-mm-dd): <input type="text" id="dob" />*/}
            //     {/*<br/>*/}
            //     {/*<button onClick={()=>{this.addStudent(progID)}}>Add Student</button>*/}
            // {/*</div>*/}
        );
    }
}

export default AddStudent;