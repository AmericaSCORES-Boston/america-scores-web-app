import React, { Component } from 'react';
import Api from '../api';

/*
 Represents the page that lets you add sites to through the Api
 */
class AddAccount extends Component {

    //Tells the Api to add the account
    addAccount() {
        let accountEmailAddress = document.getElementById("accountEmailAddress").value;
        let accountUsername = document.getElementById("accountUsername").value;
        let accountFirstName = document.getElementById("accountFirstName").value;
        let accountLastName = document.getElementById("accountLastName").value;
        let accountPassword = document.getElementById("accountPassword").value;
        let accountType = document.getElementById("accountType").value;
        // let studentSite = document.getElementById("studentSite").value;
        if (accountEmailAddress === "" || accountUsername === "" || accountFirstName=="" || accountLastName=="" || accountPassword=="" || accountType=="") {
            alert("Information missing in input field. Please check");
            return;
        }
        if(!this.validateEmail(accountEmailAddress)) {
            alert('Email address is not correct.');
            return;
        }
        if(!this.validatePassword(accountPassword)) {
            alert('Password Required,At least one Upper case, Lower case, Digit, Special Character(@#$%^&*) and Minimum Length 8');
            return;
        }
        Api.addAccount(accountEmailAddress,accountUsername,accountPassword,accountFirstName,accountLastName,accountType).then((data) => {
            if(data.statusCode===400){
                alert(data.message);
            }
           else{
                alert('Account Created. Verfication Email Sent to '+accountEmailAddress+'. Please email them Username/Password.');
                window.location = '/ManageAccounts'
            }
        });

    }

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    validatePassword(pass){
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#\$%\^&\*])(?=.{8,})");
        var result = strongRegex.test(pass);
        return result;
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                    <form>
                        <div className="form-group">
                            <label for="email">Email address</label>
                            <input type="email" className="form-control" id="accountEmailAddress" placeholder="name@example.com"/>
                        </div>

                        <div className="form-group">
                            <label for="username">User Name</label>
                            <input type="text" placeholder="Enter Username" className="form-control" id="accountUsername"/>
                        </div>

                        <div className="form-group">
                            <label for="fname">First Name</label>
                            <input type="text" placeholder="Enter First Name" className="form-control" id="accountFirstName"/>
                        </div>

                        <div className="form-group">
                            <label for="lName">Last Name</label>
                            <input type="text" placeholder="Enter Last Name" className="form-control" id="accountLastName"/>
                        </div>

                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password"  placeholder="Enter password" className="form-control" id="accountPassword"/>
                        </div>

                        <div className="form-group">
                            <label for="accountType">Account Type</label>
                            <select className="form-control" id="accountType">
                                <option value="Coach">Coach</option>
                                <option value="Admin">Admin</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <button class="btn btn-success" onClick={()=>{this.addAccount()}}>Create Account</button>
                        </div>

                    </form>

                    </div>
                </div>
            </div>
        );
    }
}

export default AddAccount;