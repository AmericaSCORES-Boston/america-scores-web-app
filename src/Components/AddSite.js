import React, { Component } from 'react';
import Api from '../api';

/*
Represents the page that lets you add sites to through the Api
*/
class AddSite extends Component {

  //Tells the Api to add the site based on
  addSite() {
    let siteName = document.getElementById("siteName").value;
    let siteAddress = document.getElementById("siteAddress").value;

    if (siteName === "" || siteAddress === "") {
      alert("Please fill all the fields");
      return;
    }

    Api.addSite(siteName, siteAddress).then(() => {window.location = '/Sites'});
  }
  render() {
    return (
        <div className="container-fluid">
            <div className="row">
                <h2>Add a Site:</h2>
                <div className="col-md-6">
                    <form>
                        <div className="form-group">
                            <label for="sitename">Site Name</label>
                            <input type="text" className="form-control"  id="siteName" placeholder="Site Name"/>
                        </div>

                        <div className="form-group">
                            <label for="username">Site Address</label>
                            <input type="text" placeholder="Enter Site Address" className="form-control" id="siteAddress"/>
                        </div>

                        <div className="form-group">
                            <button onClick={this.addSite}>Add Site</button>
                        </div>

                    </form>

                </div>
            </div>
        </div>

  //       <div className="download-elements">
  //         <h2>Add a Site:</h2>
  //     <br/>
  // Site Name: &nbsp; <input type="text" id="siteName" />
  //     <br/>
  // Site Address:<input type="text" id="siteAddress" />
  //     <br/>
  //     <button onClick={this.addSite}>Add Site</button>
  // </div>

    );
  }
}

export default AddSite;